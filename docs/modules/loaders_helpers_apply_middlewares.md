[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/helpers/apply-middlewares

# Module: loaders/helpers/apply-middlewares

## Table of contents

### Functions

- [applyMiddlewares](loaders_helpers_apply_middlewares.md#applymiddlewares)

## Functions

### applyMiddlewares

▸ **applyMiddlewares**(`domain`, `app`, `middlewares`): `void`

**`internal`**
Apply middlewares according to their configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | ``"admin"`` \| ``"store"`` \| ``"custom"`` |
| `app` | `Router` |
| `middlewares` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[loaders/helpers/apply-middlewares.ts:15](https://github.com/adrien2p/medusa-extender/blob/71ceaa3/src/loaders/helpers/apply-middlewares.ts#L15)
