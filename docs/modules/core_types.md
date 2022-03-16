[medusa-extender](../README.md) / [Exports](../modules.md) / core/types

# Module: core/types

## Table of contents

### Interfaces

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
- [MedusaRequest](core_types.md#medusarequest)
- [MedusaRouteMethods](core_types.md#medusaroutemethods)
- [MedusaRouteOptions](core_types.md#medusarouteoptions)
- [MiddlewareInjectionOptions](core_types.md#middlewareinjectionoptions)
- [MixinReturnType](core_types.md#mixinreturntype)
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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L9)
=======
[src/core/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L9)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L9)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L26)
=======
[src/core/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L26)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L26)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"entity"``\> ? [`EntityInjectableOptions`](core_types.md#entityinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"service"``\> ? [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"migration"``\> ? { `metatype`: [`Type`](../interfaces/core_types.Type.md)<`MigrationInterface`\>  } : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"router"``\> ? [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"validator"``\> ? [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/core_types.Type.md)<[`MedusaMiddleware`](../interfaces/core_types.MedusaMiddleware.md)\> : [`Type`](../interfaces/core_types.Type.md) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  }

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L94)
=======
[src/core/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L94)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L94)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](core_types.md#getinjectableoption)<`TComponentType`\>[]

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L117)
=======
[src/core/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L117)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L117)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"validator"`` \| ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"``

Components that does not required any other options that Type.

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L14)
=======
[src/core/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L14)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L14)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> \| [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> \| [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) \| [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) \| [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`T`\>

Union of all options type possible for injectable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L83)
=======
[src/core/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L83)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L83)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](core_types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md).

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L130)
=======
[src/core/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L130)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L130)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L123)
=======
[src/core/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L123)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L123)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L137)
=======
[src/core/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L137)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L137)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L142)
=======
[src/core/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L142)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L142)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L68)
=======
[src/core/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L68)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L68)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:158](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L158)
=======
[src/core/types.ts:158](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L158)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:158](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L158)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L43)
=======
[src/core/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L43)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L43)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### RouterInjectionOptions

Ƭ **RouterInjectionOptions**: `Object`

Defines the injection options for routes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `routes` | [`RoutesInjectionRouterConfiguration`](core_types.md#routesinjectionrouterconfiguration)[] |

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L61)
=======
[src/core/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L61)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L61)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L51)
=======
[src/core/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L51)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L51)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L34)
=======
[src/core/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L34)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L34)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L76)
=======
[src/core/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L76)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L76)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
