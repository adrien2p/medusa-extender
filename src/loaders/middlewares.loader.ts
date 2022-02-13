import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import MiddlewareService from '@medusajs/medusa/dist/services/middleware';
import { GetInjectableOption, GetInjectableOptions, Utils } from './';

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
		const { requireAuth } = middlewareOptions;
		const wrappedMiddleware = wrapMiddleware(middlewareOptions);
		if (!requireAuth) {
			medusaMiddlewareService.addPreAuthentication(wrappedMiddleware, { app });
			Utils.log(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered before auth - ${middlewareOptions.metatype.name}`
			);
		} else {
			medusaMiddlewareService.addPostAuthentication(wrappedMiddleware, { app });
			Utils.log(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered after auth - ${middlewareOptions.metatype.name}`
			);
		}
	}
}

export function wrapMiddleware(
	middleware: GetInjectableOption<'middleware'>
): (options: { app: Express }) => (...args: unknown[]) => void {
	return ({ app }: { app: Express }): ((req, res, next) => void) => {
		for (const routeOption of middleware.routerOptions) {
			app[routeOption.method](routeOption.path, new middleware.metatype().consume);
		}
		return (req, res, next) => next();
	};
}
