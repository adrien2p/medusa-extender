import { asFunction, AwilixContainer, Lifetime } from 'awilix';
import { Utils } from '../medusa-utils';
import { GetInjectableOption, GetInjectableOptions } from "../types";

/**
 * @internal
 * Load custom services from the rootDir.
 * @param services Any custom service that implements MedusaService
 * @param container The container to register the custom service under custom-medusa-extender or override existing one
 */
export function servicesLoader(services: GetInjectableOptions<'service'>, container: AwilixContainer): void {
    for (const serviceOptions of services) {
        if (!serviceOptions.resolutionKey) {
            registerService(container, serviceOptions);
        } else {
            overrideService(container, serviceOptions);
        }
    }
}

/**
 * @internal
 * Load custom service into the container.
 * @param container
 * @param serviceOptions
 */
function registerService(container: AwilixContainer, serviceOptions: GetInjectableOption<'service'>) {
    const { resolutionKey, metatype, scope } = serviceOptions;
    if (!resolutionKey) {
        throw new Error('Unable to register the ' + metatype.name + '. The resolutionKey is missing.');
    }

    container.register({
        [resolutionKey]: asFunction((cradle) => new metatype(cradle), { lifetime: scope || 'SINGLETON' }),
    });

    const preparedLog = Utils.prepareLog(
        'MedusaLoader#servicesLoader',
        `Service registered - ${resolutionKey}`
    );
    console.log(preparedLog);
}

/**
 * @internal
 * Load custom service and override existing ones.
 * @param serviceOptions
 */
function overrideService(container: AwilixContainer, serviceOptions: GetInjectableOption<'service'>): void {
    const { metatype, override, scope } = serviceOptions;
    const formattedName = `${
        override.name.charAt(0).toLowerCase() + override.name.slice(1, override.name.length)
    }`;
    container.cache.delete(formattedName);
    container.register({
        [formattedName]: asFunction((cradle) => new metatype(cradle), { lifetime: scope || Lifetime.SINGLETON }),
    });

    const preparedLog = Utils.prepareLog('MedusaLoader#servicesLoader', `Service overridden - ${metatype.name}`);
    console.log(preparedLog);
}
