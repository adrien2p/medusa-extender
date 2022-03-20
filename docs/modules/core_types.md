[medusa-extender](../README.md) / [Exports](../modules.md) / core/types

# Module: core/types

## Table of contents

### Interfaces

- [MedusaDynamicModule](../interfaces/core_types.MedusaDynamicModule.md)
- [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md)
- [Type](../interfaces/core_types.Type.md)

### Type aliases

- [Constructor](core_types.md#constructor)
- [EntityInjectableOptions](core_types.md#entityinjectableoptions)
- [GetInjectableOption](core_types.md#getinjectableoption)
- [GetInjectableOptions](core_types.md#getinjectableoptions)
- [InjectableComponentTypes](core_types.md#injectablecomponenttypes)
- [InjectableOptions](core_types.md#injectableoptions)
- [MedusaAuthenticatedRequest](core_types.md#medusaauthenticatedrequest)
- [MedusaCustomContainer](core_types.md#medusacustomcontainer)
- [MedusaRequest](core_types.md#medusarequest)
- [MedusaRouteMethods](core_types.md#medusaroutemethods)
- [MedusaRouteOptions](core_types.md#medusarouteoptions)
- [MiddlewareInjectionOptions](core_types.md#middlewareinjectionoptions)
- [MixinReturnType](core_types.md#mixinreturntype)
- [ModuleInjectionOptions](core_types.md#moduleinjectionoptions)
- [RepositoryInjectableOptions](core_types.md#repositoryinjectableoptions)
- [RouterInjectionOptions](core_types.md#routerinjectionoptions)
- [RoutesInjectionRouterConfiguration](core_types.md#routesinjectionrouterconfiguration)
- [ServiceInjectableOptions](core_types.md#serviceinjectableoptions)
- [ValidatorInjectionOptions](core_types.md#validatorinjectionoptions)

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

[src/core/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L9)

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
| `override?` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> |
| `resolutionKey?` | `string` |

#### Defined in

[src/core/types.ts:28](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L28)

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"entity"``\> ? [`EntityInjectableOptions`](core_types.md#entityinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"service"``\> ? [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"migration"``\> ? { `metatype`: [`Type`](../interfaces/core_types.Type.md)<`MigrationInterface`\>  } : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"router"``\> ? [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"validator"``\> ? [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/core_types.Type.md)<[`MedusaMiddleware`](../interfaces/core_types.MedusaMiddleware.md)\> : [`Type`](../interfaces/core_types.Type.md) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  }

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

[src/core/types.ts:103](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L103)

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](core_types.md#getinjectableoption)<`TComponentType`\>[]

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

[src/core/types.ts:126](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L126)

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"validator"`` \| ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"``

Components that does not required any other options that Type.

#### Defined in

[src/core/types.ts:16](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L16)

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> \| [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> \| [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) \| [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) \| [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`T`\>

Union of all options type possible for injectable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/core/types.ts:92](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L92)

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](core_types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md).

#### Defined in

[src/core/types.ts:140](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L140)

___

### MedusaCustomContainer

Ƭ **MedusaCustomContainer**: `AwilixContainer` & { `registerAdd`: (...`args`: `unknown`[]) => `void`  }

#### Defined in

[src/core/types.ts:11](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L11)

___

### MedusaRequest

Ƭ **MedusaRequest**<`T`, `Cradle`\>: `Request` & { `container`: `AwilixContainer`<`Cradle` & `T`\> ; `scope`: `AwilixContainer`<`Cradle` & `T`\>  }

Medusa request extended.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |
| `Cradle` | extends `Record`<`string`, `unknown`\> = `Record`<`string`, `unknown`\> |

#### Defined in

[src/core/types.ts:132](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L132)

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

[src/core/types.ts:147](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L147)

___

### MedusaRouteOptions

Ƭ **MedusaRouteOptions**: `Object`

Describe all the available options for the Route [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | [`MedusaRouteMethods`](core_types.md#medusaroutemethods) |
| `path` | `string` |

#### Defined in

[src/core/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L152)

___

### MiddlewareInjectionOptions

Ƭ **MiddlewareInjectionOptions**: `Object`

Defines the injection options for middlewares.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `requireAuth` | `boolean` |
| `routes` | [`MedusaRouteOptions`](core_types.md#medusarouteoptions)[] |

#### Defined in

[src/core/types.ts:70](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L70)

___

### MixinReturnType

Ƭ **MixinReturnType**<`T1`, `T2`\>: [`Constructor`](core_types.md#constructor)<`T1` & `T2`\>

Mix the return type of two objects.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Defined in

[src/core/types.ts:176](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L176)

___

### ModuleInjectionOptions

Ƭ **ModuleInjectionOptions**<`T`\>: `Object`

Defines the injection options for routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `imports` | [`Type`](../interfaces/core_types.Type.md)<`T`\>[] |

#### Defined in

[src/core/types.ts:85](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L85)

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
| `override?` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> |
| `resolutionKey?` | `string` |

#### Defined in

[src/core/types.ts:45](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L45)

___

### RouterInjectionOptions

Ƭ **RouterInjectionOptions**: `Object`

Defines the injection options for routes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `routes` | [`RoutesInjectionRouterConfiguration`](core_types.md#routesinjectionrouterconfiguration)[] |

#### Defined in

[src/core/types.ts:63](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L63)

___

### RoutesInjectionRouterConfiguration

Ƭ **RoutesInjectionRouterConfiguration**: `Object`

Define a router and its configuration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handlers` | (...`args`: `unknown`[]) => `void`[] |
| `method` | [`MedusaRouteMethods`](core_types.md#medusaroutemethods) |
| `path` | `string` |
| `requiredAuth` | `boolean` |

#### Defined in

[src/core/types.ts:53](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L53)

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
| `override?` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> |
| `resolutionKey?` | `string` |
| `scope?` | `LifetimeType` |

#### Defined in

[src/core/types.ts:36](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L36)

___

### ValidatorInjectionOptions

Ƭ **ValidatorInjectionOptions**<`TOverride`\>: `Object`

Defines the injection options for routes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `override` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> |

#### Defined in

[src/core/types.ts:78](https://github.com/adrien2p/medusa-extender/blob/b33e0e2/src/core/types.ts#L78)
