import { NextFunction, Response } from 'express';
import { MedusaAuthenticatedRequest, MedusaMiddleware } from '../../core';
import { Middleware } from '../../decorators';
import { TenantService } from './tenant.service';
import { EntityManager } from 'typeorm';

@Middleware({ requireAuth: false, routes: [{ method: 'all', path: '*' }] })
export class TenantMiddleware implements MedusaMiddleware {
	public async consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
		const tenantService = req.scope.resolve(TenantService.resolutionKey) as TenantService;

		let manager: EntityManager;
		try {
			manager = await tenantService.getOrCreateConnection(req);
		} catch (e) {
			return next(e);
		}

		req.scope.cradle.manager.connection = manager.connection;
		req.scope.cradle.manager.queryRunner = manager.queryRunner;
		return next();
	}
}
