import { middlewaresLoader } from './middlewares.loader';
import { Express } from 'express';
import { AwilixContainer } from 'awilix';

/**
 * @internal
 * Decorate the original api loader to apply our custom middleware first.
 * @param app Express app
 */
export async function apiLoader(app: Express): Promise<void> {
	const apiLoader = await import('@medusajs/medusa/dist/loaders/api');
	const originalApiLoader = apiLoader.default;
	apiLoader.default = async (cradle: { app: Express; rootDirectory: string; container: AwilixContainer }) => {
		middlewaresLoader(app, cradle.container);
		return originalApiLoader(cradle);
	};
}
