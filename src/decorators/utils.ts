import 'reflect-metadata';
import { InjectableComponentTypes, InjectableOptions } from './';
import { INJECTABLE_OPTIONS_KEY } from '../contants';

export function buildComponentDecorator<T>(
	options: InjectableOptions<T> & { type: InjectableComponentTypes }
): ClassDecorator {
	return (target: object) => {
		Reflect.defineMetadata(INJECTABLE_OPTIONS_KEY, options, target);
	};
}
