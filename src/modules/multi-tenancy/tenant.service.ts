import { Service } from '../../decorators';
import { DataSource, EntityManager } from 'typeorm';
import { ConfigModule } from './types';
import { MedusaRequest } from '../../core';
import { getConfigFile } from 'medusa-core-utils';
//import "@medusajs/medusa/dist/utils/naming-strategy"

@Service()
export class TenantService {
	static readonly resolutionKey = 'tenantService';
	static tenantDataSources: Record<string, DataSource> = {};

	/**
	 * Provide a way to switch between database connections depending on the request property holding the tenant code.
	 * old methods
	 * @param defaultManager
	 * @param req
	 * 
	 * @deprecated
	 */

	public async getOrCreateConnection(defaultManager: EntityManager, req: MedusaRequest): Promise<EntityManager> {
	
		return this.getOrCreateDataSource(defaultManager,req);
	}
	/**
	 * Provide a way to switch between database connections depending on the request property holding the tenant code.
	 * @param defaultManager
	 * @param req
	 */
	public async getOrCreateDataSource(defaultManager: EntityManager, req: MedusaRequest): Promise<EntityManager> {
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



		let dataSource!: DataSource;
		if (TenantService.tenantDataSources[tenant.code]) {
			dataSource = TenantService.tenantDataSources[tenant.code]
		} else {
			const db_entities = req.scope.resolve('db_entities') as any[];
			const ds = new DataSource({
				name: tenant.code,
				type: tenant.database_config.database_type as any,
				url: tenant.database_config.database_url,
				database: tenant.database_config.database_database,
				extra: tenant.database_config.database_extra || {},
				entities: db_entities,
				//namingStrategy:defaultNamingStrategy
				logging: configModule.projectConfig.database_logging ?? false,
			});
			if (!ds.isInitialized) {
				TenantService.tenantDataSources[tenant.code] = ds;
				await ds.initialize();
				dataSource = TenantService.tenantDataSources[tenant.code];
			}
		}
		return dataSource.manager
		/* return await new Promise((resolve) => {
			dataSource.isInitialized
				? resolve(dataSource.manager)
				: dataSource.initialize().then((ds) => resolve(ds.manager));
		}); */
	}
}
