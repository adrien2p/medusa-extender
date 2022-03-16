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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/package-loader.ts:41](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/package-loader.ts#L41)
=======
[src/core/package-loader.ts:41](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/package-loader.ts#L41)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/package-loader.ts:41](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/package-loader.ts#L41)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/package-loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/package-loader.ts#L13)
=======
[src/core/package-loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/package-loader.ts#L13)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/package-loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/package-loader.ts#L13)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
