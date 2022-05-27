import { Express, NextFunction, Response } from 'express';
import { MedusaAuthenticatedRequest, MedusaContainer, MedusaRequest } from './';
import { customEventEmitter } from '../core';

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
		container: MedusaContainer;
		activityId: string;
	}) => {
		app.use(
			async (
				req: MedusaRequest | MedusaAuthenticatedRequest,
				res: Response,
				next: NextFunction
			): Promise<void> => {
				req.container = cradle.container;
				await customEventEmitter.registerListeners(req.scope);
				return next();
			}
		);

		return originalPluginLoader(cradle as any);
	};
}
