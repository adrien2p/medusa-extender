import { MedusaMiddleware, MedusaRequest, Middleware, Module, Router, Service } from 'medusa-extender';
import { default as MedusaCartService } from '@medusajs/medusa/dist/services/cart';
import { Response, Request, NextFunction } from 'express';
import { Cart } from "@medusajs/medusa/dist/models/cart";

@Service()
export class TestService {
	static resolutionKey = 'testService';
}

@Service({ override: MedusaCartService })
export class CartService extends MedusaCartService {
	static resolutionKey = 'cartService';

	customMethod = jest.fn();

	removeLineItem(cartId: string, lineItemId: string): Promise<Cart> {
		return Promise.resolve({ id: "cart_dafsdgfds" } as Cart)
	}
}

@Router({
	routes: [
		{
			path: '/admin/test-path',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/admin/test-path/:test_id',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response) => {
					return res.send(`healthy ${req.params.test_id}`);
				},
			],
		},
		{
			path: '/admin/authenticated-test-path',
			method: 'get',
			requiredAuth: true,
			handlers: [
				(req: Request, res: Response) => {
					return res.send('healthy authenticated');
				},
			],
		},
	],
})
export class AdminRouter {}

@Middleware({
	requireAuth: false,
	routes: [
		{
			path: '/admin/test-path',
			method: 'get',
		},
		{
			path: '/admin/test-path/:test_id',
			method: 'get',
		},
	],
})
export class AdminTestPathMiddleware implements MedusaMiddleware {
	consume(req: MedusaRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
		return undefined;
	}
}
AdminTestPathMiddleware.prototype.consume = jest
	.fn()
	.mockImplementation((req: MedusaRequest, res: Response, next: NextFunction) => {
		expect(req.scope).toBeTruthy()
		next();
	});

@Middleware({
	requireAuth: false,
	routes: [
		{
			path: '/admin/authenticated-test-path',
			method: 'get',
		},
	],
})
export class AdminAuthTestPathMiddleware implements MedusaMiddleware {
	consume(req: MedusaRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
		return undefined;
	}
}
AdminAuthTestPathMiddleware.prototype.consume = jest
	.fn()
	.mockImplementation((req: MedusaRequest, res: Response, next: NextFunction) => {
		expect(req.scope).toBeTruthy()
		next();
	});

@Router({
	routes: [
		{
			path: '/store/test-path',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/store/test-path/:test_id',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response) => {
					return res.send(`healthy ${req.params.test_id}`);
				},
			],
		},
	],
})
export class StoreRouter {}

@Middleware({
	requireAuth: false,
	routes: [
		{
			path: '/store/test-path',
			method: 'get',
		},
		{
			path: '/store/test-path/:test_id',
			method: 'get',
		},
	],
})
export class StoreTestPathMiddleware implements MedusaMiddleware {
	consume(req: MedusaRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
		return undefined;
	}
}
StoreTestPathMiddleware.prototype.consume = jest
	.fn()
	.mockImplementation((req: MedusaRequest, res: Response, next: NextFunction) => {
		expect(req.scope).toBeTruthy()
		next();
	});

@Router({
	routes: [
		{
			path: '/test-path',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/test-path/:test_id',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response) => {
					return res.send(`healthy ${req.params.test_id}`);
				},
			],
		},
	],
})
export class CustomTopRouter {}

@Middleware({
	requireAuth: false,
	routes: [
		{
			path: '/test-path',
			method: 'get',
		},
		{
			path: '/test-path/:test_id',
			method: 'get',
		},
	],
})
export class CustomTopTestPathMiddleware implements MedusaMiddleware {
	consume(req: MedusaRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
		return undefined;
	}
}
CustomTopTestPathMiddleware.prototype.consume = jest
	.fn()
	.mockImplementation((req: MedusaRequest, res: Response, next: NextFunction) => {
		expect(req.scope).toBeTruthy()
		next();
	});

@Module({
	imports: [
		TestService,
		CartService,
		AdminRouter,
		AdminTestPathMiddleware,
		AdminAuthTestPathMiddleware,
		StoreRouter,
		StoreTestPathMiddleware,
		CustomTopRouter,
		CustomTopTestPathMiddleware,
	],
})
export class TestModule {}
