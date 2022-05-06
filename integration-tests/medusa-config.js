require('dotenv').config()

const DB_PASSWORD = process.env.DB_PASSWORD ?? ''
const DB_USER = process.env.DB_USER ?? 'postgres'
const DB_HOST = process.env.DB_HOST ?? 'localhost'
const DB_PORT = process.env.DB_PORT ?? 5432

module.exports = {
	projectConfig: {
		jwtSecret: "supersecret",
		cookieSecret: "supersecret",

		database_url: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/medusa-extender`,
		database_type: 'postgres'
	},
	plugins: [],
};
