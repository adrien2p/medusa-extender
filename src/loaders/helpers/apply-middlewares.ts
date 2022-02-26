import { NextFunction, Response, Router } from 'express';
import { GetInjectableOption, GetInjectableOptions, MedusaAuthenticatedRequest, MedusaRequest } from '../../types';
import { Utils } from '../../utils';

export function applyBeforeAuthMiddleware(app: Router, middlewares: GetInjectableOptions<'middleware'>): void {
	for (const middlewareOptions of middlewares) {
		const { requireAuth } = middlewareOptions;
		if (!requireAuth) {
			applyMiddleware(app, middlewareOptions);
			Utils.hydrateLog(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered before auth - ${middlewareOptions.metatype.name}`
			);
		}
	}
}

export function applyAfterAuthMiddleware(app: Router, middlewares: GetInjectableOptions<'middleware'>): void {
	for (const middlewareOptions of middlewares) {
		const { requireAuth } = middlewareOptions;
		if (requireAuth) {
			applyMiddleware(app, middlewareOptions);
			Utils.hydrateLog(
				'MedusaLoader#middlewaresLoader',
				`Middleware registered after auth - ${middlewareOptions.metatype.name}`
			);
		}
	}
}

function applyMiddleware(app: Router, middleware: GetInjectableOption<'middleware'>): void {
	app.use(async (req: MedusaRequest | MedusaAuthenticatedRequest, res: Response, next: NextFunction) => {
		const shouldHandle = middleware.routes.some((route) => {
			return (
				(route.method === 'all' || req.method.toLowerCase() === route.method.toLowerCase()) &&
				(route.path === '*' || req.originalUrl === route.path)
			);
		});
		if (shouldHandle) {
			await new middleware.metatype().consume(req, res, next);
			return;
		}
		return next();
	});
}
