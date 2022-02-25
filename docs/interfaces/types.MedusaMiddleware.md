[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaMiddleware

# Interface: MedusaMiddleware

[types](../modules/types.md).MedusaMiddleware

**`interface`**
Describe a custom middleware instance.

## Table of contents

### Methods

- [consume](types.MedusaMiddleware.md#consume)

## Methods

### consume

▸ **consume**(`req`, `res`, `next`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> \| [`MedusaAuthenticatedRequest`](../modules/types.md#medusaauthenticatedrequest) |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[src/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/c2d2cfc/src/types.ts#L152)
