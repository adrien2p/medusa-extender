import { EventEmitter } from 'events';
import { GetInjectableOption, Type } from './types';
import { componentsMetadataReader } from './metadata-reader';
import { lowerCaseFirst } from './utils';
import { AwilixContainer } from 'awilix';

/**
 * A listener descriptor.
 */
type ListenerDescriptor<T = unknown> = {
	eventName: string | symbol;
	propertyName: string;
	metatype: Type<T>;
};

/**
 * Extended event emitter to register methods that must be call when certain events are triggered and relay the handling to the API package
 */
class CustomEventEmmiter extends EventEmitter {
	#listeners: Set<ListenerDescriptor> = new Set();

	constructor() {
		super();
	}

	/**
	 * Register a new event handler.
	 * @param eventName The name of the event that has to be triggered
	 * @param propertyName The name of the class property that will handle the event
	 * @param metatype The object that contains the property above
	 */
	public register<T>(eventName: string | symbol, propertyName: string, metatype: Type<T>): void {
		const descriptor = { eventName, propertyName, metatype };
		if (this.#listeners.has(descriptor)) {
			return;
		}
		this.#listeners.add(descriptor);
	}

	/**
	 * Apply all event handlers hold by the `listenerDescriptor`.
	 * @param container The IoC container that allow to resolve instance
	 */
	public registerListeners(container: AwilixContainer): void {
		this.unregisterListeners();

		for (const listenerDescriptor of this.#listeners.values()) {
			const { eventName, metatype, propertyName } = listenerDescriptor;
			const serviceOptions = componentsMetadataReader<'service'>(
				metatype as Type
			) as GetInjectableOption<'service'>;
			const { resolutionKey } = serviceOptions;

			let metatypeInstance: Pick<GetInjectableOption<'service'>, 'metatype'>;
			if (resolutionKey) {
				metatypeInstance = container.resolve(resolutionKey);
			} else {
				const metatypeName = metatype.name;
				const formattedMetatypeName = lowerCaseFirst(metatypeName);
				metatypeInstance = container.resolve(`${formattedMetatypeName}`);
			}

			this.on(eventName, metatypeInstance[propertyName].bind(metatypeInstance));
		}
	}

	public unregisterListeners(): void {
		for (const listenerDescriptor of this.#listeners.values()) {
			const { eventName } = listenerDescriptor;
			this.removeAllListeners(eventName);
		}
	}

	/**
	 * Emit an asynchrone event entity based and wait for the result.
	 * @param eventName The event that must be triggered
	 * @param values The data that are passed to the event handler
	 */
	public async emitAsync<T>(eventName: string | symbol, values: Record<string, unknown>): Promise<T | never> {
		const eventListenerCount = this.listenerCount(eventName);
		if (!eventListenerCount) {
			return Promise.resolve(null);
		}

		return new Promise((resolve, reject) => {
			this.emit(eventName, {
				values,
				resolveOrReject: (err?: Error, res?: T) => {
					if (err) return reject(err);
					return resolve(res);
				},
			});
		});
	}
}

/**
 * @internal
 * Export the instance of the event emmiter.
 */
export const customEventEmitter = new CustomEventEmmiter();
