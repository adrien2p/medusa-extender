import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyMiddlewares } from './helpers/apply-middlewares';
import { applyRouters } from './helpers/apply-routers';

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
			routes: middleware.routes
				.filter((route) => route.path.startsWith('/admin'))
				.map((route) => ({ ...route, path: route.path.replace('/admin', '') })),
		}))
		.filter((middleware) => middleware.routes.length);

	const adminRouters = routers
		.map((router) => ({
			...router,
			routes: router.routes
				.filter((route) => route.path.startsWith('/admin'))
				.map((route) => ({ ...route, path: route.path.replace('/admin', '') })),
		}))
		.filter((route) => route.routes.length);

	// We are registering the routes and middleware just before medusa created the auth route
	// in order to be placed after the admin initialisation but before any admin routes
	const adminAuthRouteLoader = await import('@medusajs/medusa/dist/api/routes/admin/auth');
	const originalAdminAuthRouteLoader = adminAuthRouteLoader.default;
	adminAuthRouteLoader.default = (app: Router): void => {
		originalAdminAuthRouteLoader(app);
		applyMiddlewares('admin', app, adminMiddlewares);
		applyRouters('admin', app, adminRouters);
	};
}
