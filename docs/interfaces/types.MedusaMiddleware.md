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

▸ **consume**(`options`): (`req`: [`MedusaAuthenticatedRequest`](../modules/types.md#medusaauthenticatedrequest) \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>, `res`: `Response`<`any`, `Record`<`string`, `any`\>\>, `next`: `NextFunction`) => `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.app` | `Express` |

#### Returns

`fn`

▸ (`req`, `res`, `next`): `void` \| `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`MedusaAuthenticatedRequest`](../modules/types.md#medusaauthenticatedrequest) \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
[src/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/types.ts#L152)
=======
[src/types.ts:135](https://github.com/adrien2p/medusa-extender/blob/e917dcd/src/types.ts#L135)
>>>>>>> 959e3a1... feat: rewrite documentation for more clarity
