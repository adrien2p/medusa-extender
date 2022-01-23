import { EntityManager, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';
import { MedusaServiceStatic } from '../types';

export type EntityEventActionOptions<T> = {
	async: boolean;
	customMetatype?: MedusaServiceStatic<T>;
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
 * The arguments expected by the {@link OnMedusaEvent} decorator.
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
