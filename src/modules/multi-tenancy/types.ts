import { LoggerOptions } from 'typeorm';
import { MedusaRequest } from '../../core';

export type ConfigModule = Record<string, unknown> & {
	multiTenancy?: MultiTenancyOptions;
	projectConfig: { database_logging?: LoggerOptions };
};

export interface Tenant{
	code: string;
	database_url: string;
	database_type: string;
	database_database?: string;
	database_extra?: object;

}

export interface MultiTenancyOptions {
	enable: boolean;
	tenantCodeResolver: (req: MedusaRequest) => string;
	tenants?:Array<Tenant>
}
