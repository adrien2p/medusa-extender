import { Express } from 'express';
import { medusaMiddlewareRepository } from '../medusa-middleware.repository';
import { Utils } from '../medusa-utils';
import { AwilixContainer } from 'awilix';
import MiddlewareService from '@medusajs/medusa/dist/services/middleware';

/**
 * @internal
 * Register custom middlewares into the middlewareRegistery.
 * @param middlewares Any custom middlewares that implements MedusaMiddleware
 * @param container
 */
export function middlewaresLoader(app: Express, container: AwilixContainer): void {
	const medusaMiddlewareService = container.resolve('middlewareService') as MiddlewareService;
	for (const Middleware of medusaMiddlewareRepository.get('preAuth')) {
		const middleware = new Middleware();
		medusaMiddlewareService.addPreAuthentication(middleware.consume, { app });
		const log = Utils.prepareLog(
			'MedusaLoader#middlewaresLoader',
			`Middleware registered before auth - ${Middleware.name}`
		);
		console.log(log);
	}

	for (const Middleware of medusaMiddlewareRepository.get('postAuth')) {
		const middleware = new Middleware();
		medusaMiddlewareService.addPostAuthentication(middleware.consume, { app });
		const log = Utils.prepareLog(
			'MedusaLoader#middlewaresLoader',
			`Middleware registered after auth - ${Middleware.name}`
		);
		console.log(log);
	}

	// TODO: Manage middleware not handled by medusa internal (if necessary)
}
