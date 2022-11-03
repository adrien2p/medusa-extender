import { unlinkSync, writeFileSync } from 'fs';
import { asyncLoadConfig } from '../async-load-config';
import {
	asyncDataWithAsyncFunctionAndAsyncParameter,
	asyncFunctionWithAsyncData,
	asyncyFunctionWithNonAsyncData,
} from '../fixtures/asyn-load-config-test-fixture';

describe('async load tests', () => {
	it('should aysnc load medusa-config with non-async', async () => {
		const data = asyncyFunctionWithNonAsyncData;

		const pathToConfigFile = `${process.cwd()}/../medusa-config.js`;
		writeFileSync(pathToConfigFile, data);
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		unlinkSync(pathToConfigFile);
	});
});

describe('CLI- Async', () => {
	it('should aysnc load medusa-config with async data', async () => {
		const data = asyncFunctionWithAsyncData;
		const pathToConfigFile = `${process.cwd()}/../medusa-config.js`;
		writeFileSync(pathToConfigFile, data, { encoding: 'utf8', flag: 'w' });
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		expect(configModule.projectConfig.database_database).not.toBeInstanceOf(Promise);
		expect(configModule.projectConfig.database_database.length).toBeGreaterThan(0);
		unlinkSync(pathToConfigFile);
	});
	it('should aysnc load medusa-config with async data with async function', async () => {
		const data = asyncDataWithAsyncFunctionAndAsyncParameter;
		const pathToConfigFile = `${process.cwd()}/../medusa-config.js`;
		writeFileSync(pathToConfigFile, data, { encoding: 'utf8', flag: 'w' });
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		expect(configModule.projectConfig.database_password).not.toBeInstanceOf(Promise);
		expect(configModule.projectConfig.database_database.length).toBeGreaterThan(0);
		unlinkSync(pathToConfigFile);
	});
});
