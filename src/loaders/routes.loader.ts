import { GetInjectableOption, GetInjectableOptions, MedusaAuthenticatedRequest } from '../types';
import { Express, NextFunction, Request, Response } from 'express';

export function authenticatedRoutesLoader(routesOptions: GetInjectableOptions<'route'>, app: Express): void {
	for (const routeOptions of routesOptions) {
		if (!routeOptions.requiredAuth) {
			registerRoute(app, routeOptions);
		}
	}
}

export function unauthenticatedRoutesLoader(routesOptions: GetInjectableOptions<'route'>, app: Express): void {
	for (const routeOptions of routesOptions) {
		if (!routeOptions.requiredAuth) {
			registerRoute(app, routeOptions);
		}
	}
}

function registerRoute(app: Express, routeOptions: GetInjectableOption<'route'>): void {
	const { method, path, handler } = routeOptions;
	app[method.toLowerCase()](
		path,
		async (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => {
			try {
				return await new handler(req, res);
			} catch (e) {
				return next(e);
			}
		}
	);
}
