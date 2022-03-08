import { Express, NextFunction, Response } from 'express';
import { AwilixContainer } from 'awilix';
import { MedusaAuthenticatedRequest, MedusaRequest } from './';
import { customEventEmitter } from '../core/event-emmiter';

/**
 * @internal
 * Register all listeners before the plugins are loaded to be sure that the scope middleware has already been created.
 * @param app Express app
 */
export async function pluginsLoadersAndListeners(app: Express): Promise<void> {
	const pluginLoader = await import('@medusajs/medusa/dist/loaders/plugins');
	const originalPluginLoader = pluginLoader.default;
	pluginLoader.default = async (cradle: {
		app: Express;
		rootDirectory: string;
		container: AwilixContainer;
		activityId: string;
	}) => {
		app.use(
			async (
				req: MedusaRequest | MedusaAuthenticatedRequest,
				res: Response,
				next: NextFunction
			): Promise<void> => {
				await customEventEmitter.registerListeners(req.scope);
				return next();
			}
		);

		return originalPluginLoader(cradle);
	};
}
