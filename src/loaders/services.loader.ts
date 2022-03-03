import { asFunction, AwilixContainer, Lifetime } from 'awilix';
import { Utils, GetInjectableOption, GetInjectableOptions } from './';

/**
 * @internal
 * Load custom services from the rootDir.
 * @param services Any custom service that implements MedusaService
 */
export async function servicesLoader(services: GetInjectableOptions<'service'>): Promise<void> {
	const serviceLoader = await import('@medusajs/medusa/dist/loaders/services');
	const originalServiceLoader = serviceLoader.default;
	serviceLoader.default = ({ container, configModule, isTest }) => {
		originalServiceLoader({ container, configModule, isTest });
		for (const serviceOptions of services) {
			if (!serviceOptions.resolutionKey) {
				overrideService(container, serviceOptions, configModule);
			} else {
				registerService(container, serviceOptions, configModule);
			}
		}
	};
}

/**
 * @internal
 * Load custom service into the container.
 * @param container
 * @param serviceOptions
 * @param configModule
 */
export function registerService(
	container: AwilixContainer,
	serviceOptions: GetInjectableOption<'service'>,
	configModule: Record<string, unknown>
) {
	const { resolutionKey, metatype, scope } = serviceOptions;
	if (!resolutionKey) {
		throw new Error('Unable to register the ' + metatype.name + '. The resolutionKey is missing.');
	}

	container.register({
		[resolutionKey]: asFunction((cradle) => new metatype(cradle, configModule), { lifetime: scope || 'SINGLETON' }),
	});

	Utils.hydrateLog('MedusaLoader#servicesLoader', `Service registered - ${resolutionKey}`);
}

/**
 * @internal
 * Load custom service and override existing ones.
 * @param container
 * @param serviceOptions
 * @param configModule
 */
export function overrideService(
	container: AwilixContainer,
	serviceOptions: GetInjectableOption<'service'>,
	configModule: Record<string, unknown>
): void {
	const { metatype, override, scope } = serviceOptions;
	const formattedName = `${override.name.charAt(0).toLowerCase() + override.name.slice(1, override.name.length)}`;
	container.cache.delete(formattedName);
	container.register({
		[formattedName]: asFunction((cradle) => new metatype(cradle, configModule), {
			lifetime: scope || Lifetime.SINGLETON,
		}),
	});

	Utils.hydrateLog('MedusaLoader#servicesLoader', `Service overridden - ${metatype.name}`);
}
