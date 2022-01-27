import loaders from '@medusajs/medusa/dist/loaders';
import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import { Type } from './types';
import { Utils } from './utils';
import { modulesMetadataReader } from './modules-metadata-reader';
import {
    apiLoader,
    authenticatedRoutesLoader,
    databaseLoader,
    entitiesLoader,
    migrationsLoader,
    overrideEntitiesLoader,
    overrideRepositoriesLoader,
    pluginsLoadersAndListeners,
    repositoriesLoader,
    servicesLoader,
    unauthenticatedRoutesLoader,
} from './loaders';

// Use to fix MiddlewareService typings
declare global {
    type ExpressApp = Express;
}

/**
 * @internal
 * Load medusa and apply all middlewares and migrations before registering the medusa
 * internal container and database connection.
 */
export class Loader {
    /**
     * @param modules
     * @param rootDir Directory where `medusa-config` is located
     * @param express Express instance
     */
    public async load(modules: Type[], rootDir: string, express: Express): Promise<AwilixContainer> {
        const moduleComponentsOptions = modulesMetadataReader(modules);

        await overrideEntitiesLoader(moduleComponentsOptions.get('entity'));
        await overrideRepositoriesLoader(moduleComponentsOptions.get('repository'));
        await apiLoader(express, moduleComponentsOptions.get('middleware'));
        await databaseLoader(moduleComponentsOptions.get('entity'), moduleComponentsOptions.get('repository'));
        await pluginsLoadersAndListeners(express);
        await servicesLoader(moduleComponentsOptions.get('service'));
        unauthenticatedRoutesLoader(moduleComponentsOptions.get('route'), express);

        const { app, container, dbConnection } = await loaders({
            directory: rootDir,
            expressApp: express,
        });

        authenticatedRoutesLoader(moduleComponentsOptions.get('route'), app);

        await migrationsLoader(moduleComponentsOptions.get('migration'), dbConnection);

        Utils.logRoutes(app);
        return container as unknown as AwilixContainer;
    }
}
