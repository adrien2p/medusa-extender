import * as dotenv from 'dotenv';

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
	case 'prod':
		ENV_FILE_NAME = '.env';
		break;
	case 'test':
		ENV_FILE_NAME = '.env.test';
		break;
	default:
		ENV_FILE_NAME = '.env';
		break;
}

dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const PORT = process.env.PORT || 3000;
const ADMIN_CORS = process.env.ADMIN_CORS || '';
const STORE_CORS = process.env.STORE_CORS || '';

const plugins = [
	`medusa-fulfillment-manual`,
	`medusa-payment-manual`,
];

module.exports = {
	serverConfig: {
		port: PORT,
	},
	projectConfig: {
		// redis_url: REDIS_URL,
		// For more production-like environment install PostgresQL
		jwtSecret: process.env.JWT_SECRET,
		cookieSecret: process.env.COOKIE_SECRET,

		database_url: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/medusa`,
		database_type: 'postgres',
		store_cors: STORE_CORS,
		admin_cors: ADMIN_CORS,
		redis_url: REDIS_URL,
	},
	plugins,
};
