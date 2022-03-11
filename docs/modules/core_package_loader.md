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

[src/core/package-loader.ts:29](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/core/package-loader.ts#L29)

___

### loadPackages

▸ **loadPackages**(`context`, `packages`): `Promise`<`void`\>

**`internal`**

Load packages at run time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `string` | The context string description for which it is executed |
| `packages` | { `name`: `string` ; `version`: `string`  }[] | The packages descriptors that must be installed |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/package-loader.ts:11](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/core/package-loader.ts#L11)
