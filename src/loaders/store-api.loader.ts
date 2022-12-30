import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyMiddlewares } from './helpers/apply-middlewares';
import { applyRouters } from './helpers/apply-routers';

/**
 * @internal
 * Apply middlewares and routes on store API.
 * @param app
 * @param middlewares
 * @param routers
 */
export async function storeApiLoader(
	app: Router,
	middlewares: GetInjectableOptions<'middleware'>,
	routers: GetInjectableOptions<'router'>
): Promise<void> {
	const storeMiddlewares = middlewares
		.map((middleware) => ({
			...middleware,
			routes: middleware.routes
				.filter((route) => route.path.startsWith('/store'))
				.map((route) => ({ ...route, path: route.path.replace('/store', '') })),
		}))
		.filter((middleware) => middleware.routes.length);

	const storeRouters = routers
		.map((router) => ({
			...router,
			routes: router.routes
				.filter((route) => route.path.startsWith('/store'))
				.map((route) => ({ ...route, path: route.path.replace('/store', '') })),
		}))
		.filter((route) => route.routes.length);

	// We are registering the routes and middleware just before medusa created the auth route
	// in order to be placed after the store initialisation but before any store routes
	const storeAuthRouteLoader = await import('@medusajs/medusa/dist/api/routes/store/auth');
	const originalStoreAuthRouteLoader = storeAuthRouteLoader.default;
	storeAuthRouteLoader.default = (app: Router): void => {
		applyMiddlewares('store', app, storeMiddlewares);
		applyRouters('store', app, storeRouters);
		originalStoreAuthRouteLoader(app);
	};
}
