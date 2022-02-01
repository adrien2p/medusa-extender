import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import MiddlewareService from '@medusajs/medusa/dist/services/middleware';
import { GetInjectableOptions, Utils } from './';

/**
 * @internal
 * Register custom middlewares into the middlewareRegistery.
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
		const { metatype, requireAuth } = middlewareOptions;
		const middleware = new metatype();
		if (!requireAuth) {
			medusaMiddlewareService.addPreAuthentication(middleware.consume, { app });
			Utils.log('MedusaLoader#middlewaresLoader', `Middleware registered before auth - ${metatype.name}`);
		} else {
			medusaMiddlewareService.addPostAuthentication(middleware.consume, { app });
			Utils.log('MedusaLoader#middlewaresLoader', `Middleware registered after auth - ${metatype.name}`);
		}
	}
}
