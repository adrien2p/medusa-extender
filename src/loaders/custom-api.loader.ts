import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyMiddlewares } from './helpers/apply-middlewares';
import { applyRouters } from './helpers/apply-routers';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';

/**
 * @internal
 * Apply middlewares and routes on the underlying @medusajs customApi API.
 * @param app
 * @param middlewares
 * @param routers
 */
export async function customApiLoader(
	app: Router,
	middlewares: GetInjectableOptions<'middleware'>,
	routers: GetInjectableOptions<'router'>
): Promise<void> {
	const customApiMiddlewares = middlewares
		.map((middleware) => ({
			...middleware,
			routes: middleware.routes.filter((route) => {
				return !route.path.startsWith('/admin') && !route.path.startsWith('/store');
			}),
		}))
		.filter((middleware) => middleware.routes.length);

	const customApiRouters = routers
		.map((router) => ({
			...router,
			routes: router.routes.filter((route) => {
				return !route.path.startsWith('/admin') && !route.path.startsWith('/store');
			}),
		}))
		.filter((route) => route.routes.length);

	// We are registering the routes and middleware just before medusa created the auth route
	// in order to be placed after the admin initialisation but before any admin or store routes
	const adminRouteLoader = await import('@medusajs/medusa/dist/api/routes/admin/index');
	const originalAdminRouteLoader = adminRouteLoader.default;
	adminRouteLoader.default = (app: Router, container: MedusaContainer, config: Record<string, unknown>): void => {
		applyMiddlewares('custom', app, customApiMiddlewares);
		applyRouters('custom', app, customApiRouters);
		originalAdminRouteLoader(app, container, config);
	};
}
