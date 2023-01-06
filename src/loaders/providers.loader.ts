import { aliasTo, asFunction } from 'awilix';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';
import { GetInjectableOption, GetInjectableOptions } from '.';
import { Logger, lowerCaseFirst } from '../core';

const logger = Logger.contextualize('ProvidersLoader');

export function registerProviders(
	container: MedusaContainer,
	providers: GetInjectableOptions<'provider'>,
	configModule: Record<string, unknown>
): void {
	for (const providerOptions of providers) {
		registerProvider(container, providerOptions, configModule);
	}

	logger.log(`${providers.length} providers registered`);
}

export function registerProvider(
	container: MedusaContainer,
	options: GetInjectableOption<'provider'>,
	configModule: Record<string, unknown>
): void {
	const { subtype } = options;
	if (subtype === 'tax') return registerTaxProvider(container, options, configModule);
	if (subtype === 'fulfillment') return registerFulfillmentProvider(container, options, configModule);
	if (subtype === 'notification') return registerNotificationProvider(container, options, configModule);
	if (subtype === 'payment') return registerPaymentProvider(container, options, configModule);
}

function registerTaxProvider(
	container: MedusaContainer,
	options: GetInjectableOption<'provider'>,
	configModule: Record<string, unknown>
): void {
	const { metatype } = options;
	const name = lowerCaseFirst(metatype.name);
	const identifier = ensureIdentifier(metatype);

	console.log('container', container);

	container.registerAdd(
		'taxProviders',
		asFunction((cradle) => new metatype(cradle, configModule.options))
	);

	container.register({
		[name]: asFunction((cradle) => new metatype(cradle, configModule.options)).singleton(),
		[`tp_${identifier}`]: aliasTo(name),
	});

	logger.log(`Tax Provider loaded - ${name}`);
}

function registerFulfillmentProvider(
	container: MedusaContainer,
	options: GetInjectableOption<'provider'>,
	configModule: Record<string, unknown>
): void {
	const { metatype } = options;
	const name = lowerCaseFirst(metatype.name);
	const identifier = ensureIdentifier(metatype);

	container.registerAdd(
		'fulfillmentProviders',
		asFunction((cradle) => new metatype(cradle, configModule.options))
	);

	container.register({
		[name]: asFunction((cradle) => new metatype(cradle, configModule.options)).singleton(),
		[`fp_${identifier}`]: aliasTo(name),
	});

	logger.log(`Fulfillment Provider loaded - ${name}`);
}

function registerPaymentProvider(
	container: MedusaContainer,
	options: GetInjectableOption<'provider'>,
	configModule: Record<string, unknown>
): void {
	const { metatype } = options;
	const name = lowerCaseFirst(metatype.name);
	const identifier = ensureIdentifier(metatype);

	container.registerAdd(
		'paymentProviders',
		asFunction((cradle) => new metatype(cradle, configModule.options))
	);

	container.register({
		[name]: asFunction((cradle) => new metatype(cradle, configModule.options)).singleton(),
		[`pp_${identifier}`]: aliasTo(name),
	});

	logger.log(`Payment Provider loaded - ${name}`);
}

function registerNotificationProvider(
	container: MedusaContainer,
	options: GetInjectableOption<'provider'>,
	configModule: Record<string, unknown>
): void {
	const { metatype } = options;
	const name = lowerCaseFirst(metatype.name);
	const identifier = ensureIdentifier(metatype);

	container.registerAdd(
		'notificationProviders',
		asFunction((cradle) => new metatype(cradle, configModule.options))
	);

	container.register({
		[name]: asFunction((cradle) => new metatype(cradle, configModule.options)).singleton(),
		[`noti_${identifier}`]: aliasTo(name),
	});

	logger.log(`Notification Provider loaded - ${name}`);
}

function ensureIdentifier(metatype: any): string {
	if (!metatype.identifier) throw new Error(`${metatype.name} is missing a static identifier property`);
	return metatype.identifier;
}
