import { Express, NextFunction, Request, Response } from 'express';
import { AwilixContainer, LifetimeType } from 'awilix';

export interface Type<T = unknown> extends Function {
    new(...args: unknown[]): T;
}

export type Constructor<T> = new (...args: unknown[]) => T;

/**
 * Components that does not required any other options that Type.
 */
export type InjectableComponentTypes = 'entity' | 'repository' | 'service' | 'migration' | 'route' | 'middleware';

/**
 * Defines the injection options for services, entities.
 */
export type ComplexInjectableOptions<TOverride = unknown> = {
    type: Extract<InjectableComponentTypes, 'entity' | 'service'>;
    scope?: LifetimeType;
    resolutionKey?: string;
    override?: Type<TOverride>
};

/**
 * Defines the injection options for services, entities, repositories.
 */
export type RepositoryInjectableOptions<TOverride = unknown, TMetatype = unknown> = {
    type: Extract<InjectableComponentTypes, 'repository'>;
    scope?: LifetimeType;
    resolutionKey?: string;
    override?: Type<TOverride>;
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
    requiredAuth: boolean;
    method: string;
    path: string;
    handler: (...args: unknown[]) => void;
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
export type InjectableOptions<T = unknown, U = unknown> =
    | ComplexInjectableOptions<T>
    | RepositoryInjectableOptions<T, U>
    | MigrationInjectionOptions
    | MiddlewareInjectionOptions
    | RoutesInjectionOptions;

/**
 * Determine which options type it actually is depending on the component type.
 */
export type GetInjectableOption<TComponentType extends InjectableComponentTypes = InjectableComponentTypes> =
    (TComponentType extends Extract<InjectableComponentTypes, 'entity' | 'service'>
        ? ComplexInjectableOptions
        : TComponentType extends Extract<InjectableComponentTypes, 'repository'>
            ? RepositoryInjectableOptions
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
