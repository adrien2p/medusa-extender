import { Service } from '../../decorators';
import { DataSource, EntityManager } from 'typeorm';
import { ConfigModule } from './types';
import { MedusaRequest } from '../../core';
import { getConfigFile } from 'medusa-core-utils';

@Service()
export class TenantService {
	connections: Map<string, DataSource> = new Map();
	static readonly resolutionKey = 'tenantService';

	/**
	 * Provide a way to switch between database connections depending on the request property holding the tenant code.
	 * @param defaultManager
	 * @param req
	 */
	public async getOrCreateConnection(defaultManager: EntityManager, req: MedusaRequest): Promise<EntityManager> {
		// TODO: Remove once medusa allow to store custom configuration
		const { configModule } = getConfigFile(process.cwd(), 'medusa-config') as {
			configModule: ConfigModule;
		};

		if (!configModule.multi_tenancy?.tenant_code_resolver) {
			throw new Error('Missing tenant_code_resolver from multi_tenancy config in medusa-config.');
		}
		const tenantCode = configModule.multi_tenancy.tenant_code_resolver(req);
		if (!tenantCode) {
			return defaultManager;
		}

		const tenant = configModule.multi_tenancy.tenants.find((tenantConfig) => {
			return tenantConfig.code === tenantCode;
		});
		if (!tenant) {
			throw new Error(
				'Unable to find the tenant from the code found. Please check that the tenant code is part of the config.'
			);
		}

		let connection!: DataSource;
		if (this.connections.has(tenant.code)) {
			connection = await this.connections.get(tenant.code);
		} else {
			const db_entities = req.scope.resolve('db_entities') as any[];
			connection = new DataSource({
				name: tenant.code,
				type: tenant.database_config.database_type as any,
				url: tenant.database_config.database_url,
				database: tenant.database_config.database_database,
				extra: tenant.database_config.database_extra || {},
				entities: db_entities,
				logging: configModule.projectConfig.database_logging ?? false,
			});

			this.connections.set(tenant.code, connection);
		}

		return await new Promise((resolve) => {
			connection.isInitialized
				? resolve(connection.manager)
				: connection.initialize().then((conn) => resolve(conn.manager));
		});
	}
}
