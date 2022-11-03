export const asyncDataWithAsyncFunctionAndAsyncParameter = `		const axios=require('axios').default

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

export const asyncyFunctionWithNonAsyncData = `module.exports = {
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

export const asyncFunctionWithAsyncData = `
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
