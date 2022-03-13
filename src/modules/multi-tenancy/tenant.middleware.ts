import { MedusaAuthenticatedRequest, MedusaMiddleware, Middleware } from '../../';
import { NextFunction, Response } from 'express';
import { createConnection, EntityManager, getManager } from 'typeorm';
import { getConfigFile } from 'medusa-core-utils/dist';
import { ShortenedNamingStrategy } from '@medusajs/medusa/dist/utils/naming-strategy';
import { asValue } from 'awilix';
import TenantRepository from './tenant.repository';
import { logger } from './loader';

@Middleware({ requireAuth: false, routes: [{ method: 'all', path: '*' }] })
export class TenantMiddleware implements MedusaMiddleware {
	private static async getOrCreateConnection(
		configModule: any,
		container: any,
		host: string
	): Promise<EntityManager> {
		try {
			return getManager(host);
		} catch (e) {
			const entities = container.resolve('db_entities');
			const db_url =
				process.env.DATABASE_URL ||
				`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/storetest`;
			const connection = await createConnection({
				name: host,
				type: configModule.projectConfig.database_type,
				url: db_url,
				database: configModule.projectConfig.database_database,
				extra: configModule.projectConfig.database_extra || {},
				entities,
				namingStrategy: new ShortenedNamingStrategy(),
				logging: configModule.projectConfig.database_logging || false,
			});
			return connection.manager;
		}
	}

	public async consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
		const { configModule } = getConfigFile(process.cwd(), `medusa-config`) as any;
		const tenantRepository = getManager().getCustomRepository(TenantRepository);
		const tenantDb = await tenantRepository.findOne({ where: { host: req.hostname } });
		if (tenantDb) {
			logger.log(`Tenant database info found for hostname: ${req.hostname}`);
			const manager = await TenantMiddleware.getOrCreateConnection(configModule, req.scope, req.host);
			req.scope.register({
				manager: asValue(manager),
			});
			req.scope = req.scope.createScope();
		} else {
			logger.log(`Tenant database info not found for hostname: ${req.hostname}`);
		}
		return next();
	}
}
