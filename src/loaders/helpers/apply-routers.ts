import { Router } from 'express';
import { GetInjectableOptions, RoutesInjectionRouterConfiguration } from '../../core';

/**
 * @internal
 * Apply all routes on the app that must be applied before the @medusajs authentication
 * @param app
 * @param routesOptions
 */
export function applyBeforeAuthRouters(app: Router, routesOptions: GetInjectableOptions<'router'>): void {
	for (const routeOptions of routesOptions) {
		routeOptions.routes.forEach((route) => {
			if (!route.requiredAuth) {
				applyRoute(app, route);
			}
		});
	}
}

/**
 * @internal
 * Apply all routes on the app that must be applied after the @medusajs authentication
 * @param app
 * @param routesOptions
 */
export function applyAfterAuthRouters(app: Router, routesOptions: GetInjectableOptions<'router'>): void {
	for (const routeOptions of routesOptions) {
		routeOptions.routes.forEach((route) => {
			if (route.requiredAuth) {
				applyRoute(app, route);
			}
		});
	}
}

function applyRoute(app: Router, route: RoutesInjectionRouterConfiguration): void {
	const { method, path, handlers } = route;
	app[method.toLowerCase()](path, ...handlers);
}
