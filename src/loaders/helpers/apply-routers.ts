import { Router } from 'express';
import { GetInjectableOptions, RoutesInjectionRouterConfiguration } from '../../types';

export function applyBeforeAuthRouters(app: Router, routesOptions: GetInjectableOptions<'router'>): void {
	for (const routeOptions of routesOptions) {
		routeOptions.routes.forEach((route) => {
			if (!route.requiredAuth) {
				applyRoute(app, route);
			}
		});
	}
}

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
