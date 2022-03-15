import { createConnection } from 'typeorm';
import { getConfigFile } from 'medusa-core-utils/dist';
import { normalize, resolve } from 'path';
import { getTenantMigrationDirs } from '../../modules/multi-tenancy/loader';

<<<<<<< HEAD:src/cli/commands/migrate.ts
/**
 * Run the migrations using the medusa-config.js config.
 * @param run
 * @param show
 */
type ConfigModule = {
	projectConfig: {
		database_type: string;
		database_url: string;
		database_database: string;
		database_extra: Record<string, string>;
	};
	multiTenancy?: boolean;
};

export async function migrate({ run, show }): Promise<void> {
	const { configModule } = getConfigFile(process.cwd(), `medusa-config`) as { configModule: ConfigModule };

	const migrationDirs = [
		'src/**/*.migration.js',
		'src/**/migrations/*.js',
		'dist/**/*.migration.js',
		'dist/**/migrations/*.js',
	].map((dir) => {
		return normalize(resolve(process.cwd(), dir));
	});

	migrationDirs.push(...getTenantMigrationDirs(configModule));

	const connection = await createConnection({
		type: configModule.projectConfig.database_type,
		url: configModule.projectConfig.database_url,
		database: configModule.projectConfig.database_database,
		extra: configModule.projectConfig.database_extra || {},
		logging: ['schema'],
		migrations: migrationDirs,
	} as any);

	if (run) {
		await connection.runMigrations();
		await connection.close();
	} else if (show) {
		await connection.showMigrations();
		await connection.close();
	}
}
