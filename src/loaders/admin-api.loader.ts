import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyAfterAuthMiddleware, applyBeforeAuthMiddleware } from './helpers/apply-middlewares';
import { applyAfterAuthRouters, applyBeforeAuthRouters } from './helpers/apply-routers';

/**
 * @internal
 * Apply middlewares and routes on the underlying @medusajs admin API.
 * @param app
 * @param middlewares
 * @param routers
 */
export async function adminApiLoader(
	app: Router,
	middlewares: GetInjectableOptions<'middleware'>,
	routers: GetInjectableOptions<'router'>
): Promise<void> {
	const adminMiddlewares = middlewares
		.map((middleware) => ({
			...middleware,
			routes: middleware.routes.filter((route) => {
				if (route.path.startsWith('/admin')) {
					route.path = route.path.replace('/admin', '');
					return true;
				}
				return false;
			}),
		}))
		.filter((middleware) => middleware.routes.length);

	const adminRouters = routers
		.map((router) => ({
			...router,
			routes: router.routes.filter((route) => {
				if (route.path.startsWith('/admin')) {
					route.path = route.path.replace('/admin', '');
					return true;
				}
				return false;
			}),
		}))
		.filter((route) => route.routes.length);

	const adminAuthRouteLoader = await import('@medusajs/medusa/dist/api/routes/admin/auth');
	const originalAdminAuthRouteLoader = adminAuthRouteLoader.default;
	adminAuthRouteLoader.default = (app: Router): void => {
		applyBeforeAuthMiddleware(app, adminMiddlewares);
		applyBeforeAuthRouters(app, adminRouters);
		originalAdminAuthRouteLoader(app);
	};

	const adminAppRouteLoader = await import('@medusajs/medusa/dist/api/routes/admin/apps');
	const originalAdminAppRouteLoader = adminAppRouteLoader.default;
	adminAppRouteLoader.default = (app: Router): void => {
		applyAfterAuthMiddleware(app, adminMiddlewares);
		applyAfterAuthRouters(app, adminRouters);
		originalAdminAppRouteLoader(app);
	};
}
