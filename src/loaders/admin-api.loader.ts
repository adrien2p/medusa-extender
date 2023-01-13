import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyAuthenticatedMiddlewares, applyUnauthenticatedMiddlewares } from './helpers/apply-middlewares';
import { applyAuthenticatedRouters, applyUnauthenticatedRouters } from './helpers/apply-routers';

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

	const adminAuthRouteLoader = await import('@medusajs/medusa/dist/api/routes/admin/auth');
	const originalAdminAuthRouteLoader = adminAuthRouteLoader.default;
	adminAuthRouteLoader.default = (app: Router): void => {
		applyUnauthenticatedMiddlewares('admin', app, adminMiddlewares);
		applyUnauthenticatedRouters('admin', app, adminRouters);
		originalAdminAuthRouteLoader(app);
	};

	const adminAppsRouteLoader = await import('@medusajs/medusa/dist/api/routes/admin/apps');
	const originalAdminAppsRouteLoader = adminAppsRouteLoader.default;
	adminAppsRouteLoader.default = (app: Router): void => {
		applyAuthenticatedMiddlewares('admin', app, adminMiddlewares);
		applyAuthenticatedRouters('admin', app, adminRouters);
		originalAdminAppsRouteLoader(app);
	};
}
