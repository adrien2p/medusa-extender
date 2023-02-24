import {  DataSource } from 'typeorm';
import { normalize, resolve } from 'path';
import { asyncLoadConfig, buildRegexpIfValid, ConfigModule, Logger } from '../../core';

const logger = Logger.contextualize('Migrate command', 'MEDEX-CLI');

type Options = { run: boolean; revert: boolean; show: boolean; tenant_codes: string | null };

/**
 * Run the migrations using the medusa-config.js config.
 * @param run
 * @param revert
 * @param show
 * @param tenant_codes
 */

export async function migrate({ run, revert, show, tenant_codes }: Options): Promise<void> {
	const configModule = await asyncLoadConfig();
	const configMigrationsDirs =
		configModule?.projectConfig?.cli_migration_dirs ?? configModule?.projectConfig?.cliMigrationsDirs;

	let uniqMigrationDirs = new Set<string>();
	if (configMigrationsDirs?.length) {
		uniqMigrationDirs = new Set(configMigrationsDirs);
	}

	const migrationDirs = [...uniqMigrationDirs].map((dir) => {
		return normalize(resolve(process.cwd(), dir));
	});

	let hostConfig: any = {
		database: configModule.projectConfig.database_database,
		url: configModule.projectConfig.database_url,
		migrationsTransactionMode: 'each',
	};
	if (configModule.projectConfig.database_host) {
		hostConfig = {
			host: configModule.projectConfig.database_host,
			port: configModule.projectConfig.database_port,
			database: configModule.projectConfig.database_database,
			ssl: configModule.projectConfig.database_ssl,
			username: configModule.projectConfig.database_username,
			password: configModule.projectConfig.database_password,
			logging: configModule?.projectConfig.database_logging,
			migrationsTransactionMode: 'each',
		};
	}

	const dataSource = new DataSource({
		type: configModule.projectConfig.database_type as any,
		...hostConfig,
		extra: configModule.projectConfig.database_extra || {},
		migrations: migrationDirs,
	})
	dataSource.initialize()
	const dataSources: DataSource[] = [dataSource];

	if (configModule.multi_tenancy?.enable && !!tenant_codes) {
		const tenantDataSources = await buildTenantsDataSources(tenant_codes, migrationDirs, configModule);
		dataSources.push(...tenantDataSources);
	}

	if (run) {
		await Promise.all(dataSources.map((ds) => runDataSourceAction(ds, 'runMigrations', 'Run')));
	} else if (revert) {
		await Promise.all(
			dataSources.map((ds) => runDataSourceAction(ds, 'undoLastMigration', 'Undo last'))
		);
	} else if (show) {
		await Promise.all(dataSources.map((ds) => runDataSourceAction(ds, 'showMigrations', 'Show')));
	}

	await Promise.all(
		dataSources.map((ds) => {
			return ds.destroy()
		})
	);
}

async function buildTenantsDataSources(
	tenants: string,
	migrationDirs: string[],
	configModule: ConfigModule
): Promise<DataSource[]> {
	const dataSources: DataSource[] = [];
	const tenantConfigMap = new Map<
		string,
		{
			database_type: string;
			database_url: string;
			database_database: string;
			database_extra: Record<string, unknown>;
		}
	>();

	tenants.split(',').forEach((tenantCode) => {
		const regexp = buildRegexpIfValid(tenantCode);
		configModule.multi_tenancy.tenants.forEach((tenantConfig) => {
			if ((regexp && regexp.test(tenantConfig.code)) || tenantCode === tenantConfig.code) {
				tenantConfigMap.set(tenantConfig.code, tenantConfig.database_config);
			}
		});
	});

	for (const [tenantCode, tenantConfig] of [...tenantConfigMap]) {

		const dataSource = new DataSource({
			name: tenantCode,
			type: tenantConfig.database_type as any,
			url: tenantConfig.database_url,
			database: tenantConfig.database_database,
			extra: tenantConfig.database_extra || {},
			logging: ['schema'],
			migrations: migrationDirs,
		})
		dataSource.initialize();
		dataSources.push(
			dataSource
		);
	}

	return dataSources;
}

function runDataSourceAction(dataSource:DataSource, method: keyof DataSource, action: string): Promise<any> {
	return new Promise(async (resolve, reject) => {
		if(dataSource.isInitialized){
		(dataSource[method] as ()=>any).call(dataSource)
			.then(() => {
				logger.log(`${action} migrations has been applied on database connection`, dataSource.name);
				resolve(null);
			})
			.catch((e) => {
				reject(e);
			});
		}
		else{
			reject("Database Uninitialized")
		}
	});
}
