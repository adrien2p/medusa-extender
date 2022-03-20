import 'reflect-metadata';
import { MODULE_KEY, ModuleInjectionOptions } from '../core';

/**
 * Mark a class as aa module and store all injectable on it.
 * @constructor
 * @param options
 */
export function Module(options: ModuleInjectionOptions = { imports: [] }): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(MODULE_KEY, options?.imports, target);
	};
}
