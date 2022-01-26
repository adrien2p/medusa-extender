import { middlewaresLoader } from './middlewares.loader';
import { Express } from 'express';
import { AwilixContainer } from 'awilix';
import { GetInjectableOptions } from '../types';

/**
 * @internal
 * Decorate the original api loader to apply our custom middleware first.
 * @param app Express app
 * @param middlewares
 */
export async function apiLoader(app: Express, middlewares: GetInjectableOptions<'middleware'>): Promise<void> {
	const apiLoader = await import('@medusajs/medusa/dist/loaders/api');
	const originalApiLoader = apiLoader.default;
	apiLoader.default = async (cradle: { app: Express; rootDirectory: string; container: AwilixContainer }) => {
		middlewaresLoader(app, cradle.container, middlewares);
		return originalApiLoader(cradle);
	};
}
