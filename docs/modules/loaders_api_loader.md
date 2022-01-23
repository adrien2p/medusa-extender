[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/api.loader

# Module: loaders/api.loader

## Table of contents

### Functions

- [apiLoader](loaders_api_loader.md#apiloader)

## Functions

### apiLoader

▸ **apiLoader**(`app`): `Promise`<`void`\>

**`internal`**
Decorate the original api loader to apply our custom middleware first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Express` | Express app |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/api.loader.ts:10](https://github.com/adrien2p/medusa-extender/blob/2b98a6d/src/loaders/api.loader.ts#L10)
