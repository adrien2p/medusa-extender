[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/admin-api.loader

# Module: loaders/admin-api.loader

## Table of contents

### Functions

- [adminApiLoader](loaders_admin_api_loader.md#adminapiloader)

## Functions

### adminApiLoader

▸ **adminApiLoader**(`app`, `middlewares`, `routers`): `Promise`<`void`\>

**`internal`**
Apply middlewares and routes on the underlying @medusajs admin API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |
| `routers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"router"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/admin-api.loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/admin-api.loader.ts#L13)
