import { Express, NextFunction, Request, Response } from 'express';
import { AwilixContainer, LifetimeType } from 'awilix';

export interface Type<T = unknown> extends Function {
	new (...args: unknown[]): T;
}

export type Constructor<T> = new (...args: unknown[]) => T;

export type StaticImplements<I extends new (...args: any[]) => any> = InstanceType<I>;

/**
 * Components that does not required any other options that Type.
 */
export type InjectableComponentTypes = 'entity' | 'repository' | 'service' | 'migrations' | 'route' | 'middleware';

/**
 * Defines the injection options for services, entities, repositories.
 */
export type ComplexInjectableOptions<T = unknown> = {
	type: Extract<InjectableComponentTypes, 'entity' | 'repository' | 'service'>;
	scope?: LifetimeType;
	resolutionKey?: string;
	override?: Type<T>;
};

/**
 * Defines the injection options for migrations.
 */
export type MigrationInjectionOptions = {
	type: Extract<InjectableComponentTypes, 'migration'>;
};

/**
 * Defines the injection options for routes.
 */
export type RoutesInjectionOptions = {
	type: Extract<InjectableComponentTypes, 'route'>;
};

/**
 * Defines the injection options for middlewares.
 */
export type MiddlewareInjectionOptions = {
	type: Extract<InjectableComponentTypes, 'middleware'>;
	requireAuth: boolean;
	routerOptions: MedusaRouteOptions[];
};

/**
 * Union of all options type possible for injectable.
 */
export type InjectableOptions<T = unknown> =
	| ComplexInjectableOptions<T>
	| MigrationInjectionOptions
	| MiddlewareInjectionOptions
	| RoutesInjectionOptions;

/**
 * Determine which options type it actually is depending on the component type.
 */
export type GetInjectableOption<TComponentType extends InjectableComponentTypes = InjectableComponentTypes> =
	(TComponentType extends Extract<InjectableComponentTypes, 'entity' | 'repository' | 'service'>
		? ComplexInjectableOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'migration'>
		? MigrationInjectionOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'route'>
		? RoutesInjectionOptions
		: TComponentType extends Extract<InjectableComponentTypes, 'middleware'>
		? MiddlewareInjectionOptions
		: never) & { metatype: TComponentType extends 'middleware' ? Type<MedusaMiddleware> : Type };

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
 * @interface
 * Describe a custom service instance.
 */
export interface MedusaServiceInstance {}

/**
 * @interface
 * Describe a custom service constructor.
 */
export interface MedusaServiceStatic<OverriddenType = unknown> {
	overriddenType?: Type<OverriddenType>;
	isHandledByMedusa?: boolean;
	scope?: LifetimeType;

	/**
	 * Only required if there is no overriddenType
	 */
	resolutionKey?: string;

	new (container: any): MedusaServiceInstance;
}

/**
 * Any custom medusa service must implement MedusaService.
 */
export type MedusaService<
	OverriddenType = unknown,
	T extends MedusaServiceStatic<OverriddenType> = MedusaServiceStatic<OverriddenType>
> = StaticImplements<T>;

/**
 * @interface
 * Describe a custom entity repository instance.
 */
export interface MedusaRepositoryInstance {}

/**
 * @interface
 * Describe a custom entity repository constructor.
 */
export interface MedusaRepositoryStatic<OverriddenType = unknown> {
	overriddenType?: Type<OverriddenType>;
	isHandledByMedusa?: boolean;

	/**
	 * Only required if there is no overriddenType
	 */
	resolutionKey?: string;

	new (): MedusaRepositoryInstance;
}

/**
 * Any custom medusa entity repository must implement MedusaService.
 */
export type MedusaRepository<
	OverriddenType = unknown,
	T extends MedusaRepositoryStatic<OverriddenType> = MedusaRepositoryStatic<OverriddenType>
> = StaticImplements<T>;

/**
 * Describe a custom router handler.
 */
export type MedusaRoute = {
	method: MedusaRouteMethods;
	path: string;
	isAuthenticated?: boolean;
	handler: (req: MedusaAuthenticatedRequest | Request, res: Response) => unknown | Promise<unknown>;
};
