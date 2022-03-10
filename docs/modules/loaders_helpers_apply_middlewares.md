[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/helpers/apply-middlewares

# Module: loaders/helpers/apply-middlewares

## Table of contents

### Functions

- [applyAfterAuthMiddleware](loaders_helpers_apply_middlewares.md#applyafterauthmiddleware)
- [applyBeforeAuthMiddleware](loaders_helpers_apply_middlewares.md#applybeforeauthmiddleware)

## Functions

### applyAfterAuthMiddleware

▸ **applyAfterAuthMiddleware**(`app`, `middlewares`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/helpers/apply-middlewares.ts:18](https://github.com/adrien2p/medusa-extender/blob/4eae4d9/src/loaders/helpers/apply-middlewares.ts#L18)

___

### applyBeforeAuthMiddleware

▸ **applyBeforeAuthMiddleware**(`app`, `middlewares`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/helpers/apply-middlewares.ts:5](https://github.com/adrien2p/medusa-extender/blob/4eae4d9/src/loaders/helpers/apply-middlewares.ts#L5)
