import express = require('express');
const config = require('../medusa-config');
import { Medusa } from 'medusa-extender';
import { resolve } from 'path';
import { UserModule } from './modules/user/user.module';

async function bootstrap() {
	const expressInstance = express();

	await new Medusa(resolve(__dirname, '..'), expressInstance).load([UserModule]);

	expressInstance.listen(config.serverConfig.port, () => {
		console.info('Server successfully started on port ' + config.serverConfig.port);
	});
}

bootstrap();
