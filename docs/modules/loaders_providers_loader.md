[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/providers.loader

# Module: loaders/providers.loader

## Table of contents

### Functions

- [registerProvider](loaders_providers_loader.md#registerprovider)
- [registerProviders](loaders_providers_loader.md#registerproviders)

## Functions

### registerProvider

▸ **registerProvider**(`container`, `options`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `MedusaContainer` |
| `options` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"provider"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/providers.loader.ts:20](https://github.com/adrien2p/medusa-extender/blob/03cec4f/src/loaders/providers.loader.ts#L20)

___

### registerProviders

▸ **registerProviders**(`container`, `providers`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `MedusaContainer` |
| `providers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"provider"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/providers.loader.ts:8](https://github.com/adrien2p/medusa-extender/blob/03cec4f/src/loaders/providers.loader.ts#L8)
