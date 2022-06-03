import { repositoriesLoader } from './repository.loader';
import { entitiesLoader } from './entities.loader';
import { GetInjectableOptions, MedusaContainer, migrationsLoader } from './';

export async function databaseLoader(
	entities: GetInjectableOptions<'entity'>,
	repositories: GetInjectableOptions<'repository'>,
	migrations: GetInjectableOptions<'migration'>
): Promise<void> {
	const databaseLoader = await import('@medusajs/medusa/dist/loaders/database');
	const originalDatabaseLoader = databaseLoader.default;
	databaseLoader.default = async ({ container, configModule }) => {
		await entitiesLoader(entities, container as MedusaContainer);
		await repositoriesLoader(repositories, container as MedusaContainer);
		const connection = await originalDatabaseLoader({ container, configModule });
		await migrationsLoader(migrations, connection);
		return connection;
	};
}
