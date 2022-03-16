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

<<<<<<< HEAD
[src/loaders/helpers/apply-middlewares.ts:40](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/loaders/helpers/apply-middlewares.ts#L40)
=======
[src/loaders/helpers/apply-middlewares.ts:40](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/loaders/helpers/apply-middlewares.ts#L40)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

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

<<<<<<< HEAD
[src/loaders/helpers/apply-middlewares.ts:18](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/loaders/helpers/apply-middlewares.ts#L18)
=======
[src/loaders/helpers/apply-middlewares.ts:18](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/loaders/helpers/apply-middlewares.ts#L18)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
