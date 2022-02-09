[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/api.loader

# Module: loaders/api.loader

## Table of contents

### Functions

- [apiLoader](loaders_api_loader.md#apiloader)

## Functions

### apiLoader

▸ **apiLoader**(`app`, `middlewares`): `Promise`<`void`\>

**`internal`**
Decorate the original api loader to apply our custom middleware first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Express` | Express app |
| `middlewares` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"middleware"``\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/api.loader.ts:12](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/loaders/api.loader.ts#L12)
