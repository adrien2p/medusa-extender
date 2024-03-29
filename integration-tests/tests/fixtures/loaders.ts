import {
	MedusaMiddleware,
	MedusaRequest,
	Middleware,
	Module,
	Router,
	Service,
	TaxProvider,
	FulfillmentProvider,
	NotificationProvider,
	PaymentProvider,
} from 'medusa-extender';
import { default as MedusaCartService } from '@medusajs/medusa/dist/services/cart';
import { Response, Request, NextFunction } from 'express';
import { Cart } from '@medusajs/medusa/dist/models/cart';
import {
	AbstractNotificationService,
	AbstractPaymentService,
	AbstractTaxService,
	Data,
	ItemTaxCalculationLine,
	PaymentData,
	PaymentSession,
	PaymentSessionData,
	ShippingTaxCalculationLine,
	TaxCalculationContext,
} from '@medusajs/medusa';
import { ProviderTaxLine } from '@medusajs/medusa/dist/types/tax-service';
import { FulfillmentService } from 'medusa-interfaces';

@Service()
export class TestService {
	static resolutionKey = 'testService';
}

@TaxProvider()
export class TestTaxService extends AbstractTaxService {
	static identifier = 'TestTax';
	async getTaxLines(
		itemLines: ItemTaxCalculationLine[],
		shippingLines: ShippingTaxCalculationLine[],
		context: TaxCalculationContext
	): Promise<ProviderTaxLine[]> {
		return [];
	}
}

@FulfillmentProvider()
export class TestFulfillmentService extends FulfillmentService {
	static identifier = 'TestFulfillment';
}

@NotificationProvider()
export class TestNotificationService {
	static identifier = 'TestNotification';
	getIdentifier() {
		return TestNotificationService.identifier;
	}
}

@PaymentProvider()
export class TestPaymentService {
	static identifier = 'TestPayment';
	getIdentifier(): string {
		return TestPaymentService.identifier;
	}
}

@Service({ override: MedusaCartService })
export class CartService extends MedusaCartService {
	static resolutionKey = 'cartService';

	customMethod = jest.fn();

	removeLineItem(cartId: string, lineItemId: string): Promise<Cart> {
		return Promise.resolve({ id: 'cart_dafsdgfds' } as Cart);
	}
}

@Router({
	routes: [
		{
			path: '/admin',
			method: 'get',
			requiredAuth: true,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/admin/test-path',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/admin/test-path/:test_id',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send(`healthy ${req.params.test_id}`);
				},
			],
		},
		{
			path: '/admin/authenticated-test-path',
			method: 'get',
			requiredAuth: true,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
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
		expect(req.scope).toBeTruthy();
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
		expect(req.scope).toBeTruthy();
		next();
	});

@Router({
	routes: [
		{
			path: '/store/test-path',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/store/test-path/:test_id',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send(`healthy ${req.params.test_id}`);
				},
			],
		},
		{
			path: '/store/authenticated-test-path',
			method: 'get',
			requiredAuth: true,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send('healthy authenticated');
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
		expect(req.scope).toBeTruthy();
		next();
	});

@Router({
	routes: [
		{
			path: '/test-path',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
					return res.send('healthy');
				},
			],
		},
		{
			path: '/test-path/:test_id',
			method: 'get',
			requiredAuth: false,
			handlers: [
				(req: Request, res: Response, next: NextFunction) => {
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
		expect(req.scope).toBeTruthy();
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
		TestTaxService,
		TestFulfillmentService,
		TestPaymentService,
		TestNotificationService,
	],
})
export class TestModule {}
