import { green } from 'chalk';
import { parseComponentValue } from '../utils/parse-component-value';
import { createDirectoryIfNecessary } from '../utils/create-directory';
import { doesFileExists } from '../utils/check-file-exists';
import { writeFileSync } from 'fs';
import { getMiddlewareTemplate, getModuleTemplate, getRouterTemplate, getServiceTemplate } from '../templates';

type Options = { module?: string; middleware?: string; service?: string; router?: string };

export function generateComponent({ module, middleware, service, router }: Options) {
	if (module) {
		const { componentName } = parseComponentValue(module);
		return createComponentIfNecessary(module, getModuleTemplate(componentName));
	}

	if (middleware) {
		const { componentName } = parseComponentValue(middleware);
		return createComponentIfNecessary(middleware, getMiddlewareTemplate(componentName));
	}

	if (service) {
		const { componentName } = parseComponentValue(service);
		return createComponentIfNecessary(service, getServiceTemplate(componentName));
	}

	if (router) {
		const { componentName } = parseComponentValue(router);
		return createComponentIfNecessary(router, getRouterTemplate(componentName));
	}
}

export function createComponentIfNecessary(component: string, content: string): void {
	console.info(`Generating component.`);

	const { componentName, componentFileName, relativeDestinationPath, fullDestinationPath } =
		parseComponentValue(component);
	createDirectoryIfNecessary(relativeDestinationPath, fullDestinationPath);

	const exists = doesFileExists(fullDestinationPath + '/' + componentName, componentName);
	if (exists) return;

	writeFileSync(fullDestinationPath + '/' + componentFileName, content);
	console.info(green(`${componentFileName} successfully generated at ${fullDestinationPath}.`));
}
