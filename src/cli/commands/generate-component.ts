import { parseComponentValue } from '../utils/parse-component-value';
import { createDirectoryIfNecessary } from '../utils/create-directory';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { parse, resolve } from 'path';
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
import { Logger } from '../../core';
import { lookupClosestModule } from '../utils/lookup-closest-module';

type Options = {
	module?: boolean;
	middleware?: boolean;
	service?: boolean;
	router?: boolean;
	validator?: boolean;
	entity?: boolean;
	repository?: boolean;
	migration?: boolean;
	path?: string;
};

const logger = Logger.contextualize('Generate command', 'MEDEX-CLI');

export function generateComponent(
	name: string,
	{ module, middleware, service, router, validator, entity, repository, migration, path }: Options
): void {
	logger.log(`Start generating component(s)`);

	const { relativeDestinationPath, fullDestinationPath } = parseComponentValue(name, 'module', path);
	createDirectoryIfNecessary(relativeDestinationPath, fullDestinationPath, logger);

	if (module) {
		const componentDescriptor = parseComponentValue(name, 'module', path);
		createComponentIfNecessary(componentDescriptor, getModuleTemplate(componentDescriptor.componentName));
	}

	if (middleware) {
		const componentDescriptor = parseComponentValue(name, 'middleware', path);
		createComponentIfNecessary(componentDescriptor, getMiddlewareTemplate(componentDescriptor.componentName));
	}

	if (service) {
		const componentDescriptor = parseComponentValue(name, 'service', path);
		createComponentIfNecessary(componentDescriptor, getServiceTemplate(componentDescriptor.componentName));
	}

	if (router) {
		const componentDescriptor = parseComponentValue(name, 'router', path);
		createComponentIfNecessary(componentDescriptor, getRouterTemplate(componentDescriptor.componentName));
	}

	if (validator) {
		const componentDescriptor = parseComponentValue(name, 'validator', path);
		createComponentIfNecessary(componentDescriptor, getValidatorTemplate(componentDescriptor.componentName));
	}

	if (entity) {
		const componentDescriptor = parseComponentValue(name, 'entity', path);
		createComponentIfNecessary(componentDescriptor, getEntityTemplate(componentDescriptor.componentName));
	}

	if (repository) {
		const componentDescriptor = parseComponentValue(name, 'repository', path);
		createComponentIfNecessary(componentDescriptor, getRepositoryTemplate(componentDescriptor.componentName));
	}

	if (migration) {
		const componentDescriptor = parseComponentValue(name, 'migration', path);
		createComponentIfNecessary(componentDescriptor, getMigrationTemplate(componentDescriptor.componentName));
	}

	updateModuleImports(name, fullDestinationPath);

	logger.warn(`!!ATTENTION!! Check the newly created component(s) to validate the config and update it if needed.`);
}

export function createComponentIfNecessary(
	{
		fullDestinationPath,
		componentName,
		componentFileName,
	}: {
		fullDestinationPath: string;
		componentName: string;
		componentFileName: string;
	},
	content: string
): void {
	const componentFullPath = resolve(fullDestinationPath, componentFileName);
	const exists = existsSync(componentFullPath);
	if (exists) {
		logger.warn(`Component ${componentName} already exists. Skipping component creation`);
		return;
	}

	writeFileSync(componentFullPath, content);
	logger.log(`Component ${componentFileName} successfully generated at ${fullDestinationPath}`);
}

export function updateModuleImports(name: string, fullDestinationPath: string): void {
	const resolvedModulePath = lookupClosestModule(fullDestinationPath);
	if (!resolvedModulePath) {
		logger.warn('Unable to resolve the closest module from your component. Skipping module imports update');
		return;
	}

	const moduleFileName = resolvedModulePath.split('/').slice(-1).pop();
	logger.log(`Updating module ${moduleFileName}`);

	const updateModuleImportsContent = (_fullDestinationPath: string) => {
		const components = readdirSync(_fullDestinationPath, { withFileTypes: true });
		for (const component of components) {
			if (component.isDirectory()) {
				updateModuleImportsContent(_fullDestinationPath + '/' + component.name);
				continue;
			}

			if (!component.isFile()) {
				continue;
			}

			if (component.name.includes('.module.')) continue;

			const componentFullPath = resolve(_fullDestinationPath, component.name);
			const componentContent = readFileSync(componentFullPath).toString();

			const componentClassNameMatches = componentContent.match(/class\s(\w+)/);
			if (!componentClassNameMatches) continue;

			const componentClassName = componentClassNameMatches[1];
			const moduleContent = readFileSync(resolvedModulePath).toString();

			const shouldUpdateModuleImport = !moduleContent.match(`${componentClassName}`);
			if (!shouldUpdateModuleImport) continue;

			const isComponentInSubDirectory =
				_fullDestinationPath.split('/').slice(-1).pop() !== resolvedModulePath.split('/').slice(-2).shift();

			const updatedModuleContent = moduleContent
				.replace(/imports: \[(.*)\]/, (str: string, match: string) => {
					return `imports: [${match ? `${match}, ` : ''}${componentClassName}]`;
				})
				.replace(/(import\s+.*\s+from\s+.*(?!;))/, (str: string, matches: string) => {
					const subDirectoryRelativePath = isComponentInSubDirectory
						? _fullDestinationPath.split('/').slice(-1).pop()
						: null;
					return `${matches ? `${matches}\n` : ''}import { ${componentClassName} } from './${
						subDirectoryRelativePath ? subDirectoryRelativePath + '/' : ''
					}${parse(component.name).name}';`;
				});

			writeFileSync(resolvedModulePath, updatedModuleContent);
			logger.log(`Module ${moduleFileName} imports updated with ${component} component`);
		}
	};

	const resolvedModuleLocationPath = resolvedModulePath.split('/').slice(0, -1).join('/');
	updateModuleImportsContent(resolvedModuleLocationPath);

	logger.log(`Module ${moduleFileName} updated`);
}
