import { RequestHandler, Router } from 'express';
import authenticatedMiddleware from '@medusajs/medusa/dist/api/middlewares/authenticate';
import requireCustomerAuthenticatedMiddleware from '@medusajs/medusa/dist/api/middlewares/require-customer-authentication';
import { GetInjectableOptions, Logger } from '../../core';

const logger = Logger.contextualize('RoutersLoader');

/**
 * @internal
 * Apply routers according to their configuration
 * @param domain
 * @param app
 * @param routers
 */
export function applyUnauthenticatedRouters(
	domain: 'admin' | 'store' | 'custom',
	app: Router,
	routers: GetInjectableOptions<'router'>
): void {
	logger.log('Loading custom routers');

	for (const routerOptions of routers) {
		routerOptions.routes.forEach((route) => {
			const { method, path, handlers, requiredAuth } = route;

			if (requiredAuth) {
				return;
			}

			const handlers_: RequestHandler[] = handlers;

			app[method.toLowerCase()](path, ...handlers_);
		});

		logger.log(`Router loaded - ${routerOptions.metatype.name}`);
	}
}

/**
 * @internal
 * Apply routers according to their configuration
 * @param domain
 * @param app
 * @param routers
 */
export function applyAuthenticatedRouters(
	domain: 'admin' | 'store' | 'custom',
	app: Router,
	routers: GetInjectableOptions<'router'>
): void {
	logger.log('Loading custom routers');

	for (const routerOptions of routers) {
		routerOptions.routes.forEach((route) => {
			const { method, path, handlers, requiredAuth } = route;

			if (!requiredAuth) {
				return;
			}

			// In case of the admin, the middleware is applied automatically by the load order
			const handlers_: RequestHandler[] =
				domain === 'admin'
					? []
					: domain === 'custom'
					? [authenticatedMiddleware()]
					: [requireCustomerAuthenticatedMiddleware()];

			handlers_.push(...handlers);

			app[method.toLowerCase()](path, ...handlers_);
		});

		logger.log(`Router loaded - ${routerOptions.metatype.name}`);
	}
}
