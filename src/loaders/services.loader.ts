import { asFunction, Lifetime } from 'awilix';
import { GetInjectableOption, GetInjectableOptions, MedusaContainer } from './';
import { Logger, lowerCaseFirst } from '../core';

const logger = Logger.contextualize('ServicesLoader');

/**
 * @internal
 * Load all custom services and overridden services into the underlying @medusajs instance.
 * @param services Any custom service that implements MedusaService
 */
export async function servicesLoader(services: GetInjectableOptions<'service'>): Promise<void> {
	logger.log('Loading services into the underlying @medusajs');

	let customCount = 0;
	let overriddenCount = 0;

	const serviceLoader = await import('@medusajs/medusa/dist/loaders/services');
	const originalServiceLoader = serviceLoader.default;
	serviceLoader.default = ({ container, configModule, isTest }) => {
		originalServiceLoader({ container, configModule, isTest });
		for (const serviceOptions of services) {
			if (serviceOptions.override) {
				overrideService(container, serviceOptions, configModule);
				logger.log(`Service overridden - ${serviceOptions.metatype.name}`);
				++overriddenCount;
			} else {
				registerService(container, serviceOptions, configModule);
				logger.log(`Service loaded - ${lowerCaseFirst(serviceOptions.metatype.name)}`);

				++customCount;
			}
		}

		logger.log(`${customCount} services registered`);
		logger.log(`${overriddenCount} services overridden`);
	};
}

export function registerService(
	container: MedusaContainer,
	serviceOptions: GetInjectableOption<'service'>,
	configModule: Record<string, unknown>
): void {
	const { metatype, scope } = serviceOptions;
	const resolutionKey = serviceOptions.resolutionKey ?? lowerCaseFirst(metatype.name);
	container.register({
		[resolutionKey]: asFunction((cradle) => new metatype(cradle, configModule), { lifetime: scope || 'SINGLETON' }),
	});
}

export function overrideService(
	container: MedusaContainer,
	serviceOptions: GetInjectableOption<'service'>,
	configModule: Record<string, unknown>
): void {
	const { metatype, override, scope } = serviceOptions;
	const formattedName = lowerCaseFirst(override.name);
	container.cache.delete(formattedName);
	container.register({
		[formattedName]: asFunction((cradle) => new metatype(cradle, configModule), {
			lifetime: scope || Lifetime.SINGLETON,
		}),
	});
}
