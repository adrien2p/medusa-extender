import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { FulfillmentProvider, Module, Service, TaxProvider } from '../../decorators';
import { OrderService as MedusaOrderService, TaxProviderService } from '@medusajs/medusa/dist/services';
import {
	asFunction,
	asValue,
	AwilixContainer,
	ClassOrFunctionReturning,
	createContainer,
	Lifetime,
	Resolver,
} from 'awilix';
import { MedusaContainer, metadataReader } from '../../core';
import { overrideService, registerService } from '../services.loader';
import { registerProvider, registerProviders } from '../providers.loader';
import { newContainer } from './utils/new-container';

@TaxProvider()
class TestTaxService {
	static identifier = 'TestTax';
}

@FulfillmentProvider()
class TestFulfillmentService {
	static identifier = 'TestFulfillment';
}

@Module({ imports: [TestTaxService] })
class TaxProviderModule {}

@Module({ imports: [TestFulfillmentService] })
class FulfillmentProviderModule {}

function asArray(resolvers: (ClassOrFunctionReturning<unknown> | Resolver<unknown>)[]): {
	resolve: (container: AwilixContainer) => unknown[];
} {
	return {
		resolve: (container: AwilixContainer) => resolvers.map((resolver) => container.build(resolver)),
	};
}

describe('Provider loader', () => {
	describe('tax providers', () => {
		it('should register in all the correct places', async () => {
			const container = newContainer() as MedusaContainer;

			const components = metadataReader([TaxProviderModule]);
			await registerProvider(container, components.get('provider')[0], {});

			expect(container.resolve('testTaxService') instanceof TestTaxService).toBeTruthy();
			expect(container.resolve('tp_TestTax') instanceof TestTaxService).toBeTruthy();
			expect(container.resolve<any[]>('taxProviders').length).toEqual(1);
		});
	});

	describe('fulfillment providers', () => {
		it(' should register in all the right places', async () => {
			const container = newContainer() as MedusaContainer;

			const components = metadataReader([FulfillmentProviderModule]);
			await registerProvider(container, components.get('provider')[0], {});

			expect(container.resolve('testFulfillmentService') instanceof TestFulfillmentService).toBeTruthy();
			expect(container.resolve('fp_TestFulfillment') instanceof TestFulfillmentService).toBeTruthy();
			expect(container.resolve<any[]>('fulfillmentProviders').length).toEqual(1);
		});
	});
});
