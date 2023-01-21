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
        
        @Middleware({ requireAuth: true, routes: [{ method: 'all', path: '*' }] })
        export class ${middlewareName} implements MedusaMiddleware {
            public consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void | Promise<void> {
                return next();
            }
        }
    `;
}
