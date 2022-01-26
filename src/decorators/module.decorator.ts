import { MODULE_KEY } from '../contants';
import { Type } from '../types';

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
