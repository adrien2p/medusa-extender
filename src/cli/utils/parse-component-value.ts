import { normalize, resolve } from 'path';
import { upperCaseFirst } from '../../core';

/**
 * Parse the component information to create a kind of descriptor.
 * @param name
 * @param componentType
 * @param path
 * @param filePrefix
 */
export function parseComponentValue(
	name: string,
	componentType: string,
	path = `src/modules/${name}`,
	filePrefix?: string
): {
	relativeDestinationPath: string;
	fullDestinationPath: string;
	componentName: string;
	componentFileName: string;
} {
	const componentFileName = `${filePrefix ? filePrefix + '-' : ''}${name}.${componentType}.ts`;
	const componentName = upperCaseFirst(name) + upperCaseFirst(componentType);
	const fullDestinationPath = normalize(resolve(process.cwd(), path));
	return { relativeDestinationPath: normalize(path), fullDestinationPath, componentName, componentFileName };
}
