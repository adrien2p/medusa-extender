import 'reflect-metadata';
import { Type } from '../types';
import { customEventEmitter } from '../event-emmiter';
import { EntityManager, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';

export type EntityEventActionOptions<T> = {
	async: boolean;
	metatype?: Type<T>;
};

export type EntityActions = 'Insert' | 'Update' | 'Remove';

/**
 * Event types that can be emitted.
 */
export type EntityEventType<Entity, TEntityActions extends EntityActions> = TEntityActions extends 'Insert'
	? InsertEvent<Entity>
	: TEntityActions extends 'Update'
	? UpdateEvent<Entity>
	: RemoveEvent<Entity>;

/**
 * The arguments expected by the {@link OnMedusaEntityEvent} decorator.
 */
export type MedusaEventEmittedParams<Entity, TEntityActions extends EntityActions> = {
	values: MedusaEventHandlerParams<Entity, TEntityActions>;
	resolveOrReject: (err?: Error, res?: unknown) => void;
};

/**
 * The arguments expected by the event handler.
 */
export type MedusaEventHandlerParams<Entity, TEntityActions extends EntityActions> = {
	event: EntityEventType<Entity, TEntityActions>;
	transactionalEntityManager?: EntityManager;
};

export class OnMedusaEntityEvent {
	readonly #when: string;
	#targetEntity: any;

	constructor(when?: string) {
		this.#when = when;
	}

	static get Before(): OnMedusaEntityEvent {
		return this.build('Before');
	}

	static get After(): OnMedusaEntityEvent {
		return this.build('After');
	}

	private static build(when: string): OnMedusaEntityEvent {
		return new OnMedusaEntityEvent(when);
	}

	public InsertEvent<Entity extends Type>(entity: Entity): string {
		return `${this.#when}Insert${entity.name}`;
	}

	public UpdateEvent<Entity extends Type>(entity: Entity): string {
		return `${this.#when}Update${entity.name}`;
	}

	public RemoveEvent<Entity extends Type>(entity: Entity): string {
		return `${this.#when}Remove${entity.name}`;
	}

	public Insert<TEntity extends Type>(
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Insert', entity, options);
	}

	public Update<TEntity extends Type>(
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Update', entity, options);
	}

	public Remove<TEntity extends Type>(
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Remove', entity, options);
	}

	private buildDecorator<TEntity extends Type>(
		action: EntityActions,
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	) {
		this.#targetEntity = entity;
		return OnMedusaEntityEventDecorator(`${this.#when}${action}${entity.name}`, entity, options);
	}
}

/**
 * Allow to decorate a class method to register it as an event handler for an entity event.
 * @param eventName The event that we are listening to
 * @param targetEntity The entity for which the event is triggered
 * @param async Should the event be awaiting the result
 * @param customMetatype The key that represent the class in the container it belongs to (Used to resolve the real instance)
 */
function OnMedusaEntityEventDecorator<TEntity extends Type>(
	eventName: string,
	targetEntity: TEntity,
	{ async, metatype }: { async: boolean; metatype?: Type } = {
		async: false,
	}
): MethodDecorator {
	return (target: Type, propertyKey: string, descriptor: PropertyDescriptor): void => {
		const original = descriptor.value;
		descriptor.value = async function <Entity>({
			values,
			resolveOrReject,
		}: MedusaEventEmittedParams<Entity, any>): Promise<void> {
			if (!(values.event.entity instanceof targetEntity)) {
				return;
			}

			const promise = original.apply(this, [values]);
			if (async) {
				return promise
					.then((res: unknown) => {
						return resolveOrReject(null, res);
					})
					.catch((err: Error) => {
						return resolveOrReject(err);
					});
			} else {
				return resolveOrReject();
			}
		};

		customEventEmitter.register(eventName, propertyKey, metatype ?? target);
	};
}
