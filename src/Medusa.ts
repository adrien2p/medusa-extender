import loaders from '@medusajs/medusa/dist/loaders';
import { getConfigFile } from 'medusa-core-utils/dist';
import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import { Constructor } from './types';
import { Utils } from './utils';
import { metadataReader } from './metadata-reader';
import {
    adminApiLoader,
    databaseLoader,
    migrationsLoader,
    overrideEntitiesLoader,
    overrideRepositoriesLoader,
    pluginsLoadersAndListeners,
    servicesLoader,
    storeApiLoader,
    validatorsLoader,
} from './loaders';
import { buildMonitoringMiddleware, MonitoringOptions } from './modules/monitoring';

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

        const { container, dbConnection } = await loaders({
            isTest: process.env.NODE_ENV === 'test',
            directory: this.#rootDir,
            expressApp: this.#express,
        });

        await migrationsLoader(moduleComponentsOptions.get('migration') ?? [], dbConnection);

        Utils.hydrateRouterLog(this.#express);
        Utils.displayLogs();
        return container as unknown as AwilixContainer;
    }

    private async loadMonitoringModuleIfNecessary(): Promise<void> {
        const { configModule } = getConfigFile(this.#rootDir, 'medusa-config') as {
            configModule: { monitoring: MonitoringOptions };
        };
        if (configModule.monitoring) {
            Utils.hydrateLog(
                'Monitoring module',
                'Loading monitoring module with the configuration found in medusa-config'
            );
            await buildMonitoringMiddleware(this.#express, configModule.monitoring);
            Utils.hydrateLog('Monitoring module', 'Monitoring module successfully attached');
        }
    }
}
