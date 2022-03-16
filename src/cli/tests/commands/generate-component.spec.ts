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

const parentPath = './modules';
const path = parentPath + '/test';
const componentName = 'test';

function cleanup(path: string): void {
	unlinkSync(path);
}

function getExpectedComponentPath(componentName: string, type: string): string {
	return process.cwd() + `/${path}/${componentName}.${type}.ts`;
}

describe('generateComponent', () => {
	afterAll(() => {
		rmSync(path, { recursive: true, force: true });
		rmdirSync(parentPath);
	});

	it('should generate a module', () => {
		generateComponent(componentName, { module: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'module');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getModuleTemplate('TestModule'));
	});

	it('should generate a middleware', () => {
		generateComponent(componentName, { middleware: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'middleware');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getMiddlewareTemplate('TestMiddleware'));
	});

	it('should generate a service', () => {
		generateComponent(componentName, { service: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'service');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getServiceTemplate('TestService'));
	});

	it('should generate a router', () => {
		generateComponent(componentName, { router: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'router');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getRouterTemplate('TestRouter'));
	});

	it('should generate a validator', () => {
		generateComponent(componentName, { validator: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'validator');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getValidatorTemplate('TestValidator'));
	});

	it('should generate a entity', () => {
		generateComponent(componentName, { entity: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'entity');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getEntityTemplate('TestEntity'));
	});

	it('should generate a repository', () => {
		generateComponent(componentName, { repository: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'repository');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent).toEqual(getRepositoryTemplate('TestRepository'));
	});

	it('should generate a migration', () => {
		generateComponent(componentName, { migration: true, path });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'migration');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		cleanup(expectedComponentFile);

		expect(componentContent.replace(/\d+/g, '')).toEqual(getMigrationTemplate('TestMigration').replace(/\d+/g, ''));
	});

	it('should generate a module that includes other generated components automatically', () => {
		generateComponent(componentName, { middleware: true, path });
		generateComponent(componentName, { service: true, path });
		generateComponent(componentName, { module: true, path });
		generateComponent(componentName, { repository: true, path });
		generateComponent(componentName, { router: true, path });

		const subDirectory = 'subDirectory';
		generateComponent(componentName, { validator: true, path: path + '/' + subDirectory });

		const expectedComponentFile = getExpectedComponentPath(componentName, 'module');
		expect(existsSync(expectedComponentFile)).toBeTruthy();

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(normalizeString(componentContent)).toEqual(
			normalizeString(`
			import { Module } from 'medusa-extender';
			import { TestValidator } from './${subDirectory}/test.validator';
			import { TestRouter } from './test.router';
			import { TestRepository } from './test.repository';
			import { TestService } from './test.service';
			import { TestMiddleware } from './test.middleware';
			
			@Module({
				imports: [TestMiddleware, TestService, TestRepository, TestRouter, TestValidator]
			})
			export class TestModule {}
		`)
		);
	});
});
