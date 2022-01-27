import {
    GetInjectableOptions,
    MedusaAuthenticatedRequest,
    RoutesInjectionRouterConfiguration,
} from './';
import { Express, NextFunction, Request, Response } from 'express';

export function authenticatedRoutesLoader(routesOptions: GetInjectableOptions<'route'>, app: Express): void {
    for (const routeOptions of routesOptions) {
        routeOptions.router.forEach(router => {
            if (!!router.requiredAuth) {
                registerRoute(app, router);
            }
        });
    }
}

export function unauthenticatedRoutesLoader(routesOptions: GetInjectableOptions<'route'>, app: Express): void {
    for (const routeOptions of routesOptions) {
        routeOptions.router.forEach(router => {
            if (!router.requiredAuth) {
                registerRoute(app, router);
            }
        });
    }
}

function registerRoute(app: Express, router: RoutesInjectionRouterConfiguration): void {
    const { method, path, handler } = router;
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
