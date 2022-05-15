import { Router } from 'express';
import { GetInjectableOptions } from './';
import { applyAfterAuthMiddleware, applyBeforeAuthMiddleware } from './helpers/apply-middlewares';
import { applyAfterAuthRouters, applyBeforeAuthRouters } from './helpers/apply-routers';

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
			routes: middleware.routes.filter((route) => {
				if (route.path.startsWith('/store')) {
					route.path = route.path.replace('/store', '');
					return true;
				}
				return false;
			}),
		}))
		.filter((middleware) => middleware.routes.length);

	const storeRouters = routers
		.map((router) => ({
			...router,
			routes: router.routes.filter((route) => {
				if (route.path.startsWith('/store')) {
					route.path = route.path.replace('/store', '');
					return true;
				}
				return false;
			}),
		}))
		.filter((route) => route.routes.length);

	const storeAuthRouteLoader = await import('@medusajs/medusa/dist/api/routes/store/auth');
	const originalStoreAuthRouteLoader = storeAuthRouteLoader.default;
	storeAuthRouteLoader.default = (app: Router): void => {
		applyBeforeAuthMiddleware(app, storeMiddlewares);
		applyBeforeAuthRouters(app, storeRouters);
		originalStoreAuthRouteLoader(app);
	};

	const storeCollectionRouteLoader = await import('@medusajs/medusa/dist/api/routes/store/collections');
	const originalStoreCollectionRouteLoader = storeCollectionRouteLoader.default;
	storeCollectionRouteLoader.default = (app: Router): void => {
		applyAfterAuthMiddleware(app, storeMiddlewares);
		applyAfterAuthRouters(app, storeRouters);
		originalStoreCollectionRouteLoader(app);
	};
}
