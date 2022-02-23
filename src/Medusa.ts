import loaders from '@medusajs/medusa/dist/loaders';
import { getConfigFile } from "medusa-core-utils/dist";
import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import { Constructor } from './types';
import { Utils } from './utils';
import { metadataReader } from './metadata-reader';
import {
	apiLoader,
	authenticatedRoutesLoader,
	databaseLoader,
	validatorsLoader,
	migrationsLoader,
	overrideEntitiesLoader,
	overrideRepositoriesLoader,
	pluginsLoadersAndListeners,
	servicesLoader,
	unauthenticatedRoutesLoader,
} from './loaders';
import { buildMonitoringMiddleware, MonitoringOptions } from "./modules/monitoring";

// Use to fix MiddlewareService typings
declare global {
	type ExpressApp = Express;
}

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
	public async load(modules: Constructor<unknown>[]): Promise<AwilixContainer> {
		const moduleComponentsOptions = metadataReader(modules);

		await this.loadMonitoringModuleIfNecessary();

		await validatorsLoader(moduleComponentsOptions.get('validator') ?? []);
		await overrideEntitiesLoader(moduleComponentsOptions.get('entity') ?? []);
		await overrideRepositoriesLoader(moduleComponentsOptions.get('repository') ?? []);
		await apiLoader(this.#express, moduleComponentsOptions.get('middleware') ?? []);
		await databaseLoader(
			moduleComponentsOptions.get('entity') ?? [],
			moduleComponentsOptions.get('repository') ?? []
		);
		await pluginsLoadersAndListeners(this.#express);
		await servicesLoader(moduleComponentsOptions.get('service') ?? []);
		unauthenticatedRoutesLoader(moduleComponentsOptions.get('router') ?? [], this.#express);

		const { app, container, dbConnection } = await loaders({
			directory: this.#rootDir,
			expressApp: this.#express,
		});

		authenticatedRoutesLoader(moduleComponentsOptions.get('router') ?? [], app);

		await migrationsLoader(moduleComponentsOptions.get('migration') ?? [], dbConnection);

		Utils.logRoutes(app);
		return container as unknown as AwilixContainer;
	}

	private async loadMonitoringModuleIfNecessary(): Promise<void> {
		const config = getConfigFile(this.#rootDir, 'medusa-config') as { monitoring: MonitoringOptions };
		if (config.monitoring) {
			Utils.log('Monitoring module', 'Loading monitoring module with the configuration found in medusa-config');
			await buildMonitoringMiddleware(this.#express, config.monitoring);
			Utils.log('Monitoring module', 'Monitoring module successfully attached');
		}
	}
}
