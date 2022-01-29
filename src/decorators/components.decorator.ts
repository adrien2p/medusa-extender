import {
	EntityInjectableOptions,
	MiddlewareInjectionOptions,
	RepositoryInjectableOptions,
	RouterInjectionOptions,
	ServiceInjectableOptions,
	buildComponentDecorator,
} from './';

/**
 * Mark a class as an entity to be used by the loader.
 * @param options
 * @constructor
 */
export function Entity<T = unknown>(options: EntityInjectableOptions<T>): ClassDecorator {
	return buildComponentDecorator({ type: 'entity', ...options });
}

/**
 * Mark a class as a service to be used by the loader.
 * @param options
 * @constructor
 */
export function Service<T = unknown>(options: ServiceInjectableOptions<T>): ClassDecorator {
	return buildComponentDecorator({ type: 'service', ...options });
}

/**
 * Mark a class as a repository to be used by the loader.
 * @param options
 * @constructor
 */
export function Repository<T = unknown>(options: RepositoryInjectableOptions<T>): ClassDecorator {
	return buildComponentDecorator({ type: 'repository', ...options });
}

/**
 * Mark a class as a middleware to be used by the loader.
 * @param options
 * @constructor
 */
export function Middleware(options: MiddlewareInjectionOptions): ClassDecorator {
	return buildComponentDecorator({ type: 'middleware', ...options });
}

/**
 * Mark a class as a migration to be used by the loader.
 * @constructor
 */
export function Migration(): ClassDecorator {
	return buildComponentDecorator({ type: 'migration' });
}

/**
 * Mark a class as a router to be used by the loader.
 * @param options
 * @constructor
 */
export function Router(options: RouterInjectionOptions): ClassDecorator {
	return buildComponentDecorator({ type: 'router', ...options });
}
