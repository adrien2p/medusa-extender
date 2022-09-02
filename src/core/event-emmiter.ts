import { EventEmitter } from 'events';
import { GetInjectableOption, Type } from './types';
import { componentsMetadataReader } from './metadata-reader';
import { lowerCaseFirst } from './utils';
import { AwilixContainer } from 'awilix';

const EVENT_HANDLER_PROPERTY_NAME = '__medusa_extender_name__';

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
class CustomEventEmitter extends EventEmitter {
	#listeners: Map<string | symbol, ListenerDescriptor[]> = new Map();

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
		const listenerDescriptors = this.#listeners.get(descriptor.eventName) || [];
		listenerDescriptors.push(descriptor);
		this.#listeners.set(eventName, listenerDescriptors);
	}

	/**
	 * Apply all event handlers hold by the `listenerDescriptors`.
	 * Only unregister and register again non singleton based event listeners.
	 * No duplicate listener can exist on one handler.
	 * @param container The IoC container that allow to resolve instance
	 */
	public registerListeners(container: AwilixContainer): void {
		for (const [, listenerDescriptors] of [...this.#listeners]) {
			for (const listenerDescriptor of listenerDescriptors) {
				const { eventName, metatype, propertyName } = listenerDescriptor;
				const serviceOptions = componentsMetadataReader<'service'>(
					metatype as Type
				) as GetInjectableOption<'service'>;
				const { resolutionKey, scope } = serviceOptions;

				let metatypeInstance: Pick<GetInjectableOption<'service'>, 'metatype'>;
				if (resolutionKey) {
					metatypeInstance = container.resolve(resolutionKey);
				} else {
					const metatypeName = metatype.name;
					const formattedMetatypeName = lowerCaseFirst(metatypeName);
					metatypeInstance = container.resolve(`${formattedMetatypeName}`);
				}

				const listenerHandler = metatypeInstance[propertyName].bind(metatypeInstance);
				const listenerHandlerName = `${eventName.toString()}${metatype.name}${propertyName}`;
				Object.defineProperty(listenerHandler, EVENT_HANDLER_PROPERTY_NAME, { value: listenerHandlerName });

				const alreadyRegisteredListenerHandlerIndex = this.rawListeners(eventName).findIndex(
					(rawListenerHandler) => rawListenerHandler[EVENT_HANDLER_PROPERTY_NAME] === listenerHandlerName
				);

				if ((!scope || scope === 'SINGLETON') && alreadyRegisteredListenerHandlerIndex !== -1) continue;

				if (alreadyRegisteredListenerHandlerIndex !== -1) {
					this.removeListener(
						eventName,
						this.rawListeners(eventName)[alreadyRegisteredListenerHandlerIndex] as (
							...args: unknown[]
						) => void
					);
				}

				this.on(eventName, listenerHandler);
			}
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
export const customEventEmitter = new CustomEventEmitter();
