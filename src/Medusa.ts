import loaders from '@medusajs/medusa/dist/loaders';
import { getConfigFile } from 'medusa-core-utils/dist';
import * as getEndpoints from 'express-list-endpoints';
import { Express } from 'express';
import { Logger, Type } from './core';
import {
	adminApiLoader,
	customApiLoader,
	databaseLoader,
	migrationsLoader,
	modulesLoader,
	overrideEntitiesLoader,
	overrideRepositoriesLoader,
	pluginsLoadersAndListeners,
	servicesLoader,
	storeApiLoader,
	subscribersLoader,
	validatorsLoader,
} from './loaders';
import { loadMonitoringModule, MonitoringOptions } from './modules/monitoring';
import { MedusaContainer } from "@medusajs/medusa/dist/types/global";

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

	/**
	 * @param rootDir Directory where the `medusa-config` is located
	 * @param express Express instance
	 */
	constructor(rootDir: string, express: Express) {
		this.#express = express;
		this.#rootDir = rootDir;
	}

	/**
	 * @param modules The modules to load into medusa
	 */
	public async load(modules: Type[]): Promise<MedusaContainer> {
		const { configModule } = getConfigFile(this.#rootDir, 'medusa-config') as {
			configModule: {
				monitoring: MonitoringOptions;
			};
		};

		const moduleComponentsOptions = await modulesLoader(modules, configModule);

		await loadMonitoringModule(configModule, this.#express, configModule.monitoring);

		await validatorsLoader(moduleComponentsOptions.get('validator') ?? []);
		await overrideEntitiesLoader(moduleComponentsOptions.get('entity') ?? []);
		await overrideRepositoriesLoader(moduleComponentsOptions.get('repository') ?? []);
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
		await databaseLoader(
			moduleComponentsOptions.get('entity') ?? [],
			moduleComponentsOptions.get('repository') ?? []
		);
		await pluginsLoadersAndListeners(this.#express);
		await servicesLoader(moduleComponentsOptions.get('service') ?? []);
		await subscribersLoader(moduleComponentsOptions.get('subscriber') ?? []);

		const { container, dbConnection } = await loaders({
			isTest: process.env.NODE_ENV === 'test',
			directory: this.#rootDir,
			expressApp: this.#express,
		});

		await migrationsLoader(moduleComponentsOptions.get('migration') ?? [], dbConnection);

		const endPoints = getEndpoints(this.#express);
		for (const endPoint of endPoints) {
			endPoint.methods.map((method) => {
				logger.push('Route Mapped {%s, %s}', endPoint.path, method);
			});
		}
		logger.flush();

		return container;
	}
}
