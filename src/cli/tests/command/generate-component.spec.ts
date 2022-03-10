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

describe('generateComponent', () => {
	it('should generate a module', () => {
		const componentFileName = 'test.module.ts';
		generateComponent({ module: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getModuleTemplate('TestModule'));

		cleanup(componentFileName);
	});

	it('should generate a middleware', () => {
		const componentFileName = 'test.middleware.ts';
		generateComponent({ middleware: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getMiddlewareTemplate('TestMiddleware'));

		cleanup(componentFileName);
	});

	it('should generate a service', () => {
		const componentFileName = 'test.service.ts';
		generateComponent({ service: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getServiceTemplate('TestService'));

		cleanup(componentFileName);
	});

	it('should generate a router', () => {
		const componentFileName = 'test.router.ts';
		generateComponent({ router: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getRouterTemplate('TestRouter'));

		cleanup(componentFileName);
	});

	it('should generate a validator', () => {
		const componentFileName = 'test.validator.ts';
		generateComponent({ validator: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getValidatorTemplate('TestValidator'));

		cleanup(componentFileName);
	});

	it('should generate a entity', () => {
		const componentFileName = 'test.entity.ts';
		generateComponent({ entity: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getEntityTemplate('TestEntity'));

		cleanup(componentFileName);
	});

	it('should generate a repository', () => {
		const componentFileName = 'test.repository.ts';
		generateComponent({ repository: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getRepositoryTemplate('TestRepository'));

		cleanup(componentFileName);
	});

	it('should generate a migration', () => {
		const componentFileName = 'test.migration.ts';
		generateComponent({ migration: componentFileName });

		expect(existsSync(componentFileName));

		const componentContent = readFileSync(componentFileName).toString();
		expect(componentContent).toEqual(getMigrationTemplate('TestMigration'));

		cleanup(componentFileName);
	});
});
