[medusa-extender](../README.md) / [Exports](../modules.md) / [core/types](../modules/core_types.md) / MedusaMiddleware

# Interface: MedusaMiddleware

[core/types](../modules/core_types.md).MedusaMiddleware

**`interface`**
Describe a custom middleware instance.

## Implemented by

- [`TenantMiddleware`](../classes/modules_multi_tenancy_tenant_middleware.TenantMiddleware.md)

## Table of contents

### Methods

- [consume](core_types.MedusaMiddleware.md#consume)

## Methods

### consume

▸ **consume**(`req`, `res`, `next`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`MedusaAuthenticatedRequest`](../modules/core_types.md#medusaauthenticatedrequest) \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/core/types.ts:181](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/types.ts#L181)
