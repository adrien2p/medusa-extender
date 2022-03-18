import { NextFunction, Response } from 'express';
import { asValue } from 'awilix';
import { MedusaAuthenticatedRequest, MedusaMiddleware } from '../../core';
import { Middleware } from '../../decorators';
import { TenantService } from './tenant.service';

@Middleware({ requireAuth: false, routes: [{ method: 'all', path: '*' }] })
export class TenantMiddleware implements MedusaMiddleware {
	public async consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
		const tenantService = req.scope.resolve(TenantService.resolutionKey) as TenantService;

		let err: Error;
		const manager = await tenantService.getOrCreateConnection(req).catch((e: Error) => {
			err = e;
		});
		if (err) return next(err);

		req.scope.register({
			manager: asValue(manager),
		});
		req.scope = req.scope.createScope();
		return next();
	}
}
