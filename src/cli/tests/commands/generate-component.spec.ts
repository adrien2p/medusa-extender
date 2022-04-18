import { generateComponent } from '../../commands/generate-component';
import { existsSync, readFileSync, rmdirSync, rmSync, unlinkSync } from 'fs';
import {
	getEntityTemplate,
	getMiddlewareTemplate,
	getMigrationTemplate,
	getModuleTemplate,
	getRepositoryTemplate,
	getRouterTemplate,
	getServiceTemplate,
	getValidatorTemplate,
} from '../../templates';
import { normalizeString } from '../__utils__/normalizeString';
import { getExpectedComponentPath } from '../__utils__/getExpectedComponentPath';

const dateMock = jest.spyOn(Date, 'now').mockImplementation(() => 1);

const parentPath = './modules';
const path = parentPath + '/test';
const componentName = 'test';

describe('GenerateComponent', () => {
	afterAll(() => {
		rmSync(path, { recursive: true, force: true });
		rmdirSync(parentPath);
		dateMock.mockClear();
	});

	it('should generate a module', () => {
		generateComponent(componentName, { module: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'module');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getModuleTemplate('TestModule'));
	});

	it('should generate a middleware', () => {
		generateComponent(componentName, { middleware: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'middleware');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getMiddlewareTemplate('TestMiddleware'));
	});

	it('should generate a service', () => {
		generateComponent(componentName, { service: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'service');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getServiceTemplate('TestService'));
	});

	it('should generate a router', () => {
		generateComponent(componentName, { router: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'router');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getRouterTemplate('TestRouter'));
	});

	it('should generate a validator', () => {
		generateComponent(componentName, { validator: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'validator');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getValidatorTemplate('TestValidator'));
	});

	it('should generate a entity', () => {
		generateComponent(componentName, { entity: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'entity');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getEntityTemplate('TestEntity'));
	});

	it('should generate a repository', () => {
		generateComponent(componentName, { repository: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'repository');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent).toEqual(getRepositoryTemplate('TestRepository'));
	});

	it('should generate a migration', () => {
		generateComponent(componentName, { migration: true, path });

		const expectedComponentFile = getExpectedComponentPath(path, '1-' + componentName, 'migration');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		unlinkSync(expectedComponentFile);

		expect(componentContent.replace(/\d+/g, '')).toEqual(
			getMigrationTemplate('TestMigration', '1').replace(/\d+/g, '')
		);
	});

	it('should generate a module that includes other generated components automatically', () => {
		generateComponent(componentName, { middleware: true, service: true, path });
		generateComponent(componentName, { module: true, path });
		generateComponent(componentName, { repository: true, router: true, entity: true, path });

		const subDirectory = 'subDirectory';
		generateComponent(componentName, { validator: true, path: path + '/' + subDirectory });

		const expectedComponentFile = getExpectedComponentPath(path, componentName, 'module');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(normalizeString(componentContent)).toEqual(
			normalizeString(`
			import { Module } from 'medusa-extender';
			import { TestValidator } from './${subDirectory}/test.validator';
			import { TestRouter } from './test.router';
			import { TestRepository } from './test.repository';
			import { Test } from './test.entity';
			import { TestService } from './test.service';
			import { TestMiddleware } from './test.middleware';
			
			@Module({
				imports: [TestMiddleware, TestService, Test, TestRepository, TestRouter, TestValidator]
			})
			export class TestModule {}
		`)
		);
	});
});
