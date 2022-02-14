import { Express, NextFunction, Response } from 'express';
import { AwilixContainer } from 'awilix';
import MiddlewareService from '@medusajs/medusa/dist/services/middleware';
import { GetInjectableOption, GetInjectableOptions, MedusaAuthenticatedRequest, MedusaRequest, Utils } from './';

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
			medusaMiddlewareService.addPreAuthentication(wrappedMiddleware, {});
			Utils.log(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered before auth - ${middlewareOptions.metatype.name}`
			);
		} else {
			medusaMiddlewareService.addPostAuthentication(wrappedMiddleware, {});
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
	return (): ((
		err: unknown,
		req: MedusaRequest | MedusaAuthenticatedRequest,
		res: Response,
		next: NextFunction
	) => void) => {
		return (err: unknown, req: MedusaRequest | MedusaAuthenticatedRequest, res: Response, next: NextFunction) => {
			const shouldHandle = middleware.routes.some((route) => {
				return req.method.toLowerCase() === route.method.toLowerCase() && req.path === route.path;
			});
			if (shouldHandle) {
				return new middleware.metatype().consume(err, req, res, next);
			}
			return next();
		};
	};
}
