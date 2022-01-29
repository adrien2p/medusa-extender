[medusa-extender](../README.md) / [Exports](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md)
- [Type](../interfaces/types.Type.md)

### Type aliases

- [Constructor](types.md#constructor)
- [EntityInjectableOptions](types.md#entityinjectableoptions)
- [GetInjectableOption](types.md#getinjectableoption)
- [GetInjectableOptions](types.md#getinjectableoptions)
- [InjectableComponentTypes](types.md#injectablecomponenttypes)
- [InjectableOptions](types.md#injectableoptions)
- [MedusaAuthenticatedRequest](types.md#medusaauthenticatedrequest)
- [MedusaRequest](types.md#medusarequest)
- [MedusaRouteMethods](types.md#medusaroutemethods)
- [MedusaRouteOptions](types.md#medusarouteoptions)
- [MiddlewareInjectionOptions](types.md#middlewareinjectionoptions)
- [RepositoryInjectableOptions](types.md#repositoryinjectableoptions)
- [RouterInjectionOptions](types.md#routerinjectionoptions)
- [RoutesInjectionRouterConfiguration](types.md#routesinjectionrouterconfiguration)
- [ServiceInjectableOptions](types.md#serviceinjectableoptions)

## Type aliases

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

[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L9)

___

### EntityInjectableOptions

Ƭ **EntityInjectableOptions**<`TOverride`\>: `Object`

Defines the injection options for entities.

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

#### Defined in

[src/types.ts:19](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L19)

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"entity"``\> ? [`EntityInjectableOptions`](types.md#entityinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"service"``\> ? [`ServiceInjectableOptions`](types.md#serviceinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"migration"``\> ? { `metatype`: [`Type`](../interfaces/types.Type.md)<`MigrationInterface`\>  } : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"router"``\> ? [`RouterInjectionOptions`](types.md#routerinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/types.Type.md)<[`MedusaMiddleware`](../interfaces/types.MedusaMiddleware.md)\> : [`Type`](../interfaces/types.Type.md) ; `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  }

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](types.md#injectablecomponenttypes) |

#### Defined in

[src/types.ts:80](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L80)

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](types.md#getinjectableoption)<`TComponentType`\>[]

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](types.md#injectablecomponenttypes) |

#### Defined in

[src/types.ts:101](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L101)

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"``

Components that does not required any other options that Type.

#### Defined in

[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L14)

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`EntityInjectableOptions`](types.md#entityinjectableoptions)<`T`\> \| [`ServiceInjectableOptions`](types.md#serviceinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions)<`T`\> \| [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) \| [`RouterInjectionOptions`](types.md#routerinjectionoptions)

Union of all options type possible for injectable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/types.ts:70](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L70)

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md).

#### Defined in

[src/types.ts:114](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L114)

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

[src/types.ts:107](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L107)

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

[src/types.ts:121](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L121)

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

[src/types.ts:126](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L126)

___

### MiddlewareInjectionOptions

Ƭ **MiddlewareInjectionOptions**: `Object`

Defines the injection options for middlewares.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `requireAuth` | `boolean` |
| `routerOptions` | [`MedusaRouteOptions`](types.md#medusarouteoptions)[] |

#### Defined in

[src/types.ts:62](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L62)

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

#### Defined in

[src/types.ts:37](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L37)

___

### RouterInjectionOptions

Ƭ **RouterInjectionOptions**: `Object`

Defines the injection options for routes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `router` | [`RoutesInjectionRouterConfiguration`](types.md#routesinjectionrouterconfiguration)[] |

#### Defined in

[src/types.ts:55](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L55)

___

### RoutesInjectionRouterConfiguration

Ƭ **RoutesInjectionRouterConfiguration**: `Object`

Define a router and its configuration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `path` | `string` |
| `requiredAuth` | `boolean` |
| `handler` | (...`args`: `unknown`[]) => `void` |

#### Defined in

[src/types.ts:45](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L45)

___

### ServiceInjectableOptions

Ƭ **ServiceInjectableOptions**<`TOverride`\>: `Object`

Defines the injection options for service.

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

#### Defined in

[src/types.ts:28](https://github.com/adrien2p/medusa-extender/blob/af655f6/src/types.ts#L28)
