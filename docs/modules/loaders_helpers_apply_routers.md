[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/helpers/apply-routers

# Module: loaders/helpers/apply-routers

## Table of contents

### Functions

- [applyRouters](loaders_helpers_apply_routers.md#applyrouters)

## Functions

### applyRouters

▸ **applyRouters**(`domain`, `app`, `routers`): `void`

**`internal`**
Apply routers according to their configuration

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | ``"admin"`` \| ``"store"`` \| ``"custom"`` |
| `app` | `Router` |
| `routers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"router"``\> |

#### Returns

`void`

#### Defined in

[loaders/helpers/apply-routers.ts:15](https://github.com/adrien2p/medusa-extender/blob/71ceaa3/src/loaders/helpers/apply-routers.ts#L15)
