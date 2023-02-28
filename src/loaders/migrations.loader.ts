import { Connection, DataSource, Migration } from 'typeorm';
import { GetInjectableOptions } from './';
import { Logger } from '../core';

const logger = Logger.contextualize('MigrationsLoader');

/**
 * @internal
 * Run custom migrations that are find from the provided directory and stored in a `migrations` subdirectory.
 * @param migrationsOptions Any custom migration that implements MigrationInterface
 * @param dbDataSource Database connection from medusa internal
 */
export async function migrationsLoader(
	migrationsOptions: GetInjectableOptions<'migration'>,
	dbDataSource: DataSource
): Promise<void> {
	logger.log('Registering migrations into the ORM connection');

	for (const migrationOptions of migrationsOptions) {
		dbDataSource.migrations.push(new migrationOptions.metatype());
	}

	logger.log('Running migrations');
	await dbDataSource.runMigrations().then((ranMigrations: Migration[]) => {
		for (const migration of ranMigrations) {
			logger.log('Migration applied - %s', migration.name);
		}
	});
}
