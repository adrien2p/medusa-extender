import { GetInjectableOptions, Logger, MedusaContainer } from '../core';
import { asFunction } from 'awilix';

const logger = Logger.contextualize('SubscribersLoader');

/**
 * @internal
 * Load all custom extended validators into the underlying @medusajs instance.
 * @param subscribersOptions
 */
export async function subscribersLoader(subscribersOptions: GetInjectableOptions<'subscriber'>): Promise<void> {
	logger.log('Loading custom subscribers into the underlying @medusajs');

	const module = await import('@medusajs/medusa/dist/loaders/subscribers');
	const originalSubscriber = module.default;
	module.default = ({ container }: { container: MedusaContainer }): void => {
		// @ts-ignore
		originalSubscriber({ container });
		subscribersOptions.forEach((subscriberOption) => {
			container.build(asFunction((cradle) => new subscriberOption.metatype(cradle)).singleton());
		});
	};

	logger.log(`${subscribersOptions.length} subscribers built`);
}
