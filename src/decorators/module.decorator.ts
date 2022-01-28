import 'reflect-metadata';
import { MODULE_KEY, Type } from './';

/**
 * Mark a class as aa module and store all injectable on it.
 * @param imports The components to import
 * @constructor
 */
export function Module({ imports }: { imports: Type[] }): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(MODULE_KEY, imports, target);
	};
}
