require('dotenv').config();

const DB_PASSWORD = process.env.DB_PASSWORD ?? '';
const DB_USER = process.env.DB_USER ?? 'postgres';
const DB_HOST = process.env.DB_HOST ?? 'localhost';
const DB_PORT = process.env.DB_PORT ?? 5432;

const isCI = !!process.env.IS_CI;

const DB_URL = isCI
	? `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/medusa-extender`
	: `postgres://${DB_USER}@${DB_HOST}:${DB_PORT}/medusa-extender`;

const plugins = [
	`medusa-fulfillment-manual`,
	`medusa-payment-manual`,
];

module.exports = {
	projectConfig: {
		jwtSecret: 'supersecret',
		cookieSecret: 'supersecret',
		jwt_secret: 'supersecret',
		cookie_secret: 'supersecret',

		database_url: DB_URL,
		database_type: 'postgres',
	},
	plugins
};
