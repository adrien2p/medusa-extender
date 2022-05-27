import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Module, Subscriber } from '../../decorators';
import { createContainer, Resolver } from 'awilix';
import { MedusaContainer, metadataReader } from '../../core';
import { subscribersLoader } from '../subscribers.loader';

@Subscriber()
class OrderSubscriber {
	testProperty = 'custom property';
}

@Module({ imports: [OrderSubscriber] })
class SubscriberModule {}

describe('Subscribers loader', () => {
	const container = createContainer() as MedusaContainer;
	const originalContainBuild = container.build;
	container.build = jest.fn().mockImplementation((arg: Resolver<any>) => {
		return originalContainBuild(arg);
	});

	it('should load the subscribers into the container', async () => {
		const components = metadataReader([SubscriberModule]);
		await subscribersLoader(components.get('subscriber'));

		const medusaSubscriberModule = await import('@medusajs/medusa/dist/loaders/subscribers');
		const medusaSubscriberLoaderSpy = jest.spyOn(medusaSubscriberModule, 'default');
		// @ts-ignore
		medusaSubscriberModule.default({ container });

		expect(medusaSubscriberLoaderSpy).toHaveBeenCalled();
		expect(container.build).toHaveBeenCalled();
		expect(container.build).toHaveBeenCalledTimes(1);
		expect(container.build).toReturnWith({ testProperty: 'custom property' });
	});
});
