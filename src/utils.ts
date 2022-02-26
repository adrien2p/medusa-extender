/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');
import { Express } from 'express';
import * as getEndpoints from 'express-list-endpoints';
import { Connection, EntityManager, EntitySubscriberInterface, Repository } from 'typeorm';
import { Constructor, MixinReturnType } from './types';

/**
 * @internal
 * Utilities helper methods.
 */
export class Utils {
	static logs: string[][] = [];

	/**
	 * For repository context, you should extends repository and the medusa target repository.
	 * Since it is not possible to use multiple extend, you can use that utilities to apply multiple extends.
	 * @param source
	 */
	static repositoryMixin<TEntity, TSource>(
		source: Constructor<TSource>
	): MixinReturnType<Repository<TEntity>, TSource> {
		const klass = class Base extends Repository<TEntity> {};

		Object.getOwnPropertyNames(source.prototype).forEach((name) => {
			if (name !== 'constructor' && !klass.hasOwnProperty(name)) {
				Object.defineProperty(klass.prototype, name, Object.getOwnPropertyDescriptor(source.prototype, name));
			}
		});

		return klass as MixinReturnType<Repository<TEntity>, TSource>;
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
	 * @internal
	 * Prepare the log to be shown to be consistent everywhere.
	 * @param context Where the log comes from
	 * @param description The description of the action logged
	 * @param variables The variable that populate the logs
	 */
	static hydrateLog(context: string, description: string, ...variables: string[]): void {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		this.logs.push([
			`${chalk.blue(`[Server]      -`)} ${date}   ${chalk.yellow(`[${context}]`)} ${chalk.blue(description)}`,
			...variables,
		]);
	}

	/**
	 * @internal
	 * Prepare the logs the show all available routes on the app.
	 * @param app
	 */
	static hydrateRouteLog(app: Express): void {
		const endPoints = getEndpoints(app);
		for (const endPoint of endPoints) {
			endPoint.methods.map((method) => {
				this.hydrateLog('MedusaLoader', 'Route Mapped {/%s, %s}', endPoint.path, method);
			});
		}
	}

	/**
	 * @internal
	 * Display the logs that has been registered during the build time.
	 */
	static displayLogs() {
		if (this.logs.length) {
			this.logs.map((logArgs) => {
				console.log(...logArgs);
			});
			this.logs.length = 0;
		}
	}
}
