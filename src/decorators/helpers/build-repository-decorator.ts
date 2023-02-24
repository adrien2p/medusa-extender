import 'reflect-metadata';
import { INJECTABLE_OPTIONS_KEY, InjectableComponentTypes, InjectableOptions } from '../../core';

export function buildRepositoryDecorator<T>(
	options: InjectableOptions<T> & { type: InjectableComponentTypes }
): ClassDecorator {
	return <T>(target: T) => {
		Reflect.defineMetadata(INJECTABLE_OPTIONS_KEY, options, target);
	};
}
