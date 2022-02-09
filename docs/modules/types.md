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
- [MixinReturnType](types.md#mixinreturntype)
- [RepositoryInjectableOptions](types.md#repositoryinjectableoptions)
- [RouterInjectionOptions](types.md#routerinjectionoptions)
- [RoutesInjectionRouterConfiguration](types.md#routesinjectionrouterconfiguration)
- [ServiceInjectableOptions](types.md#serviceinjectableoptions)
- [ValidatorInjectionOptions](types.md#validatorinjectionoptions)

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
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L9)
=======
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L9)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

#### Defined in

<<<<<<< HEAD
[src/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L26)
=======
[src/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L26)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"entity"``\> ? [`EntityInjectableOptions`](types.md#entityinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"service"``\> ? [`ServiceInjectableOptions`](types.md#serviceinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"migration"``\> ? { `metatype`: [`Type`](../interfaces/types.Type.md)<`MigrationInterface`\>  } : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"router"``\> ? [`RouterInjectionOptions`](types.md#routerinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](types.md#injectablecomponenttypes), ``"validator"``\> ? [`ValidatorInjectionOptions`](types.md#validatorinjectionoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/types.Type.md)<[`MedusaMiddleware`](../interfaces/types.MedusaMiddleware.md)\> : [`Type`](../interfaces/types.Type.md) ; `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  }

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](types.md#injectablecomponenttypes) |

#### Defined in

<<<<<<< HEAD
[src/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L94)
=======
[src/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L94)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](types.md#getinjectableoption)<`TComponentType`\>[]

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](types.md#injectablecomponenttypes) |

#### Defined in

<<<<<<< HEAD
[src/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L117)
=======
[src/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L117)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"validator"`` \| ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"``

Components that does not required any other options that Type.

#### Defined in

<<<<<<< HEAD
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L14)
=======
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L14)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`EntityInjectableOptions`](types.md#entityinjectableoptions)<`T`\> \| [`ServiceInjectableOptions`](types.md#serviceinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions)<`T`\> \| [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) \| [`RouterInjectionOptions`](types.md#routerinjectionoptions) \| [`ValidatorInjectionOptions`](types.md#validatorinjectionoptions)<`T`\>

Union of all options type possible for injectable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

<<<<<<< HEAD
[src/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L83)
=======
[src/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L83)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md).

#### Defined in

<<<<<<< HEAD
[src/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L130)
=======
[src/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L130)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L123)
=======
[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L123)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

<<<<<<< HEAD
[src/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L137)
=======
[src/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L137)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L142)
=======
[src/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L142)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L68)
=======
[src/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L68)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### MixinReturnType

Ƭ **MixinReturnType**<`T1`, `T2`\>: [`Constructor`](types.md#constructor)<`T1` & `T2`\>

Mix the return type of two objects.

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Defined in

<<<<<<< HEAD
[src/types.ts:160](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L160)
=======
[src/types.ts:160](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L160)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L43)
=======
[src/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L43)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### RouterInjectionOptions

Ƭ **RouterInjectionOptions**: `Object`

Defines the injection options for routes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `router` | [`RoutesInjectionRouterConfiguration`](types.md#routesinjectionrouterconfiguration)[] |

#### Defined in

<<<<<<< HEAD
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L61)
=======
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L61)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L51)
=======
[src/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L51)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L34)
=======
[src/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L34)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
| `override?` | [`Type`](../interfaces/types.Type.md)<`TOverride`\> |

#### Defined in

<<<<<<< HEAD
[src/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/types.ts#L76)
=======
[src/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/types.ts#L76)
>>>>>>> 51e6b4d... feat: Add support of commitlint
