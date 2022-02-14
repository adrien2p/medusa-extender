import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import MiddlewareService from '@medusajs/medusa/dist/services/middleware';
import { GetInjectableOptions, Utils } from './';

/**
 * @internal
 * Register custom middlewares into medusa middleware service to be applied at the right moment.
 * @param app
 * @param container
 * @param middlewares
 */
export function middlewaresLoader(
	app: Express,
	container: AwilixContainer,
	middlewares: GetInjectableOptions<'middleware'>
): void {
	const medusaMiddlewareService = container.resolve('middlewareService') as MiddlewareService;

	for (const middlewareOptions of middlewares) {
		const { requireAuth, metatype } = middlewareOptions;
		const middleware = new metatype().consume;
		if (!requireAuth) {
			medusaMiddlewareService.addPreAuthentication(middleware, { app });
			Utils.log(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered before auth - ${middlewareOptions.metatype.name}`
			);
		} else {
			medusaMiddlewareService.addPostAuthentication(middleware, { app });
			Utils.log(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered after auth - ${middlewareOptions.metatype.name}`
			);
		}
	}
}
