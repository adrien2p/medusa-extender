import { RequestHandler, Router } from 'express';
import authenticatedMiddleware from '@medusajs/medusa/dist/api/middlewares/authenticate';
import requireCustomerAuthenticatedMiddleware from '@medusajs/medusa/dist/api/middlewares/require-customer-authentication';
import { GetInjectableOptions, Logger } from '../../core';

const logger = Logger.contextualize('MiddlewaresLoader');

/**
 * @internal
 * Apply unauthenticated middlewares according to their configuration
 * @param domain
 * @param app
 * @param middlewares
 */
export function applyUnauthenticatedMiddlewares(
	domain: 'admin' | 'store' | 'custom',
	app: Router,
	middlewares: GetInjectableOptions<'middleware'>
): void {
	logger.log('Loading custom unauthenticated middlewares');

	for (const middlewareOptions of middlewares) {
		const { requireAuth, requiredAuth, routes, metatype } = middlewareOptions;

		if (requiredAuth || requireAuth) {
			continue;
		}

		const handlers: RequestHandler[] = [new metatype().consume];

		routes.some((route) => {
			const { method, path } = route;
			app[method.toLowerCase()](path, ...handlers);
		});

		logger.log(`Unauthenticated middleware loaded - ${middlewareOptions.metatype.name}`);
	}
}

/**
 * @internal
 * Apply authenticated middlewares according to their configuration
 * @param domain
 * @param app
 * @param middlewares
 */
export function applyAuthenticatedMiddlewares(
	domain: 'admin' | 'store' | 'custom',
	app: Router,
	middlewares: GetInjectableOptions<'middleware'>
): void {
	logger.log('Loading custom middlewares');

	for (const middlewareOptions of middlewares) {
		const { requireAuth, requiredAuth, routes, metatype } = middlewareOptions;

		if (requiredAuth || requireAuth) {
			const handlers: RequestHandler[] =
				domain === 'admin' || domain === 'custom'
					? [authenticatedMiddleware()]
					: [requireCustomerAuthenticatedMiddleware()];

			handlers.push(new metatype().consume);

			routes.some((route) => {
				const { method, path } = route;
				app[method.toLowerCase()](path, ...handlers);
			});
		}

		logger.log(`Middleware loaded - ${middlewareOptions.metatype.name}`);
	}
}
