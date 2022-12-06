[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/providers.loader

# Module: loaders/providers.loader

## Table of contents

### Functions

- [registerFulfillmentProvider](loaders_providers_loader.md#registerfulfillmentprovider)
- [registerProvider](loaders_providers_loader.md#registerprovider)
- [registerProviders](loaders_providers_loader.md#registerproviders)
- [registerTaxProvider](loaders_providers_loader.md#registertaxprovider)

## Functions

### registerFulfillmentProvider

▸ **registerFulfillmentProvider**(`container`, `options`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |
| `options` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"provider"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/providers.loader.ts:53](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/providers.loader.ts#L53)

___

### registerProvider

▸ **registerProvider**(`container`, `options`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |
| `options` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"provider"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/providers.loader.ts:19](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/providers.loader.ts#L19)

___

### registerProviders

▸ **registerProviders**(`container`, `providers`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |
| `providers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"provider"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/providers.loader.ts:7](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/providers.loader.ts#L7)

___

### registerTaxProvider

▸ **registerTaxProvider**(`container`, `options`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |
| `options` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"provider"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/providers.loader.ts:29](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/providers.loader.ts#L29)
