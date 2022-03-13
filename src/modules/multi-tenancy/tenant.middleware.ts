import { NextFunction, Response } from 'express';
import { createConnection, EntityManager, getManager, LoggerOptions } from 'typeorm';
import { getConfigFile } from 'medusa-core-utils/dist';
import { ShortenedNamingStrategy } from '@medusajs/medusa/dist/utils/naming-strategy';
import { asValue, AwilixContainer } from 'awilix';
import TenantRepository from './tenant.repository';
import { MedusaAuthenticatedRequest, MedusaMiddleware } from '../../core';
import { Middleware } from '../../decorators';
import { Tenant } from "./tenant.entity";

export type TenantModuleExpectedConfig = { multiTenancy?: boolean, projectConfig: { database_logging?: LoggerOptions } };

@Middleware({ requireAuth: false, routes: [{ method: 'all', path: '*' }] })
export class TenantMiddleware implements MedusaMiddleware {
    private static async getOrCreateConnection(
        configModule: TenantModuleExpectedConfig,
        container: AwilixContainer,
        hostname: string,
        tenant: Tenant
    ): Promise<EntityManager> {
        try {
            return getManager(hostname);
        } catch (e) {
            const entities = container.resolve('db_entities');
            const connection = await createConnection({
                name: hostname,
                type: tenant.database_type as any,
                url: tenant.database_url,
                extra: tenant.database_extra || {},
                entities,
                namingStrategy: new ShortenedNamingStrategy(),
                logging: configModule.projectConfig.database_logging ?? false,
            });
            return connection.manager;
        }
    }

    public async consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
        const tenantRepository = getManager().getCustomRepository(TenantRepository);
        const tenant = await tenantRepository.findOne({ where: { host: req.hostname } });
        if (tenant) {
            const { configModule } = getConfigFile(process.cwd(), `medusa-config`) as { configModule: TenantModuleExpectedConfig };
            const manager = await TenantMiddleware.getOrCreateConnection(configModule, req.scope, req.hostname, tenant);
            req.scope.register({
                manager: asValue(manager),
            });
            req.scope = req.scope.createScope();
        }
        return next();
    }
}
