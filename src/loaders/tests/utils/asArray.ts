import { Resolver } from 'awilix/lib/resolvers';
import { ClassOrFunctionReturning } from 'awilix/lib/container';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';

export function asArray(resolvers: (ClassOrFunctionReturning<unknown> | Resolver<unknown>)[]): {
	resolve: (container: MedusaContainer) => unknown[];
} {
	return {
		resolve: (container: MedusaContainer) => resolvers.map((resolver) => container.build(resolver)),
	};
}
