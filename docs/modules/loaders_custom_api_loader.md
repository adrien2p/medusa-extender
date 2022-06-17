[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/custom-api.loader

# Module: loaders/custom-api.loader

## Table of contents

### Functions

- [customApiLoader](loaders_custom_api_loader.md#customapiloader)

## Functions

### customApiLoader

▸ **customApiLoader**(`app`, `middlewares`, `routers`): `Promise`<`void`\>

**`internal`**
Apply middlewares and routes on the underlying @medusajs top API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |
| `routers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"router"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/custom-api.loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/custom-api.loader.ts#L13)
