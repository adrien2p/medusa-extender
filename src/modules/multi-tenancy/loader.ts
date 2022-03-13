import { Constructor, Logger } from '../../core';
import { TenantModule } from './tenant.module';

export const logger = Logger.contextualize('TenantModule');

/**
 * @internal
 * Load the multi tenancy module if the config contains multiTenancy: true
 * @param configModule
 */
export function loadTenantModule(configModule: { multiTenancy?: boolean }): Constructor<TenantModule> | void {
	if (configModule?.multiTenancy !== true) return;

	logger.log('Found multiTenancy config in medusa-config');
	logger.log('Preparing module for usage');
	return TenantModule;
}

export function getTenantMigrationDirs(configModule: { multiTenancy?: boolean }): string[] {
	if (configModule?.multiTenancy !== true) return [];
	return [__dirname + '/**.migration.js', __dirname + '/**.migration.ts'];
}
