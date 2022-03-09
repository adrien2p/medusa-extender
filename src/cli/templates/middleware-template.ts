import * as dedent from 'dedent';

export function getMiddlewareTemplate(middlewareName: string): string {
	return dedent`
        import { 
            Middleware,
            MedusaMiddleware,
            MedusaAuthenticatedRequest
        } from 'medusa-extender';
        import { NextFunction, Response } from 'express';
        
        @Middleware({ requireAuth: true, routes: [{ method: '', path: '' }] })
        export class ${middlewareName} implements MedusaMiddleware {
            public consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void | Promise<void> {
                return next();
            }
        }
    `;
}
