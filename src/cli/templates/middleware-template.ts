import * as dedent from 'dedent';

/**
 * Provide a basic template for the middleware component generation.
 * @param middlewareName
 */
export function getMiddlewareTemplate(middlewareName: string): string {
	return dedent`
        import { 
            Middleware,
            MedusaMiddleware,
            MedusaAuthenticatedRequest
        } from 'medusa-extender';
        import { NextFunction, Response } from 'express';
        
	// Note: When applying this middleware to the wildcard (*) route, it will act as a custom domain middleware.
	// This means that the requiredAuth middleware will be applied and the middleware will be loaded before any routes or middleware in the /admin or /store directories.
	// Keep in mind that /admin and /store routes have their own loader.
        @Middleware({ requireAuth: true, routes: [{ method: 'all', path: '*' }] })
        export class ${middlewareName} implements MedusaMiddleware {
            public consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void | Promise<void> {
                return next();
            }
        }
    `;
}
