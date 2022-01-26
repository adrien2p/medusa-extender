import 'reflect-metadata';

import { INJECTABLE_OPTIONS_KEY, InjectableOptions } from './';

/**
 * Mark a class as an injectable to be used by the loader.
 * @param options
 * @constructor
 */
export function Injectable<T = unknown>(options: InjectableOptions<T>): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(INJECTABLE_OPTIONS_KEY, options, target);
	};
}
