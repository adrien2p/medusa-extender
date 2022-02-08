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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L9)
=======
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L9)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L9)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L9)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L9)
=======
[src/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L9)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:19](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L19)
=======
[src/types.ts:19](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L19)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:19](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L19)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L26)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:26](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L26)
=======
[src/types.ts:19](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L19)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:79](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L79)
=======
[src/types.ts:87](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L87)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:87](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L87)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L94)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:94](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L94)
=======
[src/types.ts:79](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L79)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:100](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L100)
=======
[src/types.ts:110](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L110)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:110](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L110)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L117)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:117](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L117)
=======
[src/types.ts:100](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L100)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### InjectableComponentTypes

Ƭ **InjectableComponentTypes**: ``"validator"`` \| ``"entity"`` \| ``"repository"`` \| ``"service"`` \| ``"migration"`` \| ``"router"`` \| ``"middleware"``

Components that does not required any other options that Type.

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L14)
=======
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L14)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L14)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L14)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L14)
=======
[src/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L14)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:69](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L69)
=======
[src/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L76)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L76)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L83)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:83](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L83)
=======
[src/types.ts:69](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L69)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md).

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:113](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L113)
=======
[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L123)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L123)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L130)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L130)
=======
[src/types.ts:113](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L113)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:106](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L106)
=======
[src/types.ts:116](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L116)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:116](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L116)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L123)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:123](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L123)
=======
[src/types.ts:106](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L106)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:120](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L120)
=======
[src/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L130)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:130](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L130)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L137)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:137](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L137)
=======
[src/types.ts:120](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L120)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:125](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L125)
=======
[src/types.ts:135](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L135)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:135](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L135)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L142)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:142](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L142)
=======
[src/types.ts:125](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L125)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L61)
=======
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L61)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L61)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L68)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:68](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L68)
=======
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L61)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:143](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L143)
=======
[src/types.ts:153](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L153)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:153](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L153)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:160](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L160)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:160](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L160)
=======
[src/types.ts:143](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L143)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:36](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L36)
=======
[src/types.ts:36](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L36)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:36](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L36)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L43)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:43](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L43)
=======
[src/types.ts:36](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L36)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:54](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L54)
=======
[src/types.ts:54](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L54)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:54](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L54)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L61)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:61](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L61)
=======
[src/types.ts:54](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L54)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:44](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L44)
=======
[src/types.ts:44](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L44)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:44](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L44)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L51)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/types.ts:51](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L51)
=======
[src/types.ts:44](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L44)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:27](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L27)
=======
[src/types.ts:27](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L27)
=======
[src/types.ts:27](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L27)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
=======
>>>>>>> 7a00f8d... Feat() Update README decorators section
[src/types.ts:34](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L34)
>>>>>>> 92fcc31... [BOT] BUILD DOC

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
<<<<<<< HEAD
[src/types.ts:69](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L69)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:69](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L69)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:76](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L76)
<<<<<<< HEAD
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
[src/types.ts:27](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L27)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section
