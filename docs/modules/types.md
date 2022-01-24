[medusa-extender](../README.md) / [Exports](../modules.md) / types

# Module: types

## Table of contents

### Interfaces

- [MedusaEntityInstance](../interfaces/types.MedusaEntityInstance.md)
- [MedusaEntityStatic](../interfaces/types.MedusaEntityStatic.md)
- [MedusaEntitySubscriberInstance](../interfaces/types.MedusaEntitySubscriberInstance.md)
- [MedusaEntitySubscriberStatic](../interfaces/types.MedusaEntitySubscriberStatic.md)
- [MedusaMiddlewareInstance](../interfaces/types.MedusaMiddlewareInstance.md)
- [MedusaMiddlewareStatic](../interfaces/types.MedusaMiddlewareStatic.md)
- [MedusaRepositoryInstance](../interfaces/types.MedusaRepositoryInstance.md)
- [MedusaRepositoryStatic](../interfaces/types.MedusaRepositoryStatic.md)
- [MedusaServiceInstance](../interfaces/types.MedusaServiceInstance.md)
- [MedusaServiceStatic](../interfaces/types.MedusaServiceStatic.md)
- [Type](../interfaces/types.Type.md)

### Type aliases

- [Constructor](types.md#constructor)
- [MedusaAuthenticatedRequest](types.md#medusaauthenticatedrequest)
- [MedusaEntity](types.md#medusaentity)
- [MedusaEntitySubscriber](types.md#medusaentitysubscriber)
- [MedusaMiddleware](types.md#medusamiddleware)
- [MedusaRepository](types.md#medusarepository)
- [MedusaRequest](types.md#medusarequest)
- [MedusaRoute](types.md#medusaroute)
- [MedusaRouteMethods](types.md#medusaroutemethods)
- [MedusaRouteOptions](types.md#medusarouteoptions)
- [MedusaService](types.md#medusaservice)
- [Metatype](types.md#metatype)
- [StaticImplements](types.md#staticimplements)

### Variables

- [MedusaEntityEvents](types.md#medusaentityevents)
- [MedusaResolverKeys](types.md#medusaresolverkeys)

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

[src/types.ts:8](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L8)

___

### MedusaAuthenticatedRequest

Ƭ **MedusaAuthenticatedRequest**: `Request` & [`MedusaRequest`](types.md#medusarequest) & { `session`: { `jwt`: `string`  } ; `user?`: { `id?`: `string` ; `userId`: `string`  } ; `userId`: `string`  }

Describe the expected request from a middleware [MedusaMiddleware](types.md#medusamiddleware).

#### Defined in

[src/types.ts:60](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L60)

___

### MedusaEntity

Ƭ **MedusaEntity**<`OverriddenType`, `T`\>: [`StaticImplements`](types.md#staticimplements)<`T`\>

Any custom medusa entity must implement MedusaService.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OverriddenType` | `unknown` |
| `T` | extends [`MedusaEntityStatic`](../interfaces/types.MedusaEntityStatic.md)<`OverriddenType`\> = [`MedusaEntityStatic`](../interfaces/types.MedusaEntityStatic.md)<`OverriddenType`\> |

#### Defined in

[src/types.ts:159](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L159)

___

### MedusaEntitySubscriber

Ƭ **MedusaEntitySubscriber**<`T`\>: [`StaticImplements`](types.md#staticimplements)<`T`\>

Any custom medusa subscriber must implement MedusaEntitySubscriber.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MedusaEntitySubscriberStatic`](../interfaces/types.MedusaEntitySubscriberStatic.md) = [`MedusaEntitySubscriberStatic`](../interfaces/types.MedusaEntitySubscriberStatic.md) |

#### Defined in

[src/types.ts:213](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L213)

___

### MedusaMiddleware

Ƭ **MedusaMiddleware**<`T`\>: [`StaticImplements`](types.md#staticimplements)<`T`\>

Any custom medusa middleware must implement MedusaMiddleware.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md) = [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md) |

#### Defined in

[src/types.ts:101](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L101)

___

### MedusaRepository

Ƭ **MedusaRepository**<`OverriddenType`, `T`\>: [`StaticImplements`](types.md#staticimplements)<`T`\>

Any custom medusa entity repository must implement MedusaService.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OverriddenType` | `unknown` |
| `T` | extends [`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`OverriddenType`\> = [`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`OverriddenType`\> |

#### Defined in

[src/types.ts:191](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L191)

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

[src/types.ts:53](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L53)

___

### MedusaRoute

Ƭ **MedusaRoute**: `Object`

Describe a custom router handler.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isAuthenticated?` | `boolean` |
| `method` | [`MedusaRouteMethods`](types.md#medusaroutemethods) |
| `path` | `string` |
| `handler` | (`req`: [`MedusaAuthenticatedRequest`](types.md#medusaauthenticatedrequest) \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>, `res`: `Response`<`any`, `Record`<`string`, `any`\>\>) => `unknown` |

#### Defined in

[src/types.ts:227](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L227)

___

### MedusaRouteMethods

Ƭ **MedusaRouteMethods**: ``"all"`` \| ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"delete"`` \| ``"patch"`` \| ``"options"`` \| ``"head"``

#### Defined in

[src/types.ts:67](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L67)

___

### MedusaRouteOptions

Ƭ **MedusaRouteOptions**: `Object`

Describe all the available options for the Route [MedusaMiddleware](types.md#medusamiddleware).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `method` | [`MedusaRouteMethods`](types.md#medusaroutemethods) |
| `path` | `string` |

#### Defined in

[src/types.ts:71](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L71)

___

### MedusaService

Ƭ **MedusaService**<`OverriddenType`, `T`\>: [`StaticImplements`](types.md#staticimplements)<`T`\>

Any custom medusa service must implement MedusaService.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `OverriddenType` | `unknown` |
| `T` | extends [`MedusaServiceStatic`](../interfaces/types.MedusaServiceStatic.md)<`OverriddenType`\> = [`MedusaServiceStatic`](../interfaces/types.MedusaServiceStatic.md)<`OverriddenType`\> |

#### Defined in

[src/types.ts:129](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L129)

___

### Metatype

Ƭ **Metatype**<`T`\>: [`Type`](../interfaces/types.Type.md)<`T`\> \| `string` \| `symbol` \| `Function`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/types.ts:11](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L11)

___

### StaticImplements

Ƭ **StaticImplements**<`I`\>: `InstanceType`<`I`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends (...`args`: `any`[]) => `any` |

#### Defined in

[src/types.ts:13](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L13)

## Variables

### MedusaEntityEvents

• **MedusaEntityEvents**: `Object`

Event types that can be emitted from an entity subscriber.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AfterInsert` | `string` |
| `BeforeInsert` | `string` |

#### Defined in

[src/types.ts:219](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L219)

___

### MedusaResolverKeys

• **MedusaResolverKeys**: `Object`

Hold the name of the medusa services registered into the container for later on resolve.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AuthService` | `string` |
| `CartService` | `string` |
| `CustomShippingOptionService` | `string` |
| `CustomerService` | `string` |
| `DefaultSearchService` | `string` |
| `DiscountService` | `string` |
| `DraftOrderService` | `string` |
| `EventBusService` | `string` |
| `FulfillmentProviderService` | `string` |
| `FulfillmentService` | `string` |
| `GiftCardService` | `string` |
| `InventoryService` | `string` |
| `LineItemService` | `string` |
| `MiddlewareService` | `string` |
| `NotificationService` | `string` |
| `OrderService` | `string` |
| `PaymentProviderService` | `string` |
| `ProductCollectionService` | `string` |
| `ProductService` | `string` |
| `ProductVariantService` | `string` |
| `RegionService` | `string` |
| `ShippingOptionService` | `string` |
| `ShippingProfileService` | `string` |
| `StoreService` | `string` |
| `TotalsService` | `string` |
| `UserService` | `string` |
| `logger` | `string` |
| `manager` | `string` |
| `requestContext` | `string` |

#### Defined in

[src/types.ts:18](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L18)
