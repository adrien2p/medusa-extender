[medusa-extender](../README.md) / [Exports](../modules.md) / core/package-loader

# Module: core/package-loader

## Table of contents

### Functions

- [getPackageManagerCommand](core_package_loader.md#getpackagemanagercommand)
- [loadPackages](core_package_loader.md#loadpackages)

## Functions

### getPackageManagerCommand

▸ **getPackageManagerCommand**(): `Promise`<`string` \| `never`\>

**`internal`**
Return the install command from the user package manager.

#### Returns

`Promise`<`string` \| `never`\>

#### Defined in

[src/core/package-loader.ts:32](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/package-loader.ts#L32)

___

### loadPackages

▸ **loadPackages**(`logger`, `packages`): `Promise`<`void`\>

**`internal`**
Load packages at run time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger` | [`Logger`](../classes/core_logger.Logger.md) |  |
| `packages` | { `name`: `string` ; `version`: `string`  }[] | The packages descriptors that must be installed |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/package-loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/package-loader.ts#L13)
