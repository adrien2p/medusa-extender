import { LoggerOptions } from 'typeorm';
import { MedusaRequest } from '../../core';

export type ConfigModule = Record<string, unknown> & {
	multiTenancy?: MultiTenancyConfig;
	projectConfig: { database_logging?: LoggerOptions };
};

export type MultiTenancyConfig = {
	enable: boolean;
	tenantCodeResolver: (req: MedusaRequest) => string;
};
