import 'reflect-metadata';
import { INJECTABLE_OPTIONS_KEY, InjectableComponentTypes, InjectableOptions } from '../../core';

export function buildComponentDecorator<T>(
	options: InjectableOptions<T> & { type: InjectableComponentTypes }
): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(INJECTABLE_OPTIONS_KEY, options, target);
	};
}
