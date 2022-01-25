import { GetInjectableOption, GetInjectableOptions } from '../types';
import { Utils } from '../medusa-utils';
import { asClass, asValue, AwilixContainer } from 'awilix';

/**
 * @internal
 * Load custom entities that must override the existing entities from the rootDir.
 * @param entities Any custom entities
 */
export async function overriddenEntitiesLoader(entities: GetInjectableOptions<'entity'>): Promise<void> {
	const filteredEntitiesOptions = entities.filter((options) => !!options.override);
	for (const options of filteredEntitiesOptions) {
		await overrideEntity(options);
	}
}

/**
 * @internal
 * Load custom entities that must be added to the container
 * @param entities Any custom entities
 * @param container
 */
export async function entitiesLoader(
	entities: GetInjectableOptions<'entity'>,
	container: AwilixContainer
): Promise<void> {
	const filteredEntitiesOptions = entities.filter((options) => !options.override);
	for (const options of filteredEntitiesOptions) {
		await registerEntity(container, options);
	}
}

/**
 * @internal
 * Load custom entity into the container.
 * @param container
 * @param entityOptions
 */
function registerEntity(container: AwilixContainer, entityOptions: GetInjectableOption<'entity'>) {
	const { resolutionKey, metatype: entity } = entityOptions;
	if (!resolutionKey) {
		throw new Error('Missing static property resolutionKey from entity ' + entity.name);
	}
	container.register({
		[resolutionKey]: asClass(entity),
	});

	(container as any).registerAdd('db_entities', asValue(entity));

	const preparedLog = Utils.prepareLog('MedusaLoader#entitiesLoader', `Entity registered - ${resolutionKey}`);
	console.log(preparedLog);
}

/**
 * @internal
 * Load custom entity and override existing ones.
 * @param entityOptions
 */
async function overrideEntity(entityOptions: GetInjectableOption<'entity'>): Promise<void> {
	const { metatype: entity, override } = entityOptions;
	const fileName = `${entity.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntity = await import('@medusajs/medusa/dist/models/' + fileName);
	originalEntity[override.name] = entity;

	const preparedLog = Utils.prepareLog('MedusaLoader#entitiesLoader', `Entity overridden - ${override.name}`);
	console.log(preparedLog);
}
