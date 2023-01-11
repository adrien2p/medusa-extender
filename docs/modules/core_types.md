[medusa-extender](../README.md) / [Exports](../modules.md) / core/types

# Module: core/types

## Table of contents

### Interfaces

- [MedusaDynamicModule](../interfaces/core_types.MedusaDynamicModule.md)
- [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md)
- [Type](../interfaces/core_types.Type.md)

### Type aliases

- [ConfigModule](core_types.md#configmodule)
- [Constructor](core_types.md#constructor)
- [DatabaseTlsOptions](core_types.md#databasetlsoptions)
- [EntityInjectableOptions](core_types.md#entityinjectableoptions)
- [GetInjectableOption](core_types.md#getinjectableoption)
- [GetInjectableOptions](core_types.md#getinjectableoptions)
- [InjectableComponentTypes](core_types.md#injectablecomponenttypes)
- [InjectableOptions](core_types.md#injectableoptions)
- [InjectableProviderSubTypes](core_types.md#injectableprovidersubtypes)
- [MedusaAuthenticatedRequest](core_types.md#medusaauthenticatedrequest)
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

## Type aliases

### ConfigModule

Ƭ **ConfigModule**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `multi_tenancy?` | [`MultiTenancyOptions`](../interfaces/modules_multi_tenancy_types.MultiTenancyOptions.md) |
| `projectConfig` | { `cliMigrationsDirs?`: `string`[] ; `cli_migration_dirs?`: `string`[] ; `database_database`: `string` ; `database_extra`: `Record`<`string`, `string`\> ; `database_host`: `string` ; `database_logging?`: `LoggerOptions` ; `database_password`: `string` \| () => `string` \| () => `Promise`<`string`\> ; `database_port`: `number` ; `database_ssl?`: [`DatabaseTlsOptions`](core_types.md#databasetlsoptions) ; `database_type`: `string` ; `database_url`: `string` ; `database_username`: `string`  } |
| `projectConfig.cliMigrationsDirs?` | `string`[] |
| `projectConfig.cli_migration_dirs?` | `string`[] |
| `projectConfig.database_database` | `string` |
| `projectConfig.database_extra` | `Record`<`string`, `string`\> |
| `projectConfig.database_host` | `string` |
| `projectConfig.database_logging?` | `LoggerOptions` |
| `projectConfig.database_password` | `string` \| () => `string` \| () => `Promise`<`string`\> |
| `projectConfig.database_port` | `number` |
| `projectConfig.database_ssl?` | [`DatabaseTlsOptions`](core_types.md#databasetlsoptions) |
| `projectConfig.database_type` | `string` |
| `projectConfig.database_url` | `string` |
| `projectConfig.database_username` | `string` |

#### Defined in

[core/types.ts:209](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L209)

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

[core/types.ts:10](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L10)

___

### DatabaseTlsOptions

Ƭ **DatabaseTlsOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ca` | `string` \| `undefined` |
| `rejectUnauthorized` | `boolean` \| `undefined` |

#### Defined in

[core/types.ts:204](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L204)

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

[core/types.ts:31](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L31)

___

### GetInjectableOption

Ƭ **GetInjectableOption**<`TComponentType`\>: `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"entity"``\> ? [`EntityInjectableOptions`](core_types.md#entityinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"service"``\> ? [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"repository"``\> ? [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"migration"``\> ? { `metatype`: [`Type`](../interfaces/core_types.Type.md)<`MigrationInterface`\>  } : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"router"``\> ? [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"middleware"``\> ? [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"validator"``\> ? [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"subscriber"``\> ? [`SubscriberInjectionOptions`](core_types.md#subscriberinjectionoptions) : `TComponentType` extends `Extract`<[`InjectableComponentTypes`](core_types.md#injectablecomponenttypes), ``"provider"``\> ? [`ProviderInjectableOptions`](core_types.md#providerinjectableoptions) : `never` & { `metatype`: `TComponentType` extends ``"middleware"`` ? [`Type`](../interfaces/core_types.Type.md)<[`MedusaMiddleware`](../interfaces/core_types.MedusaMiddleware.md)\> : [`Type`](../interfaces/core_types.Type.md) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  }

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

[core/types.ts:126](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L126)

___

### GetInjectableOptions

Ƭ **GetInjectableOptions**<`TComponentType`\>: [`GetInjectableOption`](core_types.md#getinjectableoption)<`TComponentType`\>[]

Determine which options type it actually is depending on the component type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) = [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes) |

#### Defined in

[core/types.ts:153](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L153)

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"validator"`` \| ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"`` \| ``"subscriber"`` \| ``"provider"``

Components that does not required any other options that Type.

#### Defined in

[core/types.ts:17](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L17)

___

### InjectableOptions

Ƭ **InjectableOptions**<`T`\>: [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> \| [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> \| [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> \| [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) \| [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) \| [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`T`\>

Union of all options type possible for injectable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[core/types.ts:115](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L115)

___

### InjectableProviderSubTypes

Ƭ **InjectableProviderSubTypes**: ``"tax"`` \| ``"fulfillment"`` \| ``"notification"`` \| ``"payment"``

#### Defined in

[core/types.ts:12](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L12)

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](core_types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md).

#### Defined in

[core/types.ts:167](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L167)

___

### MedusaRequest

Ƭ **MedusaRequest**: `Request` & { `container`: `AwilixContainer` ; `scope`: `AwilixContainer`  }

Medusa request extended.

#### Defined in

[core/types.ts:159](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L159)

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

[core/types.ts:174](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L174)

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

[core/types.ts:179](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L179)

___

### MiddlewareInjectionOptions

Ƭ **MiddlewareInjectionOptions**: `Object`

Defines the injection options for middlewares.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `requireAuth?` | `boolean` |
| `requiredAuth?` | `boolean` |
| `routes` | [`MedusaRouteOptions`](core_types.md#medusarouteoptions)[] |

#### Defined in

[core/types.ts:84](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L84)

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

[core/types.ts:203](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L203)

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

[core/types.ts:108](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L108)

___

### ProviderInjectableOptions

Ƭ **ProviderInjectableOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `subtype?` | [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) |

#### Defined in

[core/types.ts:39](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L39)

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

[core/types.ts:56](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L56)

___

### RouterInjectionOptions

Ƭ **RouterInjectionOptions**: `Object`

Defines the injection options for routes.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `routes` | [`RoutesInjectionRouterConfiguration`](core_types.md#routesinjectionrouterconfiguration)[] |

#### Defined in

[core/types.ts:77](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L77)

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
| `requiredAuth?` | `boolean` |

#### Defined in

[core/types.ts:67](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L67)

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

[core/types.ts:44](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L44)

___

### SubscriberInjectionOptions

Ƭ **SubscriberInjectionOptions**: `Record`<`string`, `unknown`\>

Defines the injection options for subscribers.

#### Defined in

[core/types.ts:103](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L103)

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

[core/types.ts:96](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/types.ts#L96)
