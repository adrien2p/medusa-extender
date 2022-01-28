[medusa-extender](../README.md) / [Exports](../modules.md) / contants

# Module: contants

## Table of contents

### Variables

- [INJECTABLE\_OPTIONS\_KEY](contants.md#injectable_options_key)
- [MEDUSA\_RESOLVER\_KEYS](contants.md#medusa_resolver_keys)
- [MODULE\_KEY](contants.md#module_key)

## Variables

### INJECTABLE\_OPTIONS\_KEY

• **INJECTABLE\_OPTIONS\_KEY**: ``"__INJECTABLE_OPTIONS_KEY__"``

Metadata key to store config from decorated injectables.

#### Defined in

[src/contants.ts:9](https://github.com/adrien2p/medusa-extender/blob/49b9503/src/contants.ts#L9)

___

### MEDUSA\_RESOLVER\_KEYS

• **MEDUSA\_RESOLVER\_KEYS**: `Object`

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

[src/contants.ts:14](https://github.com/adrien2p/medusa-extender/blob/49b9503/src/contants.ts#L14)

___

### MODULE\_KEY

• **MODULE\_KEY**: ``"__MODULE_KEY__"``

Metadata key to store config from decorated injectables.

#### Defined in

[src/contants.ts:4](https://github.com/adrien2p/medusa-extender/blob/49b9503/src/contants.ts#L4)
