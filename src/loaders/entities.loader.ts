import { GetInjectableOption, GetInjectableOptions, lowerCaseFirst, MedusaContainer } from './';
import { asClass, asValue } from 'awilix';
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
	container: MedusaContainer
): Promise<void> {
	logger.log('Loading custom entities into the underlying @medusajs');

	let count = 0;
	for (const entityOptions of entities) {
		if (!entityOptions.override) {
			registerEntity(container, entityOptions);
			logger.log(`Entity loaded - ${lowerCaseFirst(entityOptions.metatype.name)}`);
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

export function registerEntity(container: MedusaContainer, entityOptions: GetInjectableOption<'entity'>): void {
	const { metatype: entity } = entityOptions;
	const resolutionKey =
		entityOptions.resolutionKey ??
		`${lowerCaseFirst(entity.name)}${!entity.name.toLowerCase().includes('entity') ? 'Entity' : ''}`;
	container.register({
		[resolutionKey]: asClass(entity),
	});

	container.registerAdd('db_entities', asValue(entity));
}

export async function overrideEntity(entityOptions: GetInjectableOption<'entity'>): Promise<void> {
	const { metatype: entity, override } = entityOptions;

	const fileName = `${entity.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntityModule = await import('@medusajs/medusa/dist/models/' + fileName);
	originalEntityModule[override.name] = entity;
}
