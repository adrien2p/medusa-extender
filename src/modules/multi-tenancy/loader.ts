export function getTenantMigrationDirs(configModule: { multiTenancy?: boolean }): string[] {
	if (configModule?.multiTenancy !== true) return [];
	return [__dirname + '/**.migration.js', __dirname + '/**.migration.ts'];
}
