[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/providers.decorator

# Module: decorators/providers.decorator

## Table of contents

### Type aliases

- [AllowedProviderInjectableOptions](decorators_providers_decorator.md#allowedproviderinjectableoptions)

### Functions

- [FulfillmentProvider](decorators_providers_decorator.md#fulfillmentprovider)
- [TaxProvider](decorators_providers_decorator.md#taxprovider)

## Type aliases

### AllowedProviderInjectableOptions

Ƭ **AllowedProviderInjectableOptions**: `Omit`<[`ProviderInjectableOptions`](core_types.md#providerinjectableoptions), ``"subtype"``\>

#### Defined in

[decorators/providers.decorator.ts:4](https://github.com/adrien2p/medusa-extender/blob/71ceaa3/src/decorators/providers.decorator.ts#L4)

## Functions

### FulfillmentProvider

▸ **FulfillmentProvider**(`options?`): `ClassDecorator`

Mark a class as a fulfillment provider to be used by the loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AllowedProviderInjectableOptions`](decorators_providers_decorator.md#allowedproviderinjectableoptions) |

#### Returns

`ClassDecorator`

#### Defined in

[decorators/providers.decorator.ts:20](https://github.com/adrien2p/medusa-extender/blob/71ceaa3/src/decorators/providers.decorator.ts#L20)

___

### TaxProvider

▸ **TaxProvider**(`options?`): `ClassDecorator`

Mark a class as a tax provider to be used by the loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`AllowedProviderInjectableOptions`](decorators_providers_decorator.md#allowedproviderinjectableoptions) |

#### Returns

`ClassDecorator`

#### Defined in

[decorators/providers.decorator.ts:11](https://github.com/adrien2p/medusa-extender/blob/71ceaa3/src/decorators/providers.decorator.ts#L11)
