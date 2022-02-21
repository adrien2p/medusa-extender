import express = require('express');
import config = require('./medusa-config');
import { Medusa } from 'medusa-extender';
import { resolve } from 'path';
import { UserModule } from '@modules/user/user.module';

async function bootstrap() {
	const expressInstance = express();

	const rootDir = resolve(__dirname);
	await new Medusa(rootDir, expressInstance).load([
		UserModule
	]);

	expressInstance.listen(config.serverConfig.port, () => {
		console.info('Server successfully started on port ' + config.serverConfig.port);
	});
}

bootstrap();
