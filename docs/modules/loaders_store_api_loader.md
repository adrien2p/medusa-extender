[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/store-api.loader

# Module: loaders/store-api.loader

## Table of contents

### Functions

- [storeApiLoader](loaders_store_api_loader.md#storeapiloader)

## Functions

### storeApiLoader

▸ **storeApiLoader**(`app`, `middlewares`, `routers`): `Promise`<`void`\>

**`internal`**
Apply middlewares and routes on store API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |
| `routers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"router"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/store-api.loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/store-api.loader.ts#L13)
