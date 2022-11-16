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
        database_password:"password"
      },
      plugins:[],
    }

}
async function configureBackend() {
    return await asyncConfig() ;
  }
  
  module.exports = configureBackend();