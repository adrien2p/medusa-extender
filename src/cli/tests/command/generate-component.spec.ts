import { generateComponent } from '../../command/generate-component';
import { existsSync, readFileSync, unlinkSync } from 'fs';
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

function cleanup(path: string): void {
	unlinkSync(path);
}

const path = '.';
const componentName = 'test';

describe('generateComponent', () => {
	it('should generate a module', () => {
		generateComponent({ module: componentName, path });

		const expectedComponentFile = `${componentName}.module.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getModuleTemplate('TestModule'));

		cleanup(expectedComponentFile);
	});

	it('should generate a middleware', () => {
		generateComponent({ middleware: componentName, path });

		const expectedComponentFile = `${componentName}.middleware.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getMiddlewareTemplate('TestMiddleware'));

		cleanup(expectedComponentFile);
	});

	it('should generate a service', () => {
		generateComponent({ service: componentName, path });

		const expectedComponentFile = `${componentName}.service.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getServiceTemplate('TestService'));

		cleanup(expectedComponentFile);
	});

	it('should generate a router', () => {
		generateComponent({ router: componentName, path });

		const expectedComponentFile = `${componentName}.router.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getRouterTemplate('TestRouter'));

		cleanup(expectedComponentFile);
	});

	it('should generate a validator', () => {
		generateComponent({ validator: componentName, path });

		const expectedComponentFile = `${componentName}.validator.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getValidatorTemplate('TestValidator'));

		cleanup(expectedComponentFile);
	});

	it('should generate a entity', () => {
		generateComponent({ entity: componentName, path });

		const expectedComponentFile = `${componentName}.entity.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getEntityTemplate('TestEntity'));

		cleanup(expectedComponentFile);
	});

	it('should generate a repository', () => {
		generateComponent({ repository: componentName, path });

		const expectedComponentFile = `${componentName}.repository.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent).toEqual(getRepositoryTemplate('TestRepository'));

		cleanup(expectedComponentFile);
	});

	it('should generate a migration', () => {
		generateComponent({ migration: componentName, path });

		const expectedComponentFile = `${componentName}.migration.ts`;
		expect(existsSync(expectedComponentFile));

		const componentContent = readFileSync(expectedComponentFile).toString();
		expect(componentContent.replace(/\d+/g, '')).toEqual(getMigrationTemplate('TestMigration').replace(/\d+/g, ''));

		cleanup(expectedComponentFile);
	});
});
