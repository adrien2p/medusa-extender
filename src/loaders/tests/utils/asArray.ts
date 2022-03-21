import { AwilixContainer } from 'awilix';

export function asArray(resolvers): { resolve: <T>(container: AwilixContainer, opts: Record<string, unknown>) => T } {
	return {
		resolve: (container, opts) => resolvers.map((r) => container.build(r, opts)),
	};
}
