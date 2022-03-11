import { green, yellow } from 'chalk';
import { parseComponentValue } from '../utils/parse-component-value';
import { createDirectoryIfNecessary } from '../utils/create-directory';
import { doesFileExists } from '../utils/check-file-exists';
import { writeFileSync } from 'fs';
import {
	getEntityTemplate,
	getMiddlewareTemplate,
	getMigrationTemplate,
	getModuleTemplate,
	getRepositoryTemplate,
	getRouterTemplate,
	getServiceTemplate,
	getValidatorTemplate,
} from '../templates';

type Options = {
	module?: string;
	middleware?: string;
	service?: string;
	router?: string;
	validator?: string;
	entity?: string;
	repository?: string;
	migration?: string;
	path?: string;
};

export function generateComponent({
	module,
	middleware,
	service,
	router,
	validator,
	entity,
	repository,
	migration,
	path,
}: Options) {
	if (module) {
		const componentDescriptor = parseComponentValue(module, 'module', path);
		return createComponentIfNecessary(componentDescriptor, getModuleTemplate(componentDescriptor.componentName));
	}

	if (middleware) {
		const componentDescriptor = parseComponentValue(middleware, 'middleware', path);
		return createComponentIfNecessary(
			componentDescriptor,
			getMiddlewareTemplate(componentDescriptor.componentName)
		);
	}

	if (service) {
		const componentDescriptor = parseComponentValue(service, 'service', path);
		return createComponentIfNecessary(componentDescriptor, getServiceTemplate(componentDescriptor.componentName));
	}

	if (router) {
		const componentDescriptor = parseComponentValue(router, 'router', path);
		return createComponentIfNecessary(componentDescriptor, getRouterTemplate(componentDescriptor.componentName));
	}

	if (validator) {
		const componentDescriptor = parseComponentValue(validator, 'validator', path);
		return createComponentIfNecessary(componentDescriptor, getValidatorTemplate(componentDescriptor.componentName));
	}

	if (entity) {
		const componentDescriptor = parseComponentValue(entity, 'entity', path);
		return createComponentIfNecessary(componentDescriptor, getEntityTemplate(componentDescriptor.componentName));
	}

	if (repository) {
		const componentDescriptor = parseComponentValue(repository, 'repository', path);
		return createComponentIfNecessary(
			componentDescriptor,
			getRepositoryTemplate(componentDescriptor.componentName)
		);
	}

	if (migration) {
		const componentDescriptor = parseComponentValue(migration, 'migration', path);
		return createComponentIfNecessary(componentDescriptor, getMigrationTemplate(componentDescriptor.componentName));
	}

	console.info(
		yellow(`ATTENTION! Check the newly created component to validate the config and update it if needed.`)
	);
}

export function createComponentIfNecessary(
	{
		relativeDestinationPath,
		fullDestinationPath,
		componentName,
		componentFileName,
	}: {
		relativeDestinationPath: string;
		fullDestinationPath: string;
		componentName: string;
		componentFileName: string;
	},
	content: string
): void {
	createDirectoryIfNecessary(relativeDestinationPath, fullDestinationPath);

	const exists = doesFileExists(fullDestinationPath + '/' + componentName, componentName);
	if (exists) return;

	writeFileSync(fullDestinationPath + '/' + componentFileName, content);
	console.info(green(`${componentFileName} successfully generated at ${fullDestinationPath}.`));
}
