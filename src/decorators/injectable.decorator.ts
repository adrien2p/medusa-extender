import { InjectableOptions } from '../types';
import { INJECTABLE_OPTIONS_KEY } from '../contants';

/**
 * Mark a class as an injectable to be used by the loader.
 * @param options
 * @constructor
 */
export function MedusaInjectable<T = unknown>(options: InjectableOptions<T>): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(INJECTABLE_OPTIONS_KEY, options, target);
	};
}
