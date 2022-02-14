import { GetInjectableOptions, MedusaAuthenticatedRequest, RoutesInjectionRouterConfiguration } from './';
import { Express, NextFunction, Request, Response } from 'express';

export function authenticatedRoutesLoader(routesOptions: GetInjectableOptions<'router'>, app: Express): void {
	for (const routeOptions of routesOptions) {
		routeOptions.routes.forEach((route) => {
			if (route.requiredAuth) {
				registerRoute(app, route);
			}
		});
	}
}

export function unauthenticatedRoutesLoader(routesOptions: GetInjectableOptions<'router'>, app: Express): void {
	for (const routeOptions of routesOptions) {
		routeOptions.routes.forEach((route) => {
			if (!route.requiredAuth) {
				registerRoute(app, route);
			}
		});
	}
}

function registerRoute(app: Express, route: RoutesInjectionRouterConfiguration): void {
	const { method, path, handler } = route;
	app[method.toLowerCase()](
		path,
		async (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => {
			try {
				return await handler(req, res);
			} catch (e) {
				return next(e);
			}
		}
	);
}
