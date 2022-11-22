import { Express, NextFunction, Response } from 'express';
import { MedusaAuthenticatedRequest, MedusaContainer, MedusaRequest } from './';
import { customEventEmitter, GetInjectableOptions } from '../core';
import { registerProviders } from './providers.loader';

/**
 * @internal
 * Register all listeners before the plugins are loaded to be sure that the scope middleware has already been created.
 * Also register all providers that are typically created in plugins.
 * @param app Express app
 */
export async function pluginsLoadersProvidersAndListeners(
	app: Express,
	providers: GetInjectableOptions<'provider'>
): Promise<void> {
	const pluginLoader = await import('@medusajs/medusa/dist/loaders/plugins');
	const originalPluginLoader = pluginLoader.default;
	pluginLoader.default = async (cradle: {
		app: Express;
		rootDirectory: string;
		container: MedusaContainer;
		activityId: string;
		configModule: Record<string, unknown>;
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

		await originalPluginLoader(cradle as any);
		await registerProviders(cradle.container, providers, cradle.configModule);
	};
}
