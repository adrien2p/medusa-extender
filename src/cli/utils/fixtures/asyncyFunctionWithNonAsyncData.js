module.exports = {
    projectConfig: {
      // redis_url: REDIS_URL,
      // For more production-like environment install PostgresQL
      // database_url: DATABASE_URL,
      // database_type: "postgres",
      database_database: "./medusa-db.sql",
      database_type: "sqlite",
      database_password:"password",
      store_cors: "STORE_CORS",
      admin_cors: "ADMIN_CORS",
    },
    plugins:[],
  };