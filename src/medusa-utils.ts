import chalk = require('chalk');
import { Express } from 'express';
import { Connection, EntityManager, EntitySubscriberInterface, ObjectType, Repository } from 'typeorm';
import { Constructor } from './types';

/**
 * @internal
 * Utilities helper methods.
 */
export class Utils {
	/**
	 * For repository context, you should extends repository and the medusa target repository.
	 * Since it is not possible to use multiple extend, you can use that utilities to apply multiple extends.
	 * @param derivedCtor
	 * @param baseCtors
	 */
	static repositoryMixin<TEntity, TRepository = ObjectType<Repository<TEntity>>>(
		derivedCtor: TRepository,
		...baseCtors: any[]
	): TRepository {
		baseCtors.forEach((baseCtor) => {
			// Instance members
			Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
				if (name !== 'constructor') {
					(derivedCtor as any).prototype[name] = baseCtor.prototype[name];
				}
			});
		});
		return derivedCtor;
	}

	/**
	 * Attach a new subscriber to a specific entities.
	 * @param connection The database connection
	 * @param Subscriber The subscriber to attach
	 * @param transactionalEntityManager The transactional entity manager to pass the transaction through
	 */
	static attachOrReplaceEntitySubscriber<T extends Constructor<EntitySubscriberInterface<unknown>>>(
		connection: Connection,
		Subscriber: T,
		transactionalEntityManager?: EntityManager
	): void {
		const subscriberIndex = connection.subscribers.findIndex((subscriber: EntitySubscriberInterface) => {
			return subscriber.constructor.name === Subscriber.name;
		});

		const subscriberReplacement = new Subscriber(transactionalEntityManager);
		if (subscriberIndex < 0) {
			connection.subscribers.push(subscriberReplacement);
		} else {
			connection.subscribers.splice(subscriberIndex, 1, subscriberReplacement);
		}
	}

	/**
	 * Log all the routes from the express instance.
	 * @param express Express instance
	 */
	static logRoutes(express: Express): void {
		express._router.stack.forEach(Utils.printRoutes.bind(null, []));
	}

	/**
	 * Prepare the log to be shown to be consistent everywhere.
	 * @param context Where the log comes from
	 * @param description The description of the action logged
	 */
	static prepareLog(context: string, description: string): string {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		return `${chalk.blue(`[Server]      -`)} ${date}   ${chalk.yellow(`[${context}]`)} ${chalk.blue(
			description
		)}`;
	}

	/**
	 * @private
	 * Print all the routes from `path` and `layer` that comes from express.
	 * @param path
	 * @param layer
	 */
	private static printRoutes(path: string[], layer: any) {
		if (layer.route) {
			layer.route.stack.forEach(Utils.printRoutes.bind(null, path.concat(Utils.splitRoutes(layer.route.path))));
		} else if (layer.name === 'router' && layer.handle.stack) {
			layer.handle.stack.forEach(Utils.printRoutes.bind(null, path.concat(Utils.splitRoutes(layer.regexp))));
		} else if (layer.method) {
			const preparedLog = Utils.prepareLog('MedusaLoader', 'Route Mapped {/%s, %s}');
			console.log(
				preparedLog,
				path.concat(Utils.splitRoutes(layer.regexp)).filter(Boolean).join('/'),
				layer.method.toUpperCase()
			);
		}
	}

	/**
	 * @private
	 * Split the routes contained in express.
	 * @param thing
	 */
	private static splitRoutes(thing: string | (RegExp & { fast_slash: boolean })) {
		if (typeof thing === 'string') {
			return thing.split('/');
		} else if (thing.fast_slash) {
			return '';
		} else {
			const match = thing
				.toString()
				.replace('\\/?', '')
				.replace('(?=\\/|$)', '$')
				.match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
			return match ? match[1].replace(/\\(.)/g, '$1').split('/') : '<complex:' + thing.toString() + '>';
		}
	}
}
