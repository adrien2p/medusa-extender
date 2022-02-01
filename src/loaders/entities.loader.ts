import { Utils, GetInjectableOption, GetInjectableOptions } from './';
import { asClass, asValue, AwilixContainer } from 'awilix';
import { ChildEntity } from 'typeorm';

export async function entitiesLoader(
	entities: GetInjectableOptions<'entity'>,
	container: AwilixContainer
): Promise<void> {
	for (const entityOptions of entities) {
		if (entityOptions.resolutionKey) {
			registerEntity(container, entityOptions);
		}
	}
}

export async function overrideEntitiesLoader(entities: GetInjectableOptions<'entity'>): Promise<void> {
	for (const entityOptions of entities) {
		if (entityOptions.override) {
			await overrideEntity(entityOptions);
		}
	}
}

/**
 * @internal
 * Load custom entity into the container.
 * @param container
 * @param entityOptions
 */
export function registerEntity(container: AwilixContainer, entityOptions: GetInjectableOption<'entity'>) {
	const { resolutionKey, metatype: entity } = entityOptions;
	if (!resolutionKey) {
		throw new Error('Missing static property resolutionKey from entity ' + entity.name);
	}
	container.register({
		[resolutionKey]: asClass(entity),
	});

	(container as any).registerAdd('db_entities', asValue(entity));

	Utils.log('MedusaLoader#entitiesLoader', `Entity registered - ${resolutionKey}`);
}

/**
 * @internal
 * Load custom entity and override existing ones.
 * @param entityOptions
 */
export async function overrideEntity(entityOptions: GetInjectableOption<'entity'>): Promise<void> {
	const { metatype: entity, override } = entityOptions;

	const fileName = `${entity.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntityModule = await import('@medusajs/medusa/dist/models/' + fileName);

	ChildEntity()(originalEntityModule[override.name]);
	originalEntityModule[override.name] = entity;

	Utils.log('MedusaLoader#entitiesLoader', `Entity overridden - ${override.name}`);
}
