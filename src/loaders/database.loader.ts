import { entitiesLoader } from './entities.loader';
import { GetInjectableOptions, migrationsLoader } from './';
import { MedusaContainer } from '@medusajs/medusa/dist/types/global';

export async function databaseLoader(
	entities: GetInjectableOptions<'entity'>,
	repositories: GetInjectableOptions<'repository'>,
	migrations: GetInjectableOptions<'migration'>
): Promise<void> {
	const databaseLoader = await import('@medusajs/medusa/dist/loaders/database');
	const originalDatabaseLoader = databaseLoader.default;
	databaseLoader.default = async ({ container, configModule }) => {
		await entitiesLoader(entities, container as unknown as MedusaContainer);

		const loadedRepositories = Object.keys(require.cache).filter((f) => {
			return (
				((f.includes('database') || f.includes('repositories')) && !f.includes('loaders')) ||
				(f.includes('repository') && !f.includes('node_modules'))
			);
		});
		loadedRepositories.forEach((key) => {
			delete require.cache[key];
		});

		const connection = await originalDatabaseLoader({ container, configModule });

		const Module = await import('module');

		Module.prototype.require = new Proxy(Module.prototype.require, {
			apply(target, thisArg, argumentsList) {
				const name = argumentsList[0];

				const module = Reflect.apply(target, thisArg, argumentsList);
				if (/.*database.*/g.test(name)) {
					(module as any).dataSource = connection;
				}

				return module;
			},
		});

		await migrationsLoader(migrations, connection);

		return connection;
	};
}
