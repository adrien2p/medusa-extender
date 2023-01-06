import { NextFunction, Request, Response } from 'express';
import { AwilixContainer, LifetimeType } from 'awilix';
import { LoggerOptions, MigrationInterface } from 'typeorm';
import { MultiTenancyOptions } from 'modules/multi-tenancy/types';

export interface Type<T = unknown> extends Function {
	new (...args: unknown[]): T;
}

export type Constructor<T> = new (...args: unknown[]) => T;

export type InjectableProviderSubTypes = 'tax' | 'fulfillment' | 'notification' | 'payment';

/**
 * Components that does not required any other options that Type.
 */
export type InjectableComponentTypes =
	| 'validator'
	| 'entity'
	| 'repository'
	| 'service'
	| 'migration'
	| 'router'
	| 'middleware'
	| 'subscriber'
	| 'provider';

/**
 * Defines the injection options for entities.
 */
export type EntityInjectableOptions<TOverride = unknown> = {
	/**
	 * @deprecated since v1.6.1
	 */
	resolutionKey?: string;
	override?: Type<TOverride>;
};

export type ProviderInjectableOptions = { subtype?: InjectableProviderSubTypes };

/**
 * Defines the injection options for service.
 */
export type ServiceInjectableOptions<TOverride = unknown> = {
	scope?: LifetimeType;
	/**
	 * @deprecated since v1.6.1
	 */
	resolutionKey?: string;
	override?: Type<TOverride>;
};

/**
 * Defines the injection options for services, entities, repositories.
 */
export type RepositoryInjectableOptions<TOverride = unknown> = {
	/**
	 * @deprecated since v1.6.1
	 */
	resolutionKey?: string;
	override?: Type<TOverride>;
};

/**
 * Define a router and its configuration.
 */
export type RoutesInjectionRouterConfiguration = {
	requiredAuth?: boolean;
	method: MedusaRouteMethods;
	path: string;
	handlers: ((...args: unknown[]) => void)[];
};

/**
 * Defines the injection options for routes.
 */
export type RouterInjectionOptions = {
	routes: RoutesInjectionRouterConfiguration[];
};

/**
 * Defines the injection options for middlewares.
 */
export type MiddlewareInjectionOptions = {
	/**
	 * @deprecated use requiredAuth instead
	 */
	requireAuth?: boolean;
	requiredAuth?: boolean;
	routes: MedusaRouteOptions[];
};

/**
 * Defines the injection options for routes.
 */
export type ValidatorInjectionOptions<TOverride = unknown> = {
	override: Type<TOverride>;
};

/**
 * Defines the injection options for subscribers.
 */
export type SubscriberInjectionOptions = Record<string, unknown>;

/**
 * Defines the injection options for routes.
 */
export type ModuleInjectionOptions<T = unknown> = {
	imports: Type<T>[];
};

/**
 * Union of all options type possible for injectable.
 */
export type InjectableOptions<T = unknown> =
	| EntityInjectableOptions<T>
	| ServiceInjectableOptions<T>
	| RepositoryInjectableOptions<T>
	| MiddlewareInjectionOptions
	| RouterInjectionOptions
	| ValidatorInjectionOptions<T>;

/**
 * Determine which options type it actually is depending on the component type.
 */
export type GetInjectableOption<TComponentType extends InjectableComponentTypes = InjectableComponentTypes> =
	(TComponentType extends Extract<InjectableComponentTypes, 'entity'>
		? EntityInjectableOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'service'>
		? ServiceInjectableOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'repository'>
		? RepositoryInjectableOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'migration'>
		? { metatype: Type<MigrationInterface> }
		: TComponentType extends Extract<InjectableComponentTypes, 'router'>
		? RouterInjectionOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'middleware'>
		? MiddlewareInjectionOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'validator'>
		? ValidatorInjectionOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'subscriber'>
		? SubscriberInjectionOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'provider'>
		? ProviderInjectableOptions
		: never) & {
		type: InjectableComponentTypes;
		metatype: TComponentType extends 'middleware' ? Type<MedusaMiddleware> : Type;
	};

/**
 * Determine which options type it actually is depending on the component type.
 */
export type GetInjectableOptions<TComponentType extends InjectableComponentTypes = InjectableComponentTypes> =
	GetInjectableOption<TComponentType>[];

/**
 * Medusa request extended.
 */
export type MedusaRequest = Request & {
	scope: AwilixContainer;
	container: AwilixContainer;
};

/**
 * Describe the expected request from a middleware {@link MedusaMiddleware}.
 */
export type MedusaAuthenticatedRequest = Request &
	MedusaRequest & {
		user?: { id?: string; userId: string };
		userId: string;
		session: { jwt: string };
	};

export type MedusaRouteMethods = 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';

/**
 * Describe all the available options for the Route {@link MedusaMiddleware}.
 */
export type MedusaRouteOptions = {
	path: string;
	method: MedusaRouteMethods;
};

/**
 * @interface
 * Describe a custom middleware instance.
 */
export interface MedusaMiddleware {
	consume(req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction): void | Promise<void>;
}

/**
 * @interface
 * Describe a dynamic module which resolve its import dynamically.
 */
export interface MedusaDynamicModule<T = unknown> {
	forRoot(configModule: T): Promise<ModuleInjectionOptions>;
}

/**
 * Mix the return type of two objects.
 */
export type MixinReturnType<T1, T2> = Constructor<T1 & T2>;
export type DatabaseTlsOptions = {
	ca: string | undefined;
	rejectUnauthorized: boolean | undefined;
};

export type ConfigModule = {
	projectConfig: {
		database_host: string;
		database_port: number;
		database_ssl?: DatabaseTlsOptions;
		database_username: string;
		database_password: string | (() => string) | (() => Promise<string>);
		database_type: string;
		database_url: string;
		database_database: string;
		database_logging?: LoggerOptions;
		database_extra: Record<string, string>;
		cli_migration_dirs?: string[];
		/**
		 * @deprecated in favor of cli_migration_dirs
		 */
		cliMigrationsDirs?: string[];
	};
	multi_tenancy?: MultiTenancyOptions;
};
