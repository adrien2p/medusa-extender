import { NextFunction, Response } from 'express';
import { MedusaAuthenticatedRequest, MedusaMiddleware } from '../../core';
import { Middleware } from '../../decorators';
import { TenantService } from './tenant.service';
import { EntityManager } from 'typeorm';
import { asValue } from 'awilix';

let defaultManager;

@Middleware({ requireAuth: false, routes: [{ method: 'all', path: '*' }] })
export class TenantMiddleware implements MedusaMiddleware {
	public async consume(req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
		const tenantService = req.scope.resolve(TenantService.resolutionKey) as TenantService;

		if (!defaultManager) {
			defaultManager = req.container.registrations['manager'].resolve(req.container);
		}

		let manager: EntityManager;
		try {
			manager = await tenantService.getOrCreateConnection(defaultManager, req);
		} catch (e) {
			return next(e);
		}

		req.container.register({ manager: asValue(manager) });
		req.container.cache.clear();
		req.scope = req.container.createScope() as any;
		return next();
	}
}
