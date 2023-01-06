import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { default as MedusaCartService } from '@medusajs/medusa/dist/services/cart';
import { IdMap } from 'medusa-test-utils';
import {
	AdminAuthTestPathMiddleware,
	AdminTestPathMiddleware,
	CartService,
	CustomTopTestPathMiddleware,
	StoreTestPathMiddleware,
	TestModule,
	TestService,
	TestTaxService,
	TestFulfillmentService,
	TestNotificationService,
	TestPaymentService,
} from './fixtures/loaders';
import { Context } from '../utils/types';
import { makeRequest } from '../utils/request';
import { loadServer, serverTeardown } from '../utils/server';

describe('Loaders', () => {
	let context!: Context;

	beforeAll(async () => {
		context = await loadServer([TestModule], { verbose: false });
	});

	afterAll(async () => {
		await serverTeardown(context);
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('validate that the context is properly loaded', () => {
		expect(context.app).toBeTruthy();
		expect(context.appListener).toBeTruthy();
		expect(context.port).toBeTruthy();
		expect(context.container).toBeTruthy();
	});

	describe('services loader', () => {
		it('should load service components', () => {
			const testService: TestService = context.container.resolve(TestService.resolutionKey);
			expect(testService).toBeTruthy();
			expect(testService).toBeInstanceOf(TestService);
		});

		it('should load overridden service components', () => {
			const cartService: CartService = context.container.resolve(CartService.resolutionKey);
			expect(cartService).toBeTruthy();
			expect(cartService).toBeInstanceOf(CartService);
			expect(cartService).toBeInstanceOf(MedusaCartService);

			expect(cartService.customMethod).toBeTruthy();

			cartService.customMethod();

			expect(cartService.customMethod).toHaveBeenCalled();
		});

		it('should load overridden service components and override parent method', async () => {
			const cartService: CartService = context.container.resolve(CartService.resolutionKey);

			const cart = await cartService.removeLineItem('1', '1');

			expect(cart).toEqual(
				expect.objectContaining({
					id: 'cart_dafsdgfds',
				})
			);
		});
	});

	describe('admin api loader', () => {
		it('should apply unauthenticated route under the admin path and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/test-path`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy');
		});

		it('should apply unauthenticated parametric route under the admin path and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/test-path/1`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy 1');
		});

		it('should apply authenticated route under the admin path and throw on an unauthenticated request', async () => {
			await makeRequest(context, {
				path: `/admin/authenticated-test-path`,
				method: 'get',
			}).expect(401);
		});

		it('should apply authenticated route under the admin path and succeed on authenticated request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/authenticated-test-path`,
				method: 'get',
				adminSession: {
					jwt: {
						userId: IdMap.getId('admin_user'),
					},
				},
			}).expect(200);
			expect(res.text).toBe('healthy authenticated');
		});

		it('should apply unauthenticated parametric admin middleware', async () => {
			await makeRequest(context, {
				path: `/admin/test-path/1`,
				method: 'get',
			}).expect(200);
			expect(AdminTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});

		it('should apply unauthenticated admin middleware', async () => {
			await makeRequest(context, {
				path: `/admin/test-path`,
				method: 'get',
			}).expect(200);
			expect(AdminTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});

		it('should apply authenticated admin middleware', async () => {
			await makeRequest(context, {
				path: `/admin/authenticated-test-path`,
				method: 'get',
				adminSession: {
					jwt: {
						userId: IdMap.getId('admin_user'),
					},
				},
			}).expect(200);
			expect(AdminTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(AdminAuthTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});
	});

	describe('store api loader', () => {
		it('should apply unauthenticated route under the store path and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/test-path`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy');
		});

		it('should apply unauthenticated parametric route under the store path and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/admin/test-path/2`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy 2');
		});

		it('should apply unauthenticated parametric store middleware', async () => {
			await makeRequest(context, {
				path: `/store/test-path/2`,
				method: 'get',
			}).expect(200);
			expect(StoreTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});

		it('should apply unauthenticated store middleware', async () => {
			await makeRequest(context, {
				path: `/store/test-path`,
				method: 'get',
			}).expect(200);
			expect(StoreTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});

		it('should apply authenticated store middleware', async () => {
			await makeRequest(context, {
				path: `/store/authenticated-test-path`,
				method: 'get',
				clientSession: {
					jwt_store: {
						customer_id: IdMap.getId('customer_user'),
					},
				},
			}).expect(200);
			expect(StoreTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
		});
	});

	describe('custom api loader', () => {
		it('should apply unauthenticated route under the top router and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/test-path`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy');
		});

		it('should apply unauthenticated parametric route under the top router and succeed on request', async () => {
			const res = await makeRequest(context, {
				path: `/test-path/3`,
				method: 'get',
			}).expect(200);
			expect(res.text).toBe('healthy 3');
		});

		it('should apply unauthenticated custom parametric api middleware', async () => {
			await makeRequest(context, {
				path: `/test-path/3`,
				method: 'get',
			}).expect(200);
			expect(StoreTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(AdminTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(AdminAuthTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(CustomTopTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});

		it('should apply unauthenticated custom api middleware', async () => {
			await makeRequest(context, {
				path: `/test-path`,
				method: 'get',
			}).expect(200);
			expect(StoreTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(AdminTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(AdminAuthTestPathMiddleware.prototype.consume).not.toHaveBeenCalled();
			expect(CustomTopTestPathMiddleware.prototype.consume).toHaveBeenCalled();
		});
	});

	describe('plugins loader', () => {
		it('should load tax providers using name', () => {
			const provider = context.container.resolve<TestTaxService>('testTaxService');
			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestTaxService);
		});

		it('should load into the tax providers array', () => {
			const taxProviders = context.container.resolve<any[]>('taxProviders');
			const provider = taxProviders.find((t) => t instanceof TestTaxService);

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestTaxService);
		});

		it('should load tax provider with as tp_${identifier}', () => {
			const provider = context.container.resolve<TestTaxService>('tp_TestTax');

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestTaxService);
		});

		it('should load fulfillment provider using name', () => {
			const provider = context.container.resolve<TestFulfillmentService>('testFulfillmentService');
			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestFulfillmentService);
		});

		it('should load fulfillment provider into the fulfillment providers array', () => {
			const providers = context.container.resolve<any[]>('fulfillmentProviders');
			const provider = providers.find((t) => t instanceof TestFulfillmentService);

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestFulfillmentService);
		});

		it('should load fulfillment provider with as fp_${identifier}', () => {
			const provider = context.container.resolve<TestFulfillmentService>('fp_TestFulfillment');

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestFulfillmentService);
		});

		it('should load notification provider using name', () => {
			const provider = context.container.resolve<TestNotificationService>('testNotificationService');
			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestNotificationService);
		});

		it('should load notification provider into the notification providers array', () => {
			const providers = context.container.resolve<any[]>('notificationProviders');
			const provider = providers.find((t) => t instanceof TestNotificationService);

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestNotificationService);
		});

		it('should load notification provider with as noti_${identifier}', () => {
			const provider = context.container.resolve<TestNotificationService>('noti_TestNotification');

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestNotificationService);
		});

		it('should load payment provider using name', () => {
			const provider = context.container.resolve<TestNotificationService>('testPaymentService');
			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestPaymentService);
		});

		it('should load payment provider into the payment providers array', () => {
			const providers = context.container.resolve<any[]>('paymentProviders');
			const provider = providers.find((t) => t instanceof TestPaymentService);

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestPaymentService);
		});

		it('should load payment provider with as pp_${identifier}', () => {
			const provider = context.container.resolve<TestPaymentService>('pp_TestPayment');

			expect(provider).toBeTruthy();
			expect(provider).toBeInstanceOf(TestPaymentService);
		});
	});
});
