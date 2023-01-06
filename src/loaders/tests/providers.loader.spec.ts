import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { FulfillmentProvider, Module, NotificationProvider, PaymentProvider, TaxProvider } from '../../decorators';
import { metadataReader } from '../../core';
import { registerProvider } from '../providers.loader';
import { newContainer } from './utils/new-container';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';

@TaxProvider()
class TestTaxService {
	static identifier = 'TestTax';
}

@FulfillmentProvider()
class TestFulfillmentService {
	static identifier = 'TestFulfillment';
}

@PaymentProvider()
class TestPaymentService {
	static identifier = 'TestPayment';
}

@NotificationProvider()
class TestNotificationService {
	static identifier = 'TestNotification';
}

@Module({ imports: [TestTaxService] })
class TestTaxModule {}

@Module({ imports: [TestFulfillmentService] })
class TestFulfillmentModule {}

@Module({ imports: [TestNotificationService] })
class TestNotificationModule {}

@Module({ imports: [TestPaymentService] })
class TestPaymentModule {}

describe('Provider loader', () => {
	describe('tax providers', () => {
		it('should register in all the correct places', async () => {
			const container = newContainer() as MedusaContainer;

			const components = metadataReader([TestTaxModule]);
			await registerProvider(container, components.get('provider')[0], {});

			expect(container.resolve('testTaxService') instanceof TestTaxService).toBeTruthy();
			expect(container.resolve('tp_TestTax') instanceof TestTaxService).toBeTruthy();
			expect(container.resolve<any[]>('taxProviders').length).toEqual(1);
		});
	});

	describe('fulfillment providers', () => {
		it('should register in all the right places', async () => {
			const container = newContainer() as MedusaContainer;

			const components = metadataReader([TestFulfillmentModule]);
			await registerProvider(container, components.get('provider')[0], {});

			expect(container.resolve('testFulfillmentService') instanceof TestFulfillmentService).toBeTruthy();
			expect(container.resolve('fp_TestFulfillment') instanceof TestFulfillmentService).toBeTruthy();
			expect(container.resolve<any[]>('fulfillmentProviders').length).toEqual(1);
		});
	});

	describe('notification providers', () => {
		it('should register in all the right places', async () => {
			const container = newContainer() as MedusaContainer;

			const components = metadataReader([TestNotificationModule]);
			await registerProvider(container, components.get('provider')[0], {});

			expect(container.resolve('testNotificationService') instanceof TestNotificationService).toBeTruthy();
			expect(container.resolve('noti_TestNotification') instanceof TestNotificationService).toBeTruthy();
			expect(container.resolve<any[]>('notificationProviders').length).toEqual(1);
		});
	});

	describe('payment providers', () => {
		it('should register in all the right places', async () => {
			const container = newContainer() as MedusaContainer;

			const components = metadataReader([TestPaymentModule]);
			await registerProvider(container, components.get('provider')[0], {});

			expect(container.resolve('testPaymentService') instanceof TestPaymentService).toBeTruthy();
			expect(container.resolve('pp_TestPayment') instanceof TestPaymentService).toBeTruthy();
			expect(container.resolve<any[]>('paymentProviders').length).toEqual(1);
		});
	});
});
