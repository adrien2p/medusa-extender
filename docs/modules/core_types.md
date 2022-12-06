[medusa-extender](../README.md) / [Exports](../modules.md) / core/types

# Module: core/types

## Table of contents

### Interfaces

- [MedusaDynamicModule](../interfaces/core_types.MedusaDynamicModule.md)
- [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md)
- [Type](../interfaces/core_types.Type.md)

### Type Aliases

- [Constructor](core_types.md#constructor)
- [EntityInjectableOptions](core_types.md#entityinjectableoptions)
- [GetInjectableOption](core_types.md#getinjectableoption)
- [GetInjectableOptions](core_types.md#getinjectableoptions)
- [InjectableComponentTypes](core_types.md#injectablecomponenttypes)
- [InjectableOptions](core_types.md#injectableoptions)
- [InjectableProviderSubTypes](core_types.md#injectableprovidersubtypes)
- [MedusaAuthenticatedRequest](core_types.md#medusaauthenticatedrequest)
- [MedusaContainer](core_types.md#medusacontainer)
- [MedusaRequest](core_types.md#medusarequest)
- [MedusaRouteMethods](core_types.md#medusaroutemethods)
- [MedusaRouteOptions](core_types.md#medusarouteoptions)
- [MiddlewareInjectionOptions](core_types.md#middlewareinjectionoptions)
- [MixinReturnType](core_types.md#mixinreturntype)
- [ModuleInjectionOptions](core_types.md#moduleinjectionoptions)
- [ProviderInjectableOptions](core_types.md#providerinjectableoptions)
- [RepositoryInjectableOptions](core_types.md#repositoryinjectableoptions)
- [RouterInjectionOptions](core_types.md#routerinjectionoptions)
- [RoutesInjectionRouterConfiguration](core_types.md#routesinjectionrouterconfiguration)
- [ServiceInjectableOptions](core_types.md#serviceinjectableoptions)
- [SubscriberInjectionOptions](core_types.md#subscriberinjectionoptions)
- [ValidatorInjectionOptions](core_types.md#validatorinjectionoptions)

## Type Aliases

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `unknown`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Defined in

[core/types.ts:13](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L13)

___

### EntityInjectableOptions

Ƭ **EntityInjectableOptions**<`TOverride`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `override?` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> | - |
| `resolutionKey?` | `string` |  |

#### Defined in

[core/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L34)

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"entity"``\> ? [`EntityInjectableOptions`](core_types.md#entityinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"service"``\> ? [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"migration"``\> ? { `metatype`: [`Type`](../interfaces/core_types.Type.md)<`MigrationInterface`\>  } : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"router"``\> ? [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"validator"``\> ? [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"subscriber"``\> ? [`SubscriberInjectionOptions`](core_types.md#subscriberinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"provider"``\> ? [`ProviderInjectableOptions`](core_types.md#providerinjectableoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/core_types.Type.md)<[`MedusaMiddleware`](../interfaces/core_types.MedusaMiddleware.md)\> : [`Type`](../interfaces/core_types.Type.md) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

[core/types.ts:125](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L125)

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](core_types.md#getinjectableoption)<`TComponentType`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

[core/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L152)

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"validator"`` \| ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"`` \| ``"subscriber"`` \| ``"provider"``

#### Defined in

[core/types.ts:20](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L20)

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> \| [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> \| [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) \| [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) \| [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[core/types.ts:114](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L114)

___

### InjectableProviderSubTypes

Ƭ **InjectableProviderSubTypes**: ``"tax"`` \| ``"fulfillment"``

#### Defined in

[core/types.ts:15](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L15)

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](core_types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

#### Defined in

[core/types.ts:166](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L166)

___

### MedusaContainer

Ƭ **MedusaContainer**: `AwilixContainer` & { `registerAdd`: <T\>(`name`: `string`, `registration`: `T`) => [`MedusaContainer`](core_types.md#medusacontainer)  }

#### Defined in

[core/types.ts:5](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L5)

___

### MedusaRequest

Ƭ **MedusaRequest**: `Request` & { `container`: `AwilixContainer` ; `scope`: `AwilixContainer`  }

#### Defined in

[core/types.ts:158](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L158)

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

[core/types.ts:173](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L173)

___

### MedusaRouteOptions

Ƭ **MedusaRouteOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | [`MedusaRouteMethods`](core_types.md#medusaroutemethods) |
| `path` | `string` |

#### Defined in

[core/types.ts:178](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L178)

___

### MiddlewareInjectionOptions

Ƭ **MiddlewareInjectionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `requireAuth` | `boolean` |
| `routes` | [`MedusaRouteOptions`](core_types.md#medusarouteoptions)[] |

#### Defined in

[core/types.ts:87](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L87)

___

### MixinReturnType

Ƭ **MixinReturnType**<`T1`, `T2`\>: [`Constructor`](core_types.md#constructor)<`T1` & `T2`\>

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Defined in

[core/types.ts:202](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L202)

___

### ModuleInjectionOptions

Ƭ **ModuleInjectionOptions**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `imports` | [`Type`](../interfaces/core_types.Type.md)<`T`\>[] |

#### Defined in

[core/types.ts:107](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L107)

___

### ProviderInjectableOptions

Ƭ **ProviderInjectableOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `subtype?` | [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) |

#### Defined in

[core/types.ts:42](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L42)

___

### RepositoryInjectableOptions

Ƭ **RepositoryInjectableOptions**<`TOverride`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `override?` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> | - |
| `resolutionKey?` | `string` |  |

#### Defined in

[core/types.ts:59](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L59)

___

### RouterInjectionOptions

Ƭ **RouterInjectionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `routes` | [`RoutesInjectionRouterConfiguration`](core_types.md#routesinjectionrouterconfiguration)[] |

#### Defined in

[core/types.ts:80](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L80)

___

### RoutesInjectionRouterConfiguration

Ƭ **RoutesInjectionRouterConfiguration**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handlers` | (...`args`: `unknown`[]) => `void`[] |
| `method` | [`MedusaRouteMethods`](core_types.md#medusaroutemethods) |
| `path` | `string` |
| `requiredAuth` | `boolean` |

#### Defined in

[core/types.ts:70](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L70)

___

### ServiceInjectableOptions

Ƭ **ServiceInjectableOptions**<`TOverride`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `override?` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> | - |
| `resolutionKey?` | `string` |  |
| `scope?` | `LifetimeType` | - |

#### Defined in

[core/types.ts:47](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L47)

___

### SubscriberInjectionOptions

Ƭ **SubscriberInjectionOptions**: `Record`<`string`, `unknown`\>

#### Defined in

[core/types.ts:102](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L102)

___

### ValidatorInjectionOptions

Ƭ **ValidatorInjectionOptions**<`TOverride`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TOverride` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `override` | [`Type`](../interfaces/core_types.Type.md)<`TOverride`\> |

#### Defined in

[core/types.ts:95](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/types.ts#L95)
