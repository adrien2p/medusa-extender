import { NextFunction, Request, Response } from 'express';
import { MEDUSA_RESOLVER_KEYS, MedusaAuthenticatedRequest, Middleware } from 'medusa-extender';
import { Connection } from 'typeorm';
import UserSubscriber from './user.subscriber';

@Middleware({ requireAuth: true, routes: [{ method: 'post', path: '/admin/users/' }] })
export default class AttachUserSubscribersMiddleware {
	public consume(req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction): void {
		const { connection } = req.scope.resolve(MEDUSA_RESOLVER_KEYS.manager) as { connection: Connection };
		UserSubscriber.attachTo(connection);
		return next();
	}
}
