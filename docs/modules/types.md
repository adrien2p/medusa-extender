[medusa-extender](../README.md) / [Exports](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md)
- [Type](../interfaces/types.Type.md)

### Type aliases

- [ComplexInjectableOptions](types.md#complexinjectableoptions)
- [Constructor](types.md#constructor)
- [GetInjectableOption](types.md#getinjectableoption)
- [GetInjectableOptions](types.md#getinjectableoptions)
- [InjectableComponentTypes](types.md#injectablecomponenttypes)
- [InjectableOptions](types.md#injectableoptions)
- [MedusaAuthenticatedRequest](types.md#medusaauthenticatedrequest)
- [MedusaRequest](types.md#medusarequest)
- [MedusaRouteMethods](types.md#medusaroutemethods)
- [MedusaRouteOptions](types.md#medusarouteoptions)
- [MiddlewareInjectionOptions](types.md#middlewareinjectionoptions)
- [MigrationInjectionOptions](types.md#migrationinjectionoptions)
- [RepositoryInjectableOptions](types.md#repositoryinjectableoptions)
- [RoutesInjectionOptions](types.md#routesinjectionoptions)
- [RoutesInjectionRouterConfiguration](types.md#routesinjectionrouterconfiguration)

## Type aliases

### ComplexInjectableOptions

Ƭ **ComplexInjectableOptions**<`TOverride`\>: `Object`

Defines the injection options for services, entities.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `override?` | [`Type`](../interfaces/types.Type.md)<`TOverride`\> |
| `resolutionKey?` | `string` |
| `scope?` | `LifetimeType` |
| `type` | `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"entity"`` \| ``"service"``\> |

#### Defined in

[src/types.ts:18](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L18)

___

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `unknown`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Defined in

[src/types.ts:8](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L8)

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"entity"`` \| ``"service"``\> ? [`ComplexInjectableOptions`](types.md#complexinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"migration"``\> ? [`MigrationInjectionOptions`](types.md#migrationinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"route"``\> ? [`RoutesInjectionOptions`](types.md#routesinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/types.Type.md)<[`MedusaMiddleware`](../interfaces/types.MedusaMiddleware.md)\> : [`Type`](../interfaces/types.Type.md)  }

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](types.md#injectablecomponenttypes) |

#### Defined in

[src/types.ts:82](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L82)

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](types.md#getinjectableoption)<`TComponentType`\>[]

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](types.md#injectablecomponenttypes) |

#### Defined in

[src/types.ts:98](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L98)

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"route"`` \| ``"middleware"``

Components that does not required any other options that Type.

#### Defined in

[src/types.ts:13](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L13)

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`ComplexInjectableOptions`](types.md#complexinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions)<`T`\> \| [`MigrationInjectionOptions`](types.md#migrationinjectionoptions) \| [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) \| [`RoutesInjectionOptions`](types.md#routesinjectionoptions)

Union of all options type possible for injectable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/types.ts:72](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L72)

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md).

#### Defined in

[src/types.ts:111](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L111)

___

### MedusaRequest

Ƭ **MedusaRequest**<`T`, `Cradle`\>: `Request` & { `scope`: `AwilixContainer`<`Cradle` & `T`\>  }

Medusa request extended.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `Cradle` | extends `object` = `any` |

#### Defined in

[src/types.ts:104](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L104)

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

[src/types.ts:118](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L118)

___

### MedusaRouteOptions

Ƭ **MedusaRouteOptions**: `Object`

Describe all the available options for the Route [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | [`MedusaRouteMethods`](types.md#medusaroutemethods) |
| `path` | `string` |

#### Defined in

[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L123)

___

### MiddlewareInjectionOptions

Ƭ **MiddlewareInjectionOptions**: `Object`

Defines the injection options for middlewares.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `requireAuth` | `boolean` |
| `routerOptions` | [`MedusaRouteOptions`](types.md#medusarouteoptions)[] |
| `type` | `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"middleware"``\> |

#### Defined in

[src/types.ts:63](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L63)

___

### MigrationInjectionOptions

Ƭ **MigrationInjectionOptions**: `Object`

Defines the injection options for migrations.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"migration"``\> |

#### Defined in

[src/types.ts:38](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L38)

___

### RepositoryInjectableOptions

Ƭ **RepositoryInjectableOptions**<`TOverride`\>: `Object`

Defines the injection options for services, entities, repositories.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `override?` | [`Type`](../interfaces/types.Type.md)<`TOverride`\> |
| `resolutionKey?` | `string` |
| `scope?` | `LifetimeType` |
| `type` | `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"repository"``\> |

#### Defined in

[src/types.ts:28](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L28)

___

### RoutesInjectionOptions

Ƭ **RoutesInjectionOptions**: `Object`

Defines the injection options for routes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `router` | [`RoutesInjectionRouterConfiguration`](types.md#routesinjectionrouterconfiguration)[] |
| `type` | `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"route"``\> |

#### Defined in

[src/types.ts:55](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L55)

___

### RoutesInjectionRouterConfiguration

Ƭ **RoutesInjectionRouterConfiguration**: `Object`

Define a route and its configuration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `path` | `string` |
| `requiredAuth` | `boolean` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Defined in

[src/types.ts:45](https://github.com/adrien2p/medusa-extender/blob/fbaa04d/src/types.ts#L45)
