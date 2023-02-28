import loaders from '@medusajs/medusa/dist/loaders';
import { dataSource } from '@medusajs/medusa/dist/loaders/database';
import * as getEndpoints from 'express-list-endpoints';
import { Express } from 'express';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';
import { asyncLoadConfig, DatabaseHostConfig, Logger, Type } from './core';
import {
	adminApiLoader,
	customApiLoader,
	databaseLoader,
	modulesLoader,
	overrideEntitiesLoader,
	overrideRepositoriesLoader,
	pluginsLoadersProvidersAndListeners,
	servicesLoader,
	storeApiLoader,
	subscribersLoader,
	validatorsLoader,
} from './loaders';
import { asFunction } from 'awilix';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SingleEntryPlugin } from 'webpack';

// Use to fix MiddlewareService typings
declare global {
	type ExpressApp = Express;
}

const logger = Logger.contextualize('Medusa');

/**
 * Load medusa and apply all components
 */
export class Medusa {
	readonly #express: Express;
	readonly #rootDir: string;
	tempDataSource: DataSource;
	databaseStarter: boolean;

	async startDatabase(configModule, entities, customOptions): Promise<DataSource> {
		let hostConfig: DatabaseHostConfig = {
			database: configModule.projectConfig.database_database,
			url: configModule.projectConfig.database_url,
			schema: configModule.projectConfig.database_schema,
			logging: configModule.projectConfig.database_logging,
		};

		if (configModule.projectConfig.database_host) {
			hostConfig = {
				host: configModule.projectConfig.database_host,
				port: configModule.projectConfig.database_port,
				database: configModule.projectConfig.database_database,
				schema: configModule.projectConfig.database_schema,
				logging: configModule.projectConfig.database_logging,
				ssl: configModule.projectConfig.database_ssl,
				username: configModule.projectConfig.database_username,
				password: configModule.projectConfig.database_password,
			};
		}

		const dataSource = new DataSource({
			type: configModule.projectConfig.database_type,
			...hostConfig,
			extra: configModule.projectConfig.database_extra || {},
			schema: configModule.projectConfig.database_schema,
			entities,
			migrations: customOptions?.migrations,
			logging: customOptions?.logging ?? (configModule.projectConfig.database_logging || false),
		} as DataSourceOptions);

		await dataSource.initialize();
		return dataSource;
	}

	/**
	 * @param rootDir Directory where the `medusa-config` is located
	 * @param express Express instance
	 */
	constructor(rootDir: string, express: Express, modules: Type[]) {
		this.#express = express;
		this.#rootDir = rootDir;
		this.databaseStarter = true;
	}

	startDatabaseAction = async () => {
		this.databaseStarter = false;
		const configModule = await asyncLoadConfig(this.#rootDir, 'medusa-config');
		if (!dataSource && !dataSource?.isInitialized) {
			const extendedDataSource = await this.startDatabase(configModule, [], {
				migrations: [],
			});
			Object.assign(dataSource, extendedDataSource);
			await dataSource.initialize();
			this.tempDataSource = dataSource;
		}
	};

	init = async () => {
		while (!dataSource && !dataSource?.isInitialized)
			if (this.databaseStarter) {
				await this.startDatabaseAction();
				return dataSource;
			} else {
				await this.sleep(1000);
				console.log('waiting');
			}
	};

	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * @param modules The modules to load into medusa
	 */
	public async load(modules: Type[]): Promise<MedusaContainer> {
		
		if (this.tempDataSource?.isInitialized) {
			this.tempDataSource.destroy();
		}
		const configModule = await asyncLoadConfig(this.#rootDir, 'medusa-config');
		const moduleComponentsOptions = await modulesLoader(modules, configModule);
		await validatorsLoader(moduleComponentsOptions.get('validator') ?? []);
		await overrideEntitiesLoader(moduleComponentsOptions.get('entity') ?? []);

		await customApiLoader(
			this.#express,
			moduleComponentsOptions.get('middleware') ?? [],
			moduleComponentsOptions.get('router') ?? []
		);
		await adminApiLoader(
			this.#express,
			moduleComponentsOptions.get('middleware') ?? [],
			moduleComponentsOptions.get('router') ?? []
		);
		await storeApiLoader(
			this.#express,
			moduleComponentsOptions.get('middleware') ?? [],
			moduleComponentsOptions.get('router') ?? []
		);
		const dataSource = await databaseLoader(
			moduleComponentsOptions.get('entity') ?? [],
			moduleComponentsOptions.get('repository') ?? [],
			moduleComponentsOptions.get('migration') ?? []
		);
		await pluginsLoadersProvidersAndListeners(this.#express, moduleComponentsOptions.get('provider') ?? []);
		await servicesLoader(moduleComponentsOptions.get('service') ?? []);
		await subscribersLoader(moduleComponentsOptions.get('subscriber') ?? []);

		const { container } = await loaders({
			isTest: process.env.NODE_ENV === 'test',
			directory: this.#rootDir,
			expressApp: this.#express,
		});

		container.register('dataSource', asFunction(() => dataSource).singleton());
		/** overwrites with new repositories */
		await overrideRepositoriesLoader(moduleComponentsOptions.get('repository') ?? [], container);

		const endPoints = getEndpoints(this.#express);
		for (const endPoint of endPoints) {
			endPoint.methods.map((method) => {
				logger.push('Route Mapped {%s, %s}', endPoint.path, method);
			});
		}
		logger.flush();

		return container as any;
	}
}

export const MedusaExtendedCore = Medusa;

export default MedusaExtendedCore;
