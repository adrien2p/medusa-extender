import { readFileSync, unlinkSync, writeFileSync } from 'fs';
import { asyncLoadConfig } from '../async-load-config';

const pathToConfigFile = `${process.cwd()}/medusa-config.js`;
const runLoadTest = async (testFixtureFileName: string) => {
	const testProjectConfig = {
		database_database: './medusa-db.sql',
		database_type: 'sqlite',
		database_password: 'password',
		store_cors: 'STORE_CORS',
		admin_cors: 'ADMIN_CORS',
	};
	const fixtureData = readFileSync(`${__dirname}/../fixtures/${testFixtureFileName}.js`);
	writeFileSync(pathToConfigFile, fixtureData);
	const fixture = require.resolve(pathToConfigFile);
	expect(fixture).toBeDefined();
	const configModule = await asyncLoadConfig();
	expect(configModule).toBeDefined();
	expect(configModule.projectConfig).toBeDefined();
	expect(configModule.projectConfig).not.toBeInstanceOf(Promise);
	expect(configModule.projectConfig.database_password).not.toBeInstanceOf(Promise);
	expect(configModule.projectConfig.database_password.length).toBeGreaterThan(0);
	expect(configModule.projectConfig).toMatchObject(testProjectConfig);
	unlinkSync(pathToConfigFile);
};

describe('async load tests', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.clearAllTimers();
	});

	it('should aysnc load medusa-config with non-async', async () => {
		await runLoadTest('default-case-non-async-data');
	});

	it('should aysnc load medusa-config with async data', async () => {
		await runLoadTest('async-parameter');
	});
	it('should aysnc load medusa-config with async function promising non-async data', async () => {
		await runLoadTest('async-function-with-non-async-data');
	});
	it('should aysnc load medusa-config with async function promising async data', async () => {
		await runLoadTest('async-function-with-async-parameter');
	});
});
