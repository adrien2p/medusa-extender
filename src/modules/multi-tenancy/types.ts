import { LoggerOptions } from 'typeorm';
import { MedusaRequest } from '../../core';
import { MonitoringOptions } from '../monitoring';

export type ConfigModule = Record<string, unknown> & {
	multi_tenancy?: MultiTenancyOptions;
	projectConfig: { database_logging?: LoggerOptions };
	monitoring?: MonitoringOptions;			
};

export interface MultiTenancyOptions {
	enable: boolean;
	tenant_code_resolver: (req: MedusaRequest) => string;
	tenants: {
		code: string;
		database_config: {
			database_type: string;
			database_url: string;
			database_database: string;
			database_extra: Record<string, unknown>;
		};
	}[];
}
