import { MedusaAuthenticatedRequest, MedusaRoute } from '../types';
import { Express, NextFunction, Request, Response } from 'express';

export function authenticatedRoutesLoader(allRoutes: MedusaRoute[][], app: Express): void {
	for (const routes of allRoutes) {
		routes.forEach((route) => {
			if (route.isAuthenticated) {
				registerRoute(app, route);
			}
		});
	}
}

export function unauthenticatedRoutesLoader(allRoutes: MedusaRoute[][], app: Express): void {
	for (const routes of allRoutes) {
		routes.forEach((route) => {
			if (!route.isAuthenticated) {
				registerRoute(app, route);
			}
		});
	}
}

function registerRoute(app: Express, route: MedusaRoute): void {
	app[route.method.toLowerCase()](
		route.path,
		async (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => {
			try {
				return await route.handler(req, res);
			} catch (e) {
				return next(e);
			}
		}
	);
}
