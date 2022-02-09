import { Express, NextFunction, Request, Response } from 'express';
import { AwilixContainer, LifetimeType } from 'awilix';
import { MigrationInterface } from 'typeorm';

export interface Type<T = unknown> extends Function {
	new (...args: unknown[]): T;
}

export type Constructor<T> = new (...args: unknown[]) => T;

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
	| 'middleware';

/**
 * Defines the injection options for entities.
 */
export type EntityInjectableOptions<TOverride = unknown> = {
	resolutionKey?: string;
	override?: Type<TOverride>;
};

/**
 * Defines the injection options for service.
 */
export type ServiceInjectableOptions<TOverride = unknown> = {
	scope?: LifetimeType;
	resolutionKey?: string;
	override?: Type<TOverride>;
};

/**
 * Defines the injection options for services, entities, repositories.
 */
export type RepositoryInjectableOptions<TOverride = unknown> = {
	resolutionKey?: string;
	override?: Type<TOverride>;
};

/**
 * Define a router and its configuration.
 */
export type RoutesInjectionRouterConfiguration = {
	requiredAuth: boolean;
	method: string;
	path: string;
	handler: (...args: unknown[]) => void;
};

/**
 * Defines the injection options for routes.
 */
export type RouterInjectionOptions = {
	router: RoutesInjectionRouterConfiguration[];
};

/**
 * Defines the injection options for middlewares.
 */
export type MiddlewareInjectionOptions = {
	requireAuth: boolean;
	routerOptions: MedusaRouteOptions[];
};

/**
 * Defines the injection options for routes.
 */
export type ValidatorInjectionOptions<TOverride = unknown> = {
	override?: Type<TOverride>;
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
export type MedusaRequest<T = any, Cradle extends object = any> = Request & {
	scope: AwilixContainer<Cradle & T>;
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
	consume(options: {
		app: Express;
	}): (req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction) => void | Promise<void>;
}

/**
 * Mix the return type of two objects.
 */
export type MixinReturnType<T1, T2> = Constructor<T1 & T2>;
