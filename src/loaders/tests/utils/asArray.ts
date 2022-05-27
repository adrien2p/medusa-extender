import { Resolver } from 'awilix/lib/resolvers';
import { ClassOrFunctionReturning } from 'awilix/lib/container';
import { MedusaContainer } from '../../../core';

export function asArray<T>(resolvers: (ClassOrFunctionReturning<T> | Resolver<T>)[]): {
	resolve: (container: MedusaContainer, opts: Record<string, unknown>) => T[];
} {
	return {
		resolve: (container, opts) => resolvers.map((r) => container.build(r, opts)),
	};
}
