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
    getValidatorTemplate
} from '../templates';

type Options = {
    module?: string;
    middleware?: string;
    service?: string;
    router?: string,
    validator?: string;
    entity?: string;
    repository?: string;
    migration?: string;
};

export function generateComponent(
    {
        module,
        middleware,
        service,
        router,
        validator,
        entity,
        repository,
        migration
    }: Options
) {
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

    if (validator) {
        const { componentName } = parseComponentValue(validator);
        return createComponentIfNecessary(validator, getValidatorTemplate(componentName));
    }

    if (entity) {
        const { componentName } = parseComponentValue(entity);
        return createComponentIfNecessary(entity, getEntityTemplate(componentName));
    }

    if (repository) {
        const { componentName } = parseComponentValue(repository);
        return createComponentIfNecessary(repository, getRepositoryTemplate(componentName));
    }

    if (migration) {
        const { componentName } = parseComponentValue(migration);
        return createComponentIfNecessary(migration, getMigrationTemplate(componentName));
    }

    console.warn(yellow(`ATTENTION! Check the newly created component to validate the config and update it if needed.`));
}

export function createComponentIfNecessary(component: string, content: string): void {
    const { componentName, componentFileName, relativeDestinationPath, fullDestinationPath } =
    parseComponentValue(component);
    createDirectoryIfNecessary(relativeDestinationPath, fullDestinationPath);

    const exists = doesFileExists(fullDestinationPath + '/' + componentName, componentName);
    if (exists) return;

	writeFileSync(fullDestinationPath + '/' + componentFileName, content);
	console.info(green(`${componentFileName} successfully generated at ${fullDestinationPath}.`));
}
