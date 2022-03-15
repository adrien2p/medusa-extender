import { yellow } from 'chalk';
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
    getValidatorTemplate
} from "../templates";
import { Logger } from "../../core";

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

const logger = Logger.contextualize('Generate command', 'MEDEX-CLI');

export function generateComponent(name: string, {
    module,
    middleware,
    service,
    router,
    validator,
    entity,
    repository,
    migration,
    path,
}: Options): void {
    logger.log(`Start generating component(s)`);

    const { relativeDestinationPath, fullDestinationPath } = parseComponentValue(name, 'module', path);
    createDirectoryIfNecessary(relativeDestinationPath, fullDestinationPath, logger);

    if (module) {
        const componentDescriptor = parseComponentValue(name, 'module', path);
        createComponentIfNecessary(componentDescriptor, getModuleTemplate(componentDescriptor.componentName));
    }

    if (middleware) {
        const componentDescriptor = parseComponentValue(name, 'middleware', path);
        createComponentIfNecessary(
            componentDescriptor,
            getMiddlewareTemplate(componentDescriptor.componentName)
        );
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
        createComponentIfNecessary(
            componentDescriptor,
            getRepositoryTemplate(componentDescriptor.componentName)
        );
    }

    if (migration) {
        const componentDescriptor = parseComponentValue(name, 'migration', path);
        createComponentIfNecessary(componentDescriptor, getMigrationTemplate(componentDescriptor.componentName));
    }

    updateModuleImports(name, fullDestinationPath);

    logger.log(
        yellow(`!!ATTENTION!! Check the newly created component(s) to validate the config and update it if needed.`)
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
    const componentFullPath = resolve(fullDestinationPath, componentFileName);
    const exists = existsSync(componentFullPath);
    if (exists) {
        logger.warn(`Component ${componentName} already exists. Skipping.`);
        return;
    }

    writeFileSync(componentFullPath, content);
    logger.log(`Component ${componentFileName} successfully generated at ${fullDestinationPath}.`);
}

export function updateModuleImports(name: string, fullDestinationPath: string): void {
    const moduleFullPath = resolve(fullDestinationPath, `${name}.module.ts`);
    if (!existsSync(moduleFullPath)) return;

    logger.log(`Updating ${name} module imports.`);

    const components = readdirSync(fullDestinationPath);
    for (const component of components) {
        if (component.includes('.module.')) continue;

        const componentFullPath = resolve(fullDestinationPath, component);
        const componentContent = readFileSync(componentFullPath).toString();

        const componentClassNameMatches = componentContent.match(/class\s(\w+)/);
        if (!componentClassNameMatches) continue;

        const componentClassName = componentClassNameMatches[1];
        const moduleContent = readFileSync(moduleFullPath).toString();

        const shouldUpdateModuleImport = !moduleContent.match(`${componentClassName}`);
        if (!shouldUpdateModuleImport) continue;

        const updatedModuleContent = moduleContent.replace(/imports: \[(.*)\]/, (str: string, match: string) => {
            return `imports: [${match ? `${match}, ` : ''}${componentClassName}]`;
        }).replace(/(import\s+.*\s+from\s+.*(?!;))/, (str: string, matches: string) => {
            return `${matches ? `${matches}\n` : ''}import { ${componentClassName} } from './${parse(component).name}';`;
        });

        writeFileSync(moduleFullPath, updatedModuleContent);
        logger.log(`Module ${name} imports updated with ${component} component.`);
    }

    logger.log(`Module ${name} module updated.`);
}
