/* eslint-disable @typescript-eslint/no-var-requires */
import { Connection, EntityManager, EntitySubscriberInterface, Repository } from 'typeorm';
import { Constructor, MixinReturnType } from './types';

/**
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
