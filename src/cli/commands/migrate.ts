import { createConnection } from 'typeorm';
import { getConfigFile } from 'medusa-core-utils/dist';
import { normalize, resolve } from 'path';

/**
 * Run the migrations using the medusa-config.js config.
 * @param run
 * @param show
 */
export async function migrate({ run, show }): Promise<void> {
	const { configModule } = getConfigFile(process.cwd(), `medusa-config`) as { configModule: any };

	const migrationDirs = [
		'src/**/*.migration.js',
		'src/**/migrations/*.js',
		'dist/**/*.migration.js',
		'dist/**/migrations/*.js',
	].map((dir) => {
		return normalize(resolve(process.cwd(), dir));
	});

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
