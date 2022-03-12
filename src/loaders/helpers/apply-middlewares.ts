import { NextFunction, Response, Router } from 'express';
import {
	GetInjectableOption,
	GetInjectableOptions,
	Logger,
	MedusaAuthenticatedRequest,
	MedusaRequest,
} from '../../core';

const logger = Logger.contextualize('MiddlewaresLoader');

/**
 * @internal
 * Apply all middlewares on the app that must be applied before the @medusajs authentication
 * @param app
 * @param middlewares
 */
export function applyBeforeAuthMiddleware(app: Router, middlewares: GetInjectableOptions<'middleware'>): void {
	logger.log('Loading custom middlewares to apply before the underlying @medusajs authentication');

	let count = 0;
	for (const middlewareOptions of middlewares) {
		const { requireAuth } = middlewareOptions;
		if (!requireAuth) {
			applyMiddleware(app, middlewareOptions);
			logger.log(`Middleware before auth loaded - ${middlewareOptions.metatype.name}`);
			++count;
		}
	}

	logger.log(`${count} before auth middleware registered`);
}

/**
 * @internal
 * Apply all middlewares on the app that must be applied after the @medusajs authentication
 * @param app
 * @param middlewares
 */
export function applyAfterAuthMiddleware(app: Router, middlewares: GetInjectableOptions<'middleware'>): void {
	logger.log('Loading custom middlewares to apply after the underlying @medusajs authentication');

	let count = 0;
	for (const middlewareOptions of middlewares) {
		const { requireAuth } = middlewareOptions;
		if (requireAuth) {
			applyMiddleware(app, middlewareOptions);
			logger.log(`Middleware after auth loaded - ${middlewareOptions.metatype.name}`);
			++count;
		}
	}

	logger.log(`${count} after auth middleware registered`);
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
