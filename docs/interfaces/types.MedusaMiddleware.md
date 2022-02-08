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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/types.ts:135](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L135)
=======
[src/types.ts:145](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L145)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/types.ts:145](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L145)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L152)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/types.ts:152](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/types.ts#L152)
=======
[src/types.ts:135](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/types.ts#L135)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/types.ts:145](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/types.ts#L145)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/types.ts:145](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/types.ts#L145)
=======
[src/types.ts:145](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/types.ts#L145)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/types.ts:145](https://github.com/adrien2p/medusa-extender/blob/0490090/src/types.ts#L145)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC
