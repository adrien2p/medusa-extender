import { readdirSync, readFileSync } from 'fs';
import { normalize, resolve } from 'path';
import { getSlashRegexpFromPlatform } from './slash';

const slashRegexp = getSlashRegexpFromPlatform();

/**
 * Lookup for the closest module component from the destination path.
 * @param fullDestinationPath
 * @param isMain
 */
export function lookupClosestModule(fullDestinationPath: string, isMain = true): string | undefined {
    let resolvedModulePath = undefined;

    const isRootDir = !!readdirSync(fullDestinationPath, { withFileTypes: true }).some(
        (component) => component.name === 'package.json'
    );
    if (isRootDir) {
        return resolvedModulePath;
    }

    const components = readdirSync(fullDestinationPath, { withFileTypes: true });
    const files = components.filter((component) => component.isFile());
    for (const file of files) {
        const componentFullDestinationPath = resolve(fullDestinationPath, file.name);
        const componentContent = readFileSync(componentFullDestinationPath).toString();
        const containsModuleDecorator = !!componentContent.match(/@Module\(/g);
        if (containsModuleDecorator) {
            resolvedModulePath = componentFullDestinationPath;
            break;
        }
    }

    const directories = components.filter((component) => component.isDirectory());
    if (!resolvedModulePath) {
        for (const directory of directories) {
            const childFullDestinationPath = resolve(fullDestinationPath, directory.name);
            resolvedModulePath = lookupClosestModule(childFullDestinationPath, false);
            if (resolvedModulePath) {
                break;
            }
        }
    }

    /*
     * At this point, the module was not found in the current and children directories,
     * so we will look into the parent directory until the root is reached.
     */
    if (isMain && !resolvedModulePath) {
        const parentFullDestinationPath = fullDestinationPath.split(slashRegexp).slice(0, -1).join('/');
        if (parentFullDestinationPath) {
            const modulePath = lookupClosestModule(parentFullDestinationPath);
            if (modulePath) {
                resolvedModulePath = modulePath;
            }
        }
    }

    return resolvedModulePath ? normalize(resolvedModulePath) : resolvedModulePath;
}
