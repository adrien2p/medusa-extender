import { createConnection } from 'typeorm';
import { getConfigFile } from 'medusa-core-utils/dist';
import { normalize, resolve } from 'path';
import { MultiTenancyOptions } from '../../modules/multi-tenancy/types';

type ConfigModule = {
	projectConfig: {
		database_type: string;
		database_url: string;
		database_database: string;
		database_extra: Record<string, string>;
		cliMigrationsDirs?: string[];
	};
	multiTenancy?: MultiTenancyOptions;
};

/**
 * Run the migrations using the medusa-config.js config.
 * @param run
 * @param revert
 * @param show
 */
export async function migrate({ run, revert, show }): Promise<void> {
	const { configModule } = getConfigFile(process.cwd(), `medusa-config`) as { configModule: ConfigModule };

	let uniqMigrationDirs = new Set<string>();
	if (configModule.projectConfig?.cliMigrationsDirs?.length) {
		uniqMigrationDirs = new Set(configModule.projectConfig.cliMigrationsDirs);
	}

	const migrationDirs = [
		...new Set([
			...uniqMigrationDirs,
			'src/**/*.migration.js',
			'src/**/migrations/*.js',
			'dist/**/*.migration.js',
			'dist/**/migrations/*.js',
		]),
	].map((dir) => {
		return normalize(resolve(process.cwd(), dir));
	});

	const connection = await createConnection({
		type: configModule.projectConfig.database_type as any,
		url: configModule.projectConfig.database_url,
		database: configModule.projectConfig.database_database,
		extra: configModule.projectConfig.database_extra || {},
		logging: ['schema'],
		migrations: migrationDirs,
	});

	if (run) {
		await connection.runMigrations();
		await connection.close();
	} else if (revert) {
		await connection.undoLastMigration({ transaction: 'all' });
		await connection.close();
	} else if (show) {
		await connection.showMigrations();
		await connection.close();
	}
}
