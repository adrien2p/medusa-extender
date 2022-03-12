import { GetInjectableOption, GetInjectableOptions } from './';
import { asClass, asValue, AwilixContainer } from 'awilix';
import { Logger } from '../core';

const logger = Logger.contextualize('EntitiesLoader');

/**
 * @internal
 * Load all custom entities into the underlying @medusajs instance.
 * @param entities
 * @param container
 */
export async function entitiesLoader(
	entities: GetInjectableOptions<'entity'>,
	container: AwilixContainer
): Promise<void> {
	logger.log('Loading custom entities into the underlying @medusajs');

	let count = 0;
	for (const entityOptions of entities) {
		if (entityOptions.resolutionKey) {
			registerEntity(container, entityOptions);
			logger.log(`Entity loaded - ${entityOptions.resolutionKey}`);
			++count;
		}
	}

	logger.log(`${count} entities registered`);
}

/**
 * @internal
 * Load all custom entities that override @medusajs instance entities.
 * @param entities
 */
export async function overrideEntitiesLoader(entities: GetInjectableOptions<'entity'>): Promise<void> {
	logger.log('Loading overridden entities into the underlying @medusajs');

	let count = 0;
	for (const entityOptions of entities) {
		if (entityOptions.override) {
			await overrideEntity(entityOptions);
			logger.log(`Entity overridden - ${entityOptions.metatype.name}`);
			++count;
		}
	}

	logger.log(`${count} entities overridden`);
}

export function registerEntity(container: AwilixContainer, entityOptions: GetInjectableOption<'entity'>) {
	const { resolutionKey, metatype: entity } = entityOptions;
	if (!resolutionKey) {
		throw new Error('Missing static property resolutionKey from entity ' + entity.name);
	}
	container.register({
		[resolutionKey]: asClass(entity),
	});

	(container as any).registerAdd('db_entities', asValue(entity));
}

export async function overrideEntity(entityOptions: GetInjectableOption<'entity'>): Promise<void> {
	const { metatype: entity, override } = entityOptions;

	const fileName = `${entity.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntityModule = await import('@medusajs/medusa/dist/models/' + fileName);
	originalEntityModule[override.name] = entity;
}
