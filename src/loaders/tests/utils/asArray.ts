import { AwilixContainer } from 'awilix';
import { Resolver } from 'awilix/lib/resolvers';
import { ClassOrFunctionReturning } from 'awilix/lib/container';

export function asArray<T>(resolvers: (ClassOrFunctionReturning<T> | Resolver<T>)[]): {
	resolve: (container: AwilixContainer, opts: Record<string, unknown>) => T[];
} {
	return {
		resolve: (container, opts) => resolvers.map((r) => container.build(r, opts)),
	};
}
