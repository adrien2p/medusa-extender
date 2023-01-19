import { Connection, EntityManager, EntitySubscriberInterface, Repository } from 'typeorm';
import { ConfigModule, Constructor, MixinReturnType } from './types';
import { getConfigFile } from 'medusa-core-utils';

/**
 * @deprecated The definition files merging the entities types allow us to get rid of this util. It will be removed in the future
 * For repository context, you should extends repository and the medusa target repository.
 * Since it is not possible to use multiple extend, you can use that utilities to apply multiple extends.
 * @param source
 */
export function repositoryMixin<TEntity, TSource>(
	source: Constructor<TSource>
): MixinReturnType<Repository<TEntity>, TSource> {
	const klass = class Base extends Repository<TEntity> {};

	Object.getOwnPropertyNames(source.prototype).forEach((name) => {
		if (name !== 'constructor' && !klass.hasOwnProperty(name)) {
			Object.defineProperty(klass.prototype, name, Object.getOwnPropertyDescriptor(source.prototype, name));
		}
	});

	return klass as MixinReturnType<Repository<TEntity>, TSource>;
}

/**
 * Attach a new subscriber to a specific entities.
 * @param connection The database connection
 * @param Subscriber The subscriber to attach
 * @param transactionalEntityManager The transactional entity manager to pass the transaction through
 */
export function attachOrReplaceEntitySubscriber<T extends Constructor<EntitySubscriberInterface<unknown>>>(
	connection: Connection,
	Subscriber: T,
	transactionalEntityManager?: EntityManager
): void {
	const subscriberIndex = connection.subscribers.findIndex((subscriber: EntitySubscriberInterface) => {
		return subscriber.constructor.name === Subscriber.name;
	});

	const subscriberReplacement = new Subscriber(transactionalEntityManager);
	if (subscriberIndex < 0) {
		connection.subscribers.push(subscriberReplacement);
	} else {
		connection.subscribers.splice(subscriberIndex, 1, subscriberReplacement);
	}
}

/**
 * @deprecated Since this util only acts on the type and not the prototype itself, it adds more confusion for the user. It will be removed in the future
 * Allow to omit some property from a class.
 * @param Class
 * @param keys
 * @constructor
 */
export const Omit = <T, K extends keyof T>(Class: new () => T, keys: K[]): new () => Omit<T, (typeof keys)[number]> =>
	Class;

/**
 * Lower case the first character of the input string.
 * @param str
 */
export function lowerCaseFirst(str: string): string {
	return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * Upper case the first character of the input string.
 * @param str
 */
export function upperCaseFirst(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function buildRegexpIfValid(str: string): RegExp | undefined {
	try {
		const m = str.match(/^([/~@;%#'])(.*?)\1([gimsuy]*)$/);
		if (m) {
			const regexp = new RegExp(m[2], m[3]);
			return regexp;
		}
	} catch (e) {}

	return;
}

export const isPromise = (obj: unknown): boolean =>
	!!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof (obj as any).then === 'function';

export async function asyncLoadConfig(rootDir?: string, filename?: string): Promise<ConfigModule> {
	const configuration = getConfigFile(rootDir ?? process.cwd(), filename ?? `medusa-config`) as {
		configModule: ConfigModule;
		configFilePath: string;
	};
	const resolveConfigProperties = async (obj: any): Promise<ConfigModule> => {
		for (const key of Object.keys(obj)) {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				await resolveConfigProperties(obj[key]);
			}
			if (isPromise(obj[key])) {
				obj[key] = await obj[key];
			}
		}
		return obj;
	};
	const configModule = await resolveConfigProperties(configuration.configModule);
	return configModule;
}
