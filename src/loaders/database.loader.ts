import { entitiesLoader } from './entities.loader';
import { repositoriesLoader } from './repository.loader';
import { GetInjectableOptions } from '../types';

/**
 * @internal
 * decorate the original database loader to register our custom entities and repositories first.
 * @param entities Custom entities options
 * @param repositories Custom repositories options
 */
export async function databaseLoader(
	entities: GetInjectableOptions<'entity'>,
	repositories: GetInjectableOptions<'repository'>
): Promise<void> {
	const databaseLoader = await import('@medusajs/medusa/dist/loaders/database');
	const originalDatabaseLoader = databaseLoader.default;
	databaseLoader.default = async ({ container, configModule }) => {
		await entitiesLoader(entities, container);
		await repositoriesLoader(repositories, container);
		return await originalDatabaseLoader({
			container,
			configModule,
		});
	};
}
