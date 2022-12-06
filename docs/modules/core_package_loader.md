[medusa-extender](../README.md) / [Exports](../modules.md) / core/package-loader

# Module: core/package-loader

## Table of contents

### Functions

- [getPackageManagerCommand](core_package_loader.md#getpackagemanagercommand)
- [loadPackages](core_package_loader.md#loadpackages)

## Functions

### getPackageManagerCommand

▸ **getPackageManagerCommand**(): `Promise`<`string` \| `never`\>

#### Returns

`Promise`<`string` \| `never`\>

#### Defined in

[core/package-loader.ts:52](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/package-loader.ts#L52)

___

### loadPackages

▸ **loadPackages**(`logger`, `packages`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logger` | [`Logger`](../classes/core_logger.Logger.md) |  |
| `packages` | { `isDevDependency?`: `boolean` ; `name`: `string` ; `version`: `string`  }[] |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[core/package-loader.ts:12](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/package-loader.ts#L12)
