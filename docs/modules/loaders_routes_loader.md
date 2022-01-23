[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/routes.loader

# Module: loaders/routes.loader

## Table of contents

### Functions

- [authenticatedRoutesLoader](loaders_routes_loader.md#authenticatedroutesloader)
- [unauthenticatedRoutesLoader](loaders_routes_loader.md#unauthenticatedroutesloader)

## Functions

### authenticatedRoutesLoader

▸ **authenticatedRoutesLoader**(`allRoutes`, `app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allRoutes` | [`MedusaRoute`](types.md#medusaroute)[][] |
| `app` | `Express` |

#### Returns

`void`

#### Defined in

[loaders/routes.loader.ts:4](https://github.com/adrien2p/medusa-extender/blob/2b98a6d/src/loaders/routes.loader.ts#L4)

___

### unauthenticatedRoutesLoader

▸ **unauthenticatedRoutesLoader**(`allRoutes`, `app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `allRoutes` | [`MedusaRoute`](types.md#medusaroute)[][] |
| `app` | `Express` |

#### Returns

`void`

#### Defined in

[loaders/routes.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/2b98a6d/src/loaders/routes.loader.ts#L14)
