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

[src/loaders/routes.loader.ts:8](https://github.com/adrien2p/medusa-extender/blob/31f6975/src/loaders/routes.loader.ts#L8)

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

[src/loaders/routes.loader.ts:18](https://github.com/adrien2p/medusa-extender/blob/31f6975/src/loaders/routes.loader.ts#L18)
