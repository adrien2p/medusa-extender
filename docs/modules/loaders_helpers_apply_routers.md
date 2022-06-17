[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/helpers/apply-routers

# Module: loaders/helpers/apply-routers

## Table of contents

### Functions

- [applyAfterAuthRouters](loaders_helpers_apply_routers.md#applyafterauthrouters)
- [applyBeforeAuthRouters](loaders_helpers_apply_routers.md#applybeforeauthrouters)

## Functions

### applyAfterAuthRouters

▸ **applyAfterAuthRouters**(`app`, `routesOptions`): `void`

**`internal`**
Apply all routes on the app that must be applied after the @medusajs authentication

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `routesOptions` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"router"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/helpers/apply-routers.ts:26](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/helpers/apply-routers.ts#L26)

___

### applyBeforeAuthRouters

▸ **applyBeforeAuthRouters**(`app`, `routesOptions`): `void`

**`internal`**
Apply all routes on the app that must be applied before the @medusajs authentication

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `routesOptions` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"router"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/helpers/apply-routers.ts:10](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/helpers/apply-routers.ts#L10)
