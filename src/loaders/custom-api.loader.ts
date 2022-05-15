import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyAfterAuthMiddleware, applyBeforeAuthMiddleware } from './helpers/apply-middlewares';
import { applyAfterAuthRouters, applyBeforeAuthRouters } from './helpers/apply-routers';

/**
 * @internal
 * Apply middlewares and routes on the underlying @medusajs top API.
 * @param app
 * @param middlewares
 * @param routers
 */
export async function customApiLoader(
	app: Router,
	middlewares: GetInjectableOptions<'middleware'>,
	routers: GetInjectableOptions<'router'>
): Promise<void> {
	const topMiddlewares = middlewares
		.map((middleware) => ({
			...middleware,
			routes: middleware.routes.filter((route) => {
				return !route.path.startsWith('/admin') && !route.path.startsWith('/store');
			}),
		}))
		.filter((middleware) => middleware.routes.length);

	const topRouters = routers
		.map((router) => ({
			...router,
			routes: router.routes.filter((route) => {
				return !route.path.startsWith('/admin') && !route.path.startsWith('/store');
			}),
		}))
		.filter((route) => route.routes.length);

	applyBeforeAuthMiddleware(app, topMiddlewares);
	applyAfterAuthMiddleware(app, topMiddlewares);
	applyBeforeAuthRouters(app, topRouters);
	applyAfterAuthRouters(app, topRouters);
}
