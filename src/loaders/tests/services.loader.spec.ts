import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Module, Service } from '../../decorators';
import { OrderService as MedusaOrderService } from '@medusajs/medusa/dist/services';
import { asFunction, createContainer, Lifetime } from 'awilix';
import { MedusaContainer, metadataReader } from '../../core';
import { overrideService, registerService } from '../services.loader';

@Service({ override: MedusaOrderService })
class OrderService extends MedusaOrderService {
	testProperty = 'custom property';
}

@Module({ imports: [OrderService] })
class OrderModule {}

@Service()
class CustomService {
	testProperty = 'custom property';
}

@Module({ imports: [CustomService] })
class CustomModule {}

describe('Services loader', () => {
	const container = createContainer() as MedusaContainer;

	beforeAll(() => {
		container
			.register({
				orderService: asFunction((cradle) => new MedusaOrderService(cradle), {
					lifetime: Lifetime.SINGLETON,
				}),
			})
			.register({ manager: asFunction(() => void 0) })
			.register({ orderRepository: asFunction(() => void 0) })
			.register({ paymentProviderService: asFunction(() => void 0) })
			.register({ customerService: asFunction(() => void 0) })
			.register({ shippingOptionService: asFunction(() => void 0) })
			.register({ shippingProfileService: asFunction(() => void 0) })
			.register({ discountService: asFunction(() => void 0) })
			.register({ fulfillmentProviderService: asFunction(() => void 0) })
			.register({ fulfillmentService: asFunction(() => void 0) })
			.register({ lineItemService: asFunction(() => void 0) })
			.register({ totalsService: asFunction(() => void 0) })
			.register({ regionService: asFunction(() => void 0) })
			.register({ cartService: asFunction(() => void 0) })
			.register({ addressRepository: asFunction(() => void 0) })
			.register({ giftCardService: asFunction(() => void 0) })
			.register({ draftOrderService: asFunction(() => void 0) })
			.register({ inventoryService: asFunction(() => void 0) })
			.register({ eventBusService: asFunction(() => void 0) });
	});

	describe('overrideService', () => {
		it(' should override MedusaOrderService with OrderService', async () => {
			container.register({
				orderService: asFunction((cradle) => new MedusaOrderService(cradle), {
					lifetime: Lifetime.SINGLETON,
				}),
			});

			expect(container.resolve('orderService') instanceof MedusaOrderService).toBeTruthy();

			const components = metadataReader([OrderModule]);
			await overrideService(container, components.get('service')[0], {});

			expect(container.resolve('orderService') instanceof MedusaOrderService).toBeTruthy();
			expect(container.resolve('orderService') instanceof OrderService).toBeTruthy();
			expect((container.resolve('orderService') as OrderService).testProperty).toBeDefined();
			expect((container.resolve('orderService') as OrderService).testProperty).toBe('custom property');
		});
	});

	describe('registerService', () => {
		it(' should register custom service', async () => {
			const components = metadataReader([CustomModule]);
			await registerService(container, components.get('service')[0], {});

			expect(container.resolve('customService') instanceof CustomService).toBeTruthy();
			expect((container.resolve('customService') as CustomService).testProperty).toBe('custom property');
		});
	});
});
