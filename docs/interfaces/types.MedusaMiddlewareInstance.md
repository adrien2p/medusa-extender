[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaMiddlewareInstance

# Interface: MedusaMiddlewareInstance

[types](../modules/types.md).MedusaMiddlewareInstance

**`interface`**
Describe a custom middleware instance.

## Table of contents

### Methods

- [consume](types.MedusaMiddlewareInstance.md#consume)

## Methods

### consume

▸ **consume**(`options?`): (`req`: [`MedusaAuthenticatedRequest`](../modules/types.md#medusaauthenticatedrequest) \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>, `res`: `Response`<`any`, `Record`<`string`, `any`\>\>, `next`: `NextFunction`) => `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Record`<`string`, `unknown`\> |

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

[types.ts:82](https://github.com/adrien2p/medusa-extender/blob/7acbd92/src/types.ts#L82)
