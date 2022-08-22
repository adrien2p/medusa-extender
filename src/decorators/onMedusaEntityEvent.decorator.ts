import 'reflect-metadata';
import { Type, customEventEmitter, buildEventName } from '../core';
import { EntityManager, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';

export type EntityEventActionOptions = {
	async: boolean;
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
	#targetEntity: Type;

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

	public InsertEvent<Entity extends Type>(entity: Entity, target: Type, targetPropertyKey: string): string {
		return buildEventName(`${this.#when}Insert${entity.name}`, target, targetPropertyKey);
	}

	public UpdateEvent<Entity extends Type>(entity: Entity, target: Type, targetPropertyKey: string): string {
		return buildEventName(`${this.#when}Update${entity.name}`, target, targetPropertyKey);
	}

	public RemoveEvent<Entity extends Type>(entity: Entity, target: Type, targetPropertyKey: string): string {
		return buildEventName(`${this.#when}Remove${entity.name}`, target, targetPropertyKey);
	}

	public Insert<TEntity extends Type>(
		entity: TEntity,
		options: EntityEventActionOptions = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Insert', entity, options);
	}

	public Update<TEntity extends Type>(
		entity: TEntity,
		options: EntityEventActionOptions = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Update', entity, options);
	}

	public Remove<TEntity extends Type>(
		entity: TEntity,
		options: EntityEventActionOptions = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Remove', entity, options);
	}

	private buildDecorator<TEntity extends Type>(
		action: EntityActions,
		entity: TEntity,
		options: EntityEventActionOptions = { async: false }
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
function OnMedusaEntityEventDecorator(
	eventName: string,
	targetEntity: Type,
	{ async }: { async: boolean } = {
		async: false,
	}
): MethodDecorator {
	return (target: Type, propertyKey: string, descriptor: PropertyDescriptor): void => {
		const original = descriptor.value;
		descriptor.value = async function <Entity>(...args: unknown[]): Promise<void> {
			const { values, resolveOrReject } = args.pop() as MedusaEventEmittedParams<Entity, EntityActions>;

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

		eventName = buildEventName(eventName, target, propertyKey);
		customEventEmitter.register(eventName, propertyKey, target.constructor as Type);
	};
}
