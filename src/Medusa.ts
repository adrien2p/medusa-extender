import loaders from '@medusajs/medusa/dist/loaders';
import { getConfigFile } from 'medusa-core-utils/dist';
import * as getEndpoints from 'express-list-endpoints';
import { Express } from 'express';
import { Logger, MedusaContainer, Type } from './core';
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
import { ConfigModule } from '@medusajs/medusa/dist/types/global';

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
		const configuration = getConfigFile(process.cwd(), `medusa-config`) as {
			configModule: ConfigModule;
			configFilePath: string;
		};
		const resolveConfigProperties = async (obj): Promise<ConfigModule> => {
			for (const key of Object.keys(obj)) {
				if (typeof obj[key] === 'object' && obj[key] !== null) {
					await resolveConfigProperties(obj[key]);
				}
				if (typeof obj[key] === 'function') {
					obj[key] = await obj[key]();
				}
			}
			return obj;
		};
		const configModule = await resolveConfigProperties(configuration.configModule);

		/*const { configModule } = getConfigFile(this.#rootDir, 'medusa-config') as {
			configModule: {
				monitoring: MonitoringOptions;
			};
		};*/

		const moduleComponentsOptions = await modulesLoader(modules, configModule);

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
