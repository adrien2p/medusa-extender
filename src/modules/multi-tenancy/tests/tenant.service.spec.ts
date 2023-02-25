import { asFunction, asValue, createContainer } from 'awilix';
import {expect,describe,beforeAll,beforeEach,it,jest} from "@jest/globals"
import { TenantService } from '../tenant.service';
import * as typeormFunctions from 'typeorm/globals';
import { DataSource, EntityManager } from 'typeorm';
import { resolve } from 'path';
import Module from 'module';
import { JsonWebKeyInput } from 'crypto';
import { connect } from 'http2';
import { type } from 'os';
const t = jest.mock("typeorm")
class FakeService {
	manager: any;

	constructor({ manager }) {
		this.manager = manager;
	}
}
const tenantCodes = ['tenant-code-1', 'tenant-code-2'];

const defaultManagerMock = {
	connection: { name: tenantCodes[0], createQueryRunner: DataSource.prototype.createQueryRunner },
};
const defaultManagerMock_2 = {
	connection: { name: tenantCodes[1], createQueryRunner: DataSource.prototype.createQueryRunner },
};
jest.mock("typeorm",()=>
{ return {
	DataSource:jest.fn().mockImplementation((s: any)=>{
		return {
		isInitialized:false,
		manager:{...defaultManagerMock,
			connection:{name:s.name,createQueryRunner: DataSource.prototype.createQueryRunner}},
		initialize:jest.fn().mockReturnValue(Promise.resolve({
			isInitialized:true,
			manager:{...defaultManagerMock,
				connection:{name:s.name,createQueryRunner: DataSource.prototype.createQueryRunner}}}))}})}
})


const container = createContainer();




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
		expect(manager.connection.name).toBe(tenantCodes[0]);

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
