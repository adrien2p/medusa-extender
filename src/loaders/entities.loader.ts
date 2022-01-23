import { MedusaEntityStatic } from '../types';
import { Utils } from '../medusa-utils';
import { asClass, asValue, AwilixContainer } from 'awilix';

/**
 * @internal
 * Load custom entities that must override the existing entities from the rootDir.
 * @param entities Any custom entity that implements MedusaEntity
 */
export async function overriddenEntitiesLoader(entities: MedusaEntityStatic[]): Promise<void> {
	return load(entities);
}

export async function entitiesLoader(entities: MedusaEntityStatic[], container: AwilixContainer): Promise<void> {
	return load(entities, container);
}

async function load(entities: MedusaEntityStatic[], container?: AwilixContainer): Promise<void> {
	for (const entity of entities) {
		if (entity.isHandledByMedusa) {
			if (!entity.overriddenType) {
				await registerEntity(container, entity);
			} else {
				await overrideEntity(entity);
			}
		}
	}
}

function registerEntity(container: AwilixContainer, entity: MedusaEntityStatic) {
	if (!entity.resolutionKey) {
		throw new Error('Missing static property resolutionKey from entity ' + entity.name);
	}
	const registerEntityName = entity.resolutionKey;
	container.register({
		[registerEntityName]: asClass(entity),
	});

	(container as any).registerAdd('db_entities', asValue(entity));

	const preparedLog = Utils.prepareLog('MedusaLoader#entitiesLoader', `Entity registered - ${entity.resolutionKey}`);
	console.log(preparedLog);
}

async function overrideEntity(entity: MedusaEntityStatic): Promise<void> {
	const fileName = `${entity.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}`;
	const originalEntity = await import('@medusajs/medusa/dist/models/' + fileName);
	originalEntity[entity.overriddenType.name] = entity;

	const preparedLog = Utils.prepareLog('MedusaLoader#entitiesLoader', `Entity overridden - ${entity.overriddenType.name}`);
	console.log(preparedLog);
}
