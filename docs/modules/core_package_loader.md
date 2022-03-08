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

[src/core/package-loader.ts:17](https://github.com/adrien2p/medusa-extender/blob/9b7daf1/src/core/package-loader.ts#L17)

___

### loadPackages

▸ **loadPackages**(`context`, `packages`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `packages` | { `name`: `string` ; `version`: `string`  }[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/package-loader.ts:4](https://github.com/adrien2p/medusa-extender/blob/9b7daf1/src/core/package-loader.ts#L4)
