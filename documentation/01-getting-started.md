# Getting started :rocket:

Depending on your situation, pick the right getting started section.

## Existing medusa project

In that case, you must already have scaffold a new medusa store project. If that's not the case you can [follow the tutorial here](https://docs.medusajs.com/quickstart/quick-start).

Run the following command in your terminal (The last version is {{ pkg.version }})

```bash
npm install {{ pkg.name }}
./node_modules/.bin/medex init
```

That's it, you are now ready to run your server :rocket:

Note: If you want to run the server on a custom port update medusa-config.js as follows:

```
module.exports = {
  projectConfig: {
    // redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    // database_url: DATABASE_URL,
    // database_type: "postgres",
    database_database: "./medusa-db.sql",
    database_type: "sqlite",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  serverConfig:{
	  port: <PORT_NUMBER>
  }
  plugins,
};

```

## From server starter

You can directly clone the `starters/server` to get started quickly.

First, update your `medusa-config.js` accordingly to your needs.

Then, follow the next command to be ready in minutes

```bash
npx degit github:adrien2p/medusa-extender/starters/server#main server
cd server
npm i
npm run build
npm run start
```

That's it, your server is now up and running :rocket:
