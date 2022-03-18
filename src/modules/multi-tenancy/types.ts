import { LoggerOptions } from 'typeorm';

export type ConfigModule = {
	multiTenancy: MultiTenancyConfig;
	projectConfig: { database_logging?: LoggerOptions };
};

export type MultiTenancyConfig = {
	enable: boolean;
	pathToReqProperties: string[];
};
