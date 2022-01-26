[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/routes.loader

# Module: loaders/routes.loader

## Table of contents

### Functions

- [authenticatedRoutesLoader](loaders_routes_loader.md#authenticatedroutesloader)
- [unauthenticatedRoutesLoader](loaders_routes_loader.md#unauthenticatedroutesloader)

## Functions

### authenticatedRoutesLoader

▸ **authenticatedRoutesLoader**(`routesOptions`, `app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routesOptions` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"route"``\> |
| `app` | `Express` |

#### Returns

`void`

#### Defined in

[src/loaders/routes.loader.ts:4](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/routes.loader.ts#L4)

___

### unauthenticatedRoutesLoader

▸ **unauthenticatedRoutesLoader**(`routesOptions`, `app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `routesOptions` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"route"``\> |
| `app` | `Express` |

#### Returns

`void`

#### Defined in

[src/loaders/routes.loader.ts:12](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/routes.loader.ts#L12)
