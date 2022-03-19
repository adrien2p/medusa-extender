import { LoggerOptions } from 'typeorm';

export type ConfigModule = Record<string, unknown> & {
	multiTenancy: MultiTenancyConfig;
	projectConfig: { database_logging?: LoggerOptions };
};

export type MultiTenancyConfig = {
	enable: boolean;
	pathToReqProperties: string[];
};
