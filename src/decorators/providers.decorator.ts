import { ProviderInjectableOptions } from '../core';
import { buildProviderDecorator } from './helpers/build-provider-decorator';

export type AllowedProviderInjectableOptions = Omit<ProviderInjectableOptions, 'subtype'>;

/**
 * Mark a class as a tax provider to be used by the loader.
 * @param options
 * @constructor
 */
export function TaxProvider(options: AllowedProviderInjectableOptions = {}): ClassDecorator {
	return buildProviderDecorator({ type: 'provider', subtype: 'tax', ...options });
}

/**
 * Mark a class as a fulfillment provider to be used by the loader.
 * @param options
 * @constructor
 */
export function FulfillmentProvider(options: AllowedProviderInjectableOptions = {}): ClassDecorator {
	return buildProviderDecorator({ type: 'provider', subtype: 'fulfillment', ...options });
}

/**
 * Mark a class as a notification provider to be used by the loader.
 * @param options
 * @constructor
 */
export function NotificationProvider(options: AllowedProviderInjectableOptions = {}): ClassDecorator {
	return buildProviderDecorator({ type: 'provider', subtype: 'notification', ...options });
}

/**
 * Mark a class as a payment provider to be used by the loader.
 * @param options
 * @constructor
 */
export function PaymentProvider(options: AllowedProviderInjectableOptions = {}): ClassDecorator {
	return buildProviderDecorator({ type: 'provider', subtype: 'payment', ...options });
}
