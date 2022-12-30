import { RequestHandler, Router } from 'express';
import authenticatedMiddleware from '@medusajs/medusa/dist/api/middlewares/authenticate';
import requireCustomerAuthenticatedMiddleware from '@medusajs/medusa/dist/api/middlewares/require-customer-authentication';
import { GetInjectableOptions, Logger } from '../../core';

const logger = Logger.contextualize('MiddlewaresLoader');

/**
 * @internal
 * Apply routers according to their configuration
 * @param domain
 * @param app
 * @param routers
 */
export function applyRouters(
	domain: 'admin' | 'store' | 'custom',
	app: Router,
	routers: GetInjectableOptions<'router'>
): void {
	logger.log('Loading custom routers');

	for (const routerOptions of routers) {
		routerOptions.routes.forEach((route) => {
			const { method, path, handlers, requiredAuth } = route;

			const handlers_: RequestHandler[] = requiredAuth
				? ((domain === 'admin' || domain === 'custom') && [authenticatedMiddleware()]) || [
						requireCustomerAuthenticatedMiddleware(),
				  ]
				: [];

			handlers_.push(...handlers);

			app[method.toLowerCase()](path, ...handlers_);
		});

		logger.log(`Router loaded - ${routerOptions.metatype.name}`);
	}
}
