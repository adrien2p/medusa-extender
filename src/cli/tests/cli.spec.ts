import * as path from 'path';
import { exec, ExecException } from 'child_process';
import { normalizeString } from './__utils__/normalizeString';
import { asyncLoadConfig } from '../utils/async-load-config';
import { unlinkSync, writeFileSync } from 'fs';
import { stringify } from 'querystring';

function cli(args, cwd): Promise<{ code: number; error: ExecException; stdout: string; stderr: string }> {
	return new Promise((resolve) => {
		exec(
			`${process.cwd()}/node_modules/.bin/ts-node ${path.resolve(__dirname, '../index.ts')} ${args.join(' ')}`,
			{ cwd },
			(error, stdout, stderr) => {
				resolve({
					code: error && error.code ? error.code : 0,
					error: error as ExecException,
					stdout,
					stderr,
				});
			}
		);
	});
}

describe('CLI', () => {
	it('should failed on missing command', async () => {
		const { error, stderr } = await cli([''], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
			Usage: medex [options] [command]

			Medusa extender CLI
			
			Options:
				-V, --version               output the version number
				-h, --help                  display help for command
			
			Commands:
				migrate|m [options] 							        Migrate all migrations found in the specified directories in the configuration
				generate|g [options] <name> 							Generate a new component
			  init|-i                     							Update your existing medusa project to include the necessary configuration to use the medusa-extender package
				help [command]              							display help for command
        `)
		);
	});

	it('should failed on generate command with missing options', async () => {
		const { error, stderr } = await cli(['generate name'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
            You must specify one of the options.
            
            Usage: medex generate|g [options] <name>
            
            Generate a new component
            
            Arguments:
              name               specify the name of the component(s) to create
            
            Options:
              -m, --module       Generate a new module
              -md, --middleware  Generate a new middleware
              -s, --service      Generate a new service
              -r, --router       Generate a new router
              -e, --entity       Generate a new entity
              -re, --repository  Generate a new repository
              -mi, --migration   Generate a new migration
              -va, --validator   Generate a new validator
              -p, --path <path>  specify the path where the component must be generated (by default the component will be generated at [src/modules/<name>/<name>.<type>.ts]
              -h, --help         display help for command
        `)
		);
	});

	it('should failed on generate command with missing argument', async () => {
		const { error, stderr } = await cli(['generate -m'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(normalizeString("error: missing required argument 'name'"));
	});

	it('should failed on migrate command with missing options', async () => {
		const { error, stderr } = await cli(['migrate "tenant1"'], '.');
		expect(error.code).toBe(1);
		expect(normalizeString(stderr)).toBe(
			normalizeString(`
				You must specify one of the options.

				Usage: medex migrate|m [options]
				
				Migrate all migrations found in the specified directories in the configuration
				
				Options:
					-r, --run     								Run migrations up method
					-u, --revert								  Revert the last migrations
					-s, --show    								Show all applied and non applied migrations
					-t, --tenant_codes [codes]    Specify on which tenant to run the command for. It can be composed of a mix of string or regexp that are comma separated (e.g "tenant1,/specialTenant.*/")
					-h, --help								    display help for command
        `)
		);
	});

	it('should aysnc load medusa-config with non-async', async () => {
		const data = `
			module.exports = {
				projectConfig: {
				  // redis_url: REDIS_URL,
				  // For more production-like environment install PostgresQL
				  // database_url: DATABASE_URL,
				  // database_type: "postgres",
				  database_database: "./medusa-db.sql",
				  database_type: "sqlite",
				  store_cors: "STORE_CORS",
				  admin_cors: "ADMIN_CORS",
				},
				plugins:[],
			  };`;

		const pathToConfigFile = `${process.cwd()}/medusa-config.js`;
		writeFileSync(pathToConfigFile, data);
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		unlinkSync(pathToConfigFile);
	});
});

describe('CLI- Async', () => {
	it('should aysnc load medusa-config with async data', async () => {
		const data = `
		const axios=require('axios').default
		async function asyncConfig(){

			return {
				projectConfig: {
				// redis_url: REDIS_URL,
				// For more production-like environment install PostgresQL
				// database_url: DATABASE_URL,
				// database_type: "postgres",
				database_type: "sqlite",
				database_database: "dummy",
				admin_cors: "ADMIN_CORS",
			  },
			  plugins:[],
			}

		}
		async function configureBackend() {
			return await asyncConfig() ;
		  }
		  
		  module.exports = configureBackend();`;
		const pathToConfigFile = `${process.cwd()}/medusa-config.js`;
		writeFileSync(pathToConfigFile, data, { encoding: 'utf8', flag: 'w' });
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		expect(configModule.projectConfig.database_database).not.toBeInstanceOf(Promise);
		expect(configModule.projectConfig.database_database.length).toBeGreaterThan(0);
		unlinkSync(pathToConfigFile);
	});
	it('should aysnc load medusa-config with async data with async function', async () => {
		const data = `
		const axios=require('axios').default

		async function password(){

			return Promise.resolve("test");
		}

		async function asyncConfig(){

			return {
				projectConfig: {
				// redis_url: REDIS_URL,
				// For more production-like environment install PostgresQL
				// database_url: DATABASE_URL,
				// database_type: "postgres",
				database_type: "sqlite",
				database_database: "dummy",
				admin_cors: "ADMIN_CORS",
				database_password:password
			  },
			  plugins:[],
			}

		}
		async function configureBackend() {
			return await asyncConfig() ;
		  }
		  
		  module.exports = configureBackend();`;
		const pathToConfigFile = `${process.cwd()}/medusa-config.js`;
		writeFileSync(pathToConfigFile, data, { encoding: 'utf8', flag: 'w' });
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		expect(configModule.projectConfig.database_password).not.toBeInstanceOf(Promise);
		expect(configModule.projectConfig.database_database.length).toBeGreaterThan(0);
		unlinkSync(pathToConfigFile);
	});
});

describe('CLI- Async', () => {
	it('should aysnc load medusa-config with async data', async () => {
		const data = `
		const axios=require('axios').default
		async function asyncConfig(){

			return {
				projectConfig: {
				// redis_url: REDIS_URL,
				// For more production-like environment install PostgresQL
				// database_url: DATABASE_URL,
				// database_type: "postgres",
				database_type: "sqlite",
				database_database: "dummy",
				admin_cors: "ADMIN_CORS",
			  },
			  plugins:[],
			}

		}
		async function configureBackend() {
			return await asyncConfig() ;
		  }
		  
		  module.exports = configureBackend();`;
		const pathToConfigFile = `${process.cwd()}/medusa-config.js`;
		writeFileSync(pathToConfigFile, data, { encoding: 'utf8', flag: 'w' });
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		expect(configModule.projectConfig.database_database).not.toBeInstanceOf(Promise);
		expect(configModule.projectConfig.database_database.length).toBeGreaterThan(0);
		unlinkSync(pathToConfigFile);
	});
	it('should aysnc load medusa-config with async data with async function', async () => {
		const data = `
		const axios=require('axios').default

		async function password(){

			return Promise.resolve("test");
		}

		async function asyncConfig(){

			return {
				projectConfig: {
				// redis_url: REDIS_URL,
				// For more production-like environment install PostgresQL
				// database_url: DATABASE_URL,
				// database_type: "postgres",
				database_type: "sqlite",
				database_database: "dummy",
				admin_cors: "ADMIN_CORS",
				database_password:password
			  },
			  plugins:[],
			}

		}
		async function configureBackend() {
			return await asyncConfig() ;
		  }
		  
		  module.exports = configureBackend();`;
		const pathToConfigFile = `${process.cwd()}/medusa-config.js`;
		writeFileSync(pathToConfigFile, data, { encoding: 'utf8', flag: 'w' });
		const configModule = await asyncLoadConfig();
		expect(configModule).toBeDefined();
		expect(configModule.projectConfig).toBeDefined;
		expect(configModule.projectConfig.database_password).not.toBeInstanceOf(Promise);
		expect(configModule.projectConfig.database_database.length).toBeGreaterThan(0);
		unlinkSync(pathToConfigFile);
	});
});
