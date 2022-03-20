[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/validators.loader

# Module: loaders/validators.loader

## Table of contents

### Functions

- [validatorsLoader](loaders_validators_loader.md#validatorsloader)

## Functions

### validatorsLoader

▸ **validatorsLoader**(`validatorsOptions`): `Promise`<`void`\>

**`internal`**
Load all custom extended validators into the underlying @medusajs instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `validatorsOptions` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"validator"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/validators.loader.ts:11](https://github.com/octalpixel/medusa-extender/blob/1a4be63/src/loaders/validators.loader.ts#L11)
