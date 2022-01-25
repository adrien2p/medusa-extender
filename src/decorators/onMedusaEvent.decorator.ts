import { Constructor, MedusaServiceStatic } from '../types';
import { EntityActions, EntityEventActionOptions, MedusaEventEmittedParams } from './types';
import { medusaEventEmitter } from '../medusa-event-emitter';
import { Entity } from 'typeorm';

export class OnMedusaEvent {
	readonly #when: string;
	#targetEntity: any;

	constructor(when?: string) {
		this.#when = when;
	}

	static get Before(): OnMedusaEvent {
		return this.build('Before');
	}

	static get After(): OnMedusaEvent {
		return this.build('After');
	}

	private static build(when: string): OnMedusaEvent {
		return new OnMedusaEvent(when);
	}

	public InsertEvent<Entity>(entity: Constructor<Entity>): string {
		return `${this.#when}Insert${entity.name}`;
	}

	public UpdateEvent<Entity>(entity: Constructor<Entity>): string {
		return `${this.#when}Update${entity.name}`;
	}

	public RemoveEvent<Entity>(entity: Constructor<Entity>): string {
		return `${this.#when}Remove${entity.name}`;
	}

	public Insert<TEntity extends typeof Entity>(
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Insert', entity, options);
	}

	public Update<TEntity extends typeof Entity>(
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Update', entity, options);
	}

	public Remove<TEntity extends typeof Entity>(
		entity: TEntity,
		options: EntityEventActionOptions<TEntity> = { async: false }
	): MethodDecorator {
		return this.buildDecorator('Remove', entity, options);
	}

	private buildDecorator<TEntity extends typeof Entity>(
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
function OnMedusaEntityEventDecorator<TEntity extends typeof Entity>(
	eventName: string,
	targetEntity: TEntity,
	{ async, customMetatype }: { async: boolean; customMetatype?: MedusaServiceStatic } = {
		async: false,
	}
): MethodDecorator {
	return (target: MedusaServiceStatic, propertyKey: string, descriptor: PropertyDescriptor): void => {
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

		medusaEventEmitter.register(eventName, propertyKey, customMetatype ?? target);
	};
}
