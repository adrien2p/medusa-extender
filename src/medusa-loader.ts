import loaders from '@medusajs/medusa/dist/loaders';
import { Express, NextFunction, Response } from 'express';
import { Connection, Migration, MigrationInterface } from 'typeorm';
import { AwilixContainer } from 'awilix';
import {
	Constructor,
	MedusaAuthenticatedRequest,
	MedusaEntityStatic,
	MedusaRepositoryStatic,
	MedusaRequest,
	MedusaRoute,
	MedusaServiceStatic,
	Type,
} from './types';
import { Utils } from './medusa-utils';
import {
	apiLoader,
	authenticatedRoutesLoader,
	databaseLoader,
	overriddenEntitiesLoader,
	overriddenRepositoriesLoader,
	servicesLoader,
	unauthenticatedRoutesLoader,
} from './loaders';
import { medusaEventEmitter } from './medusa-event-emitter';
import { readMetadatas } from './read-metadatas';
import { scanFor } from './medusa-scanner';

// Use to fix MiddlewareService typings
declare global {
	type ExpressApp = Express;
}

/**
 * @internal
 * Return type used for {@link startMedusaEngine}
 */
type MedusaStartApp = {
	app: Express;
	container: AwilixContainer;
	dbConnection: Connection;
};

const CustomComponentsRetrievalKeys = {
	services: 'services',
	migrations: 'migrations',
	entities: 'entities',
	repositories: 'repositories',
	routes: 'routes',
};

type CustomComponentsRetrievalMapKeyType = {
	services: MedusaServiceStatic;
	migrations: Constructor<MigrationInterface>;
	entities: MedusaEntityStatic;
	repositories: MedusaRepositoryStatic;
	routes: MedusaRoute[];
};

/**
 * @internal
 * Load medusa and apply all middlewares and migrations before registering the medusa
 * internal container and database connection.
 */
export class MedusaLoader {
	/**
	 * @param modules
	 * @param rootDir Directory where `medusa-config` is located
	 * @param express Express instance
	 */
	public async load(modules: Type[], rootDir: string, express: Express): Promise<AwilixContainer> {
		const moduleComponentsOptions = readMetadatas(modules);
		const customComponents = await scanFor<CustomComponentsRetrievalMapKeyType>(rootDir, {
			extname: '.js',
			searchFor: Object.values(CustomComponentsRetrievalKeys).map((retrievalKey) => ({
				lastSegmentPathDir: retrievalKey,
				retrievalKey: retrievalKey,
			})),
		});

		await this.registerEventEmitterMiddleware(express);
		await overriddenEntitiesLoader(moduleComponentsOptions.get('entity'));
		await overriddenRepositoriesLoader(moduleComponentsOptions.get('repository'));

		await apiLoader(express);
		await databaseLoader(customComponents.entities, customComponents.repositories);
		unauthenticatedRoutesLoader(customComponents.routes, express);

		const { app, container, dbConnection } = await this.startMedusaEngine(rootDir, express);

		authenticatedRoutesLoader(customComponents.routes, app);
		servicesLoader(customComponents.services, container);

		await this.runCustomMigrations(customComponents.migrations, dbConnection);

		Utils.logRoutes(app);
		return container;
	}

	/**
	 * Register all listeners before the plugins are loaded to be sure that the scope middleware has already been created.
	 * @param app Express app
	 */
	private async registerEventEmitterMiddleware(app: Express): Promise<void> {
		const pluginLoader = await import('@medusajs/medusa/dist/loaders/plugins');
		const originalPluginLoader = pluginLoader.default;
		pluginLoader.default = async (cradle: {
			app: Express;
			rootDirectory: string;
			container: AwilixContainer;
			activityId: string;
		}) => {
			app.use(
				async (
					req: MedusaRequest | MedusaAuthenticatedRequest,
					res: Response,
					next: NextFunction
				): Promise<void> => {
					await medusaEventEmitter.registerListeners(req.scope);
					return next();
				}
			);

			return originalPluginLoader(cradle);
		};
	}

	/**
	 * @private
	 * Start the internal medusa engine using core loaders
	 * @param rootDir Directory where `medusa-config` is located
	 * @param express Express instance
	 */
	private async startMedusaEngine(rootDir: string, express: Express): Promise<MedusaStartApp> {
		const { app, container, dbConnection } = await loaders({
			directory: rootDir,
			expressApp: express,
		});

		return { app, container, dbConnection } as unknown as MedusaStartApp;
	}

	/**
	 * @private
	 * Run custom migrations that are find from the provided directory and stored in a `migrations` subdirectory.
	 * @param migrations Any custom migration that implements MigrationInterface
	 * @param dbConnection Database connection from medusa internal
	 */
	private async runCustomMigrations(
		migrations: Constructor<MigrationInterface>[],
		dbConnection: Connection
	): Promise<void> {
		dbConnection.migrations.push(...migrations.map((Migration) => new Migration()));

		await dbConnection.runMigrations().then((ranMigrations: Migration[]) => {
			for (const migration of ranMigrations) {
				const preparedLog = Utils.prepareLog(
					'MedusaLoader#runCustomMigrations',
					`Migration applied - ${migration.name}`
				);
				console.log(preparedLog);
			}
		});
	}
}
