import { asFunction, asValue, createContainer } from 'awilix';
import {expect,jest,describe,beforeAll,beforeEach,it} from "@jest/globals"
import { TenantService } from '../tenant.service';
import * as typeormFunctions from 'typeorm/globals';
import { DataSource, EntityManager } from 'typeorm';
import { resolve } from 'path';

class FakeService {
	manager: any;

	constructor({ manager }) {
		this.manager = manager;
	}
}

/*class ConnectionManagerMock {
	private connectionMap = new Map();

	get connections() {
		return [...this.connectionMap.values()];
	}

	create(options: any): Promise<DataSource> {
		this.connectionMap.set(options.name, options);
		(options as any).manager.connection = {
			...this.connectionMap.get(options.name),
			...(options as any).manager.connection,
		};
		return Promise.resolve(this.connectionMap.get(options.name));
	}

	has(name: string) {
		return this.connectionMap.has(name);
	}

	get(name: string) {
		return this.connectionMap.get(name);
	}
}

const connectionManagerMock = new ConnectionManagerMock();

jest.spyOn(typeormFunctions, 'getConnectionManager').mockImplementation((): ConnectionManager => {
	return connectionManagerMock as any;
});*/

// esModule.test.js
const mock = jest.mock('typeorm', () => ({
  __esModule: true, // this property makes it work
  default: 'mockedDefaultExport',
  DataSource: jest.fn(),
}));



jest.spyOn(typeormFunctions, 'DataSource').mockImplementation((options: any) => {
	const connectRes = {
		manager: {
			connection: { name: options.name, createQueryRunner: DataSource.prototype.createQueryRunner },
		},
	};
	return Promise.resolve(connectRes)
	});

const container = createContainer();
const defaultManagerMock = {
	connection: { name: 'default', createQueryRunner: DataSource.prototype.createQueryRunner },
};

const tenantCodes = ['tenant-code-1', 'tenant-code-2'];

describe('Tenant service', () => {
	let reqMock;

	beforeAll(() => {
		process.cwd = () => resolve(__dirname, 'fixtures');
		container.register({
			request: asFunction(() => 'test', { lifetime: 'SCOPED' }),
			fakeService: asFunction((cradle) => new FakeService(cradle), { lifetime: 'SINGLETON' }),
			manager: asValue(defaultManagerMock),
			db_entities: asValue([]),
			[TenantService.resolutionKey]: asFunction(
				() => {
					return new TenantService();
				},
				{ lifetime: 'SINGLETON' }
			),
		});
	});

	it('should get or create a new connection', async () => {
		reqMock = {
			scope: container.createScope(),
			headers: {
				'x-tenant': tenantCodes[0],
			},
		};

		let fakeService, manager:EntityManager;

		let tenantService = container.resolve(TenantService.resolutionKey) as TenantService;
		manager = await tenantService.getOrCreateDataSource(defaultManagerMock as any, reqMock);
		expect(manager).toBe(tenantCodes[0]);

		fakeService = container.resolve('fakeService') as FakeService;
		expect(fakeService.manager.connection.name).toBe(defaultManagerMock.connection.name);

		container.register({ manager: asValue(manager) });
		container.cache.clear();
		reqMock.scope = container.createScope();

		fakeService = reqMock.scope.resolve('fakeService') as FakeService;
		expect(fakeService.manager.connection.name).toBe(tenantCodes[0]);

		tenantService = reqMock.scope.resolve(TenantService.resolutionKey) as TenantService;
		manager = (await tenantService.getOrCreateDataSource(defaultManagerMock as any, reqMock))
		expect(manager.connection.name).toBe(tenantCodes[0]);

		fakeService = reqMock.scope.resolve('fakeService') as FakeService;
		expect(fakeService.manager.connection.name).toBe(tenantCodes[0]);

		reqMock.headers['x-tenant'] = tenantCodes[1];
		tenantService = reqMock.scope.resolve(TenantService.resolutionKey) as TenantService;
		manager = (await tenantService.getOrCreateDataSource(defaultManagerMock as any, reqMock))
		expect(manager.connection.name).toBe(tenantCodes[1]);

		fakeService = reqMock.scope.resolve('fakeService') as FakeService;
		expect(fakeService.manager.connection.name).toBe(tenantCodes[0]);

		container.register({ manager: asValue(manager) });
		container.cache.clear();
		reqMock.scope = container.createScope();
		reqMock.headers = {};

		fakeService = reqMock.scope.resolve('fakeService') as FakeService;
		expect(fakeService.manager.connection.name).toBe(tenantCodes[1]);

		tenantService = reqMock.scope.resolve(TenantService.resolutionKey) as TenantService;
		manager = (await tenantService.getOrCreateDataSource(defaultManagerMock as any, reqMock))
		expect(manager.connection.name).toBe(defaultManagerMock.connection.name);

		fakeService = reqMock.scope.resolve('fakeService') as FakeService;
		expect(fakeService.manager.connection.name).toBe(tenantCodes[1]);
	});
});
