[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/helpers/apply-middlewares

# Module: loaders/helpers/apply-middlewares

## Table of contents

### Functions

- [applyAfterAuthMiddleware](loaders_helpers_apply_middlewares.md#applyafterauthmiddleware)
- [applyBeforeAuthMiddleware](loaders_helpers_apply_middlewares.md#applybeforeauthmiddleware)

## Functions

### applyAfterAuthMiddleware

▸ **applyAfterAuthMiddleware**(`app`, `middlewares`): `void`

**`internal`**
Apply all middlewares on the app that must be applied after the @medusajs authentication

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/helpers/apply-middlewares.ts:34](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/helpers/apply-middlewares.ts#L34)

___

### applyBeforeAuthMiddleware

▸ **applyBeforeAuthMiddleware**(`app`, `middlewares`): `void`

**`internal`**
Apply all middlewares on the app that must be applied before the @medusajs authentication

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/helpers/apply-middlewares.ts:12](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/helpers/apply-middlewares.ts#L12)
