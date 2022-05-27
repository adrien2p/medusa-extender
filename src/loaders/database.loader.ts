import { repositoriesLoader } from './repository.loader';
import { entitiesLoader } from './entities.loader';
import { GetInjectableOptions, MedusaContainer } from './';

export async function databaseLoader(
	entities: GetInjectableOptions<'entity'>,
	repositories: GetInjectableOptions<'repository'>
): Promise<void> {
	const databaseLoader = await import('@medusajs/medusa/dist/loaders/database');
	const originalDatabaseLoader = databaseLoader.default;
	databaseLoader.default = async ({ container, configModule }) => {
		await entitiesLoader(entities, container as MedusaContainer);
		await repositoriesLoader(repositories, container as MedusaContainer);
		return originalDatabaseLoader({ container, configModule });
	};
}
