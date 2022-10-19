import { createConnection, LoggerOptions } from 'typeorm';
import { getConfigFile } from 'medusa-core-utils/dist';
import { normalize, resolve } from 'path';
import { MultiTenancyOptions } from '../../modules/multi-tenancy/types';
import { Connection } from 'typeorm/connection/Connection';
import { buildRegexpIfValid, Logger } from '../../core';
export type DatabaseTlsOptions = {
	ca: string | undefined;
	rejectUnauthorized: boolean | undefined;
};

type ConfigModule = {
	projectConfig: {
		database_host: string;
		database_port: number;
		database_ssl?: DatabaseTlsOptions;
		database_username: string;
		database_password: string | (() => string) | (() => Promise<string>);
		database_type: string;
		database_url: string;
		database_database: string;
		database_logging?: LoggerOptions;
		database_extra: Record<string, string>;
		cli_migration_dirs?: string[];
		/**
		 * @deprecated in favor of cli_migration_dirs
		 */
		cliMigrationsDirs?: string[];
	};
	multi_tenancy?: MultiTenancyOptions;
};

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
	//const { configModule } = getConfigFile(process.cwd(), `medusa-config`) as { configModule: ConfigModule };
	const configuration = getConfigFile(process.cwd(), `medusa-config`) as {
		configModule: ConfigModule;
		configFilePath: string;
	};
	const resolveConfigProperties = async (obj): Promise<ConfigModule> => {
		for (const key of Object.keys(obj)) {
			if (typeof obj[key] === 'object' && obj[key] !== null) {
				await resolveConfigProperties(obj[key]);
			}
			if (typeof obj[key] === 'function') {
				obj[key] = await obj[key]();
			}
		}
		return obj;
	};
	const configModule = await resolveConfigProperties(configuration.configModule);
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
		};
	}

	const connections: Connection[] = [
		await createConnection({
			type: configModule.projectConfig.database_type as any,
			...hostConfig,
			extra: configModule.projectConfig.database_extra || {},
			migrations: migrationDirs,
		}),
	];

	if (configModule.multi_tenancy?.enable && !!tenant_codes) {
		const tenantConnections = await buildTenantsConnections(tenant_codes, migrationDirs, configModule);
		connections.push(...tenantConnections);
	}

	if (run) {
		await Promise.all(connections.map((connection) => runConnectionAction(connection, 'runMigrations', 'Run')));
	} else if (revert) {
		await Promise.all(
			connections.map((connection) => runConnectionAction(connection, 'undoLastMigration', 'Undo last'))
		);
	} else if (show) {
		await Promise.all(connections.map((connection) => runConnectionAction(connection, 'showMigrations', 'Show')));
	}

	await Promise.all(
		connections.map((connection) => {
			return connection.close();
		})
	);
}

async function buildTenantsConnections(
	tenants: string,
	migrationDirs: string[],
	configModule: ConfigModule
): Promise<Connection[]> {
	const connections: Connection[] = [];
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
		connections.push(
			await createConnection({
				name: tenantCode,
				type: tenantConfig.database_type as any,
				url: tenantConfig.database_url,
				database: tenantConfig.database_database,
				extra: tenantConfig.database_extra || {},
				logging: ['schema'],
				migrations: migrationDirs,
			})
		);
	}

	return connections;
}

function runConnectionAction(connection, methods: keyof Connection, action: string): Promise<any> {
	return new Promise(async (resolve, reject) => {
		await connection[methods]()
			.then(() => {
				logger.log(`${action} migrations has been applied on database connection`, connection.name);
				resolve(null);
			})
			.catch((e) => {
				reject(e);
			});
	});
}
