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

[src/core/package-loader.ts:52](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/package-loader.ts#L52)

___

### loadPackages

▸ **loadPackages**(`logger`, `packages`): `Promise`<`void`\>

**`internal`**
Load packages at run time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger` | [`Logger`](../classes/core_logger.Logger.md) |  |
| `packages` | { `isDevDependency?`: `boolean` ; `name`: `string` ; `version`: `string`  }[] | The packages descriptors that must be installed |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/package-loader.ts:12](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/package-loader.ts#L12)
