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
    const { method, path, handlers } = route;
    app[method.toLowerCase()](
        path,
        handlers.map(handler => {
            return async (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => {
                await handler(req, res, next);
            };
        })
    );
}
