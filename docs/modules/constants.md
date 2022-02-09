[medusa-extender](../README.md) / [Exports](../modules.md) / constants

# Module: constants

## Table of contents

### Variables

- [INJECTABLE\_OPTIONS\_KEY](constants.md#injectable_options_key)
- [MEDUSA\_RESOLVER\_KEYS](constants.md#medusa_resolver_keys)
- [MODULE\_KEY](constants.md#module_key)

## Variables

### INJECTABLE\_OPTIONS\_KEY

• **INJECTABLE\_OPTIONS\_KEY**: ``"__INJECTABLE_OPTIONS_KEY__"``

Metadata key to store config from decorated injectables.

#### Defined in

[src/constants.ts:9](https://github.com/adrien2p/medusa-extender/blob/1b80393/src/constants.ts#L9)

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

[src/constants.ts:14](https://github.com/adrien2p/medusa-extender/blob/1b80393/src/constants.ts#L14)

___

### MODULE\_KEY

• **MODULE\_KEY**: ``"__MODULE_KEY__"``

Metadata key to store config from decorated injectables.

#### Defined in

[src/constants.ts:4](https://github.com/adrien2p/medusa-extender/blob/1b80393/src/constants.ts#L4)
