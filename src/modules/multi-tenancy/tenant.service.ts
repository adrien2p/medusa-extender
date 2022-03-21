import { Service } from '../../decorators';
import { createConnection, EntityManager, getConnectionManager } from 'typeorm';
import { ShortenedNamingStrategy } from '@medusajs/medusa/dist/utils/naming-strategy';
import { ConfigModule } from './types';
import { MedusaRequest } from '../../core';
import TenantRepository from './tenant.repository';

type ConstructorParams = {
	tenantRepository: typeof TenantRepository;
};

@Service()
export class TenantService {
	static readonly resolutionKey = 'tenantService';

	readonly #tenantRepository: typeof TenantRepository;

	constructor(private readonly container: ConstructorParams, private readonly config: ConfigModule) {
		this.#tenantRepository = container.tenantRepository;
	}

	/**
	 * Provide a way to switch between database connections depending on the request property holding the tenant code.
	 * @param defaultManager
	 * @param req
	 */
	public async getOrCreateConnection(defaultManager: EntityManager, req: MedusaRequest): Promise<EntityManager> {
		if (!this.config.multiTenancy?.tenantCodeResolver) {
			throw new Error('Missing tenantCodeResolver from multiTenancy config in medusa-config.');
		}
		const tenantCode = this.config.multiTenancy.tenantCodeResolver(req);
		if (!tenantCode) {
			return defaultManager;
		}

		const tenantRepo = defaultManager.getCustomRepository(this.#tenantRepository);
		const tenant = await tenantRepo.findOne({ where: { code: tenantCode } });
		if (!tenant) {
			throw new Error('Unable to find the tenant from the code found.');
		}

		const connectionManager = getConnectionManager();
		if (connectionManager.has(tenant.code)) {
			const connection = await connectionManager.get(tenant.code);
			return Promise.resolve(
				connection.isConnected ? connection.manager : connection.connect().then((conn) => conn.manager)
			);
		} else {
			const db_entities = req.scope.resolve('db_entities') as any[];
			await createConnection({
				name: tenant.code,
				type: tenant.database_type as any,
				url: tenant.database_url,
				database: tenant.database_database,
				extra: tenant.database_extra || {},
				entities: db_entities,
				namingStrategy: new ShortenedNamingStrategy(),
				logging: this.config.projectConfig.database_logging ?? false,
			});

			const connection = await connectionManager.get(tenant.code);
			return Promise.resolve(
				connection.isConnected ? connection.manager : connection.connect().then((conn) => conn.manager)
			);
		}
	}
}
