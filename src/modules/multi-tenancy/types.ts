import { LoggerOptions } from 'typeorm';
import { MedusaRequest } from '../../core';

export type ConfigModule = Record<string, unknown> & {
	multiTenancy?: MultiTenancyOptions;
	projectConfig: { database_logging?: LoggerOptions };
};

export interface MultiTenancyOptions {
	enable: boolean;
	tenantCodeResolver: (req: MedusaRequest) => string;
}
