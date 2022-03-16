[medusa-extender](../README.md) / [Exports](../modules.md) / [core/types](../modules/core_types.md) / MedusaMiddleware

# Interface: MedusaMiddleware

[core/types](../modules/core_types.md).MedusaMiddleware

**`interface`**
Describe a custom middleware instance.

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/types.ts#L152)
=======
[src/core/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/types.ts#L152)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/types.ts#L152)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
