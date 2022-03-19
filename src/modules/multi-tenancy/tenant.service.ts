import { Service } from '../../decorators';
import { createConnection, EntityManager, getConnectionManager } from 'typeorm';
import { ShortenedNamingStrategy } from '@medusajs/medusa/dist/utils/naming-strategy';
import { ConfigModule } from './types';
import { MedusaRequest } from '../../core';
import TenantRepository from './tenant.repository';

type ConstructorParams = {
	manager: EntityManager;
	tenantRepository: typeof TenantRepository;
};

@Service({ resolutionKey: 'tenantService' })
export class TenantService {
	static readonly resolutionKey = 'tenantService';

	readonly #manager: EntityManager;
	readonly #tenantRepository: typeof TenantRepository;

	constructor(private readonly container: ConstructorParams, private readonly config: ConfigModule) {
		this.#manager = container.manager;
		this.#tenantRepository = container.tenantRepository;
	}

	/**
	 * Provide a way to switch between database connections depending on the request property holding the tenant code.
	 * @param req
	 */
	public async getOrCreateConnection(req: MedusaRequest): Promise<EntityManager> {
		const tenantCode = this.getTenantCodeFromReq(req);
		if (!tenantCode) {
			return this.#manager;
		}

		const tenantRepo = this.#manager.getCustomRepository(this.#tenantRepository);
		const tenant = await tenantRepo.findOne({ where: { code: tenantCode } });
		if (!tenant) {
			throw new Error('Unable to find the tenant code.');
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

	/**
	 * @internal
	 * Retrieve the tenant code from the request based on the config provided by the user.
	 * @param req
	 */
	private getTenantCodeFromReq(req: MedusaRequest): string {
		const pathToReqProperties = this.config.multiTenancy.pathToReqProperties;

		let tenantCode;
		for (const path of pathToReqProperties) {
			const code = path.split('.').reduce(<T, K extends keyof T>(obj: T, prop: string): T[K] => {
				if (obj && typeof obj === 'object' && obj[prop]) {
					return obj[prop];
				}
				return null;
			}, req);
			if (code) {
				tenantCode = code;
				break;
			}
		}

		return tenantCode;
	}
}
