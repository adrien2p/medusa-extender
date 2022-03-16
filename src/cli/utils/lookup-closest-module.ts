import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

export function lookupClosestModule(fullDestinationPath: string): string | undefined {
	let resolvedModulePath = undefined;

	const isRootDir = !!readdirSync(fullDestinationPath, { withFileTypes: true }).some(
		(component) => component.name === 'package.json'
	);
	if (isRootDir) {
		return resolvedModulePath;
	}

	const components = readdirSync(fullDestinationPath, { withFileTypes: true });
	for (const component of components) {
		if (component.isDirectory()) {
			continue;
		}

		const componentFullDestinationPath = resolve(fullDestinationPath, component.name);
		const componentContent = readFileSync(componentFullDestinationPath).toString();
		const containsModuleDecorator = !!componentContent.match(/@Module\(/g);
		if (containsModuleDecorator) {
			resolvedModulePath = resolve(componentFullDestinationPath);
			break;
		}
	}

	/*
	 * At this point, the module was not found in the current and children directories,
	 * so we will look into the parent directory until the root is reached.
	 */
	const parentFullDestinationPath = fullDestinationPath.split('/').slice(0, -1).join('/');
	const modulePath = lookupClosestModule(parentFullDestinationPath);
	if (modulePath) {
		resolvedModulePath = modulePath;
	}

	return resolvedModulePath;
}
