import 'reflect-metadata';
import {
	INJECTABLE_OPTIONS_KEY,
	InjectableOptions,
	InjectableProviderSubTypes,
	InjectableComponentTypes,
} from '../../core';

export function buildProviderDecorator<T>(
	options: InjectableOptions<T> & { type: InjectableComponentTypes; subtype: InjectableProviderSubTypes }
): ClassDecorator {
	return <T>(target: T) => {
		Reflect.defineMetadata(INJECTABLE_OPTIONS_KEY, options, target);
	};
}
