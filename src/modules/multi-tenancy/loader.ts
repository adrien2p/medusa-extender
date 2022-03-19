import { ConfigModule } from './types';

export function getTenantMigrationDirs(configModule: ConfigModule): string[] {
	if (!configModule?.multiTenancy?.enable) return [];
	return [__dirname + '/**.migration.js', __dirname + '/**.migration.ts'];
}
