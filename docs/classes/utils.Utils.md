[medusa-extender](../README.md) / [Exports](../modules.md) / [utils](../modules/utils.md) / Utils

# Class: Utils

[utils](../modules/utils.md).Utils

**`internal`**
Utilities helper methods.

## Table of contents

### Constructors

- [constructor](utils.Utils.md#constructor)

### Methods

- [attachOrReplaceEntitySubscriber](utils.Utils.md#attachorreplaceentitysubscriber)
- [log](utils.Utils.md#log)
- [logRoutes](utils.Utils.md#logroutes)
- [printRoutes](utils.Utils.md#printroutes)
- [repositoryMixin](utils.Utils.md#repositorymixin)
- [splitRoutes](utils.Utils.md#splitroutes)

## Constructors

### constructor

• **new Utils**()

## Methods

### attachOrReplaceEntitySubscriber

▸ `Static` **attachOrReplaceEntitySubscriber**<`T`\>(`connection`, `Subscriber`, `transactionalEntityManager?`): `void`

Attach a new subscriber to a specific entities.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](../modules/types.md#constructor)<`EntitySubscriberInterface`<`unknown`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | `Connection` | The database connection |
| `Subscriber` | `T` | The subscriber to attach |
| `transactionalEntityManager?` | `EntityManager` | The transactional entity manager to pass the transaction through |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/utils.ts:38](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L38)
=======
[src/utils.ts:38](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/utils.ts#L38)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/utils.ts:38](https://github.com/adrien2p/medusa-extender/blob/0490090/src/utils.ts#L38)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/utils.ts:36](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L36)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/utils.ts:36](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L36)
=======
[src/utils.ts:38](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L38)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### log

▸ `Static` **log**(`context`, `description`, ...`variables`): `void`

Prepare the log to be shown to be consistent everywhere.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `string` | Where the log comes from |
| `description` | `string` | The description of the action logged |
| `...variables` | `string`[] | The variable that populate the logs |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/utils.ts:69](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L69)
=======
[src/utils.ts:69](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/utils.ts#L69)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/utils.ts:69](https://github.com/adrien2p/medusa-extender/blob/0490090/src/utils.ts#L69)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/utils.ts:67](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L67)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/utils.ts:67](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L67)
=======
[src/utils.ts:69](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L69)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### logRoutes

▸ `Static` **logRoutes**(`express`): `void`

Log all the routes from the express instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `express` | `Express` | Express instance |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/utils.ts:59](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L59)
=======
[src/utils.ts:59](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/utils.ts#L59)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/utils.ts:59](https://github.com/adrien2p/medusa-extender/blob/0490090/src/utils.ts#L59)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/utils.ts:57](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L57)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/utils.ts:57](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L57)
=======
[src/utils.ts:59](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L59)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### printRoutes

▸ `Static` `Private` **printRoutes**(`path`, `layer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |
| `layer` | `any` |

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/utils.ts:83](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L83)
=======
[src/utils.ts:83](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/utils.ts#L83)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/utils.ts:83](https://github.com/adrien2p/medusa-extender/blob/0490090/src/utils.ts#L83)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/utils.ts:81](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L81)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/utils.ts:81](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L81)
=======
[src/utils.ts:83](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L83)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### repositoryMixin

▸ `Static` **repositoryMixin**<`TEntity`, `TSource`\>(`source`): [`MixinReturnType`](../modules/types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

For repository context, you should extends repository and the medusa target repository.
Since it is not possible to use multiple extend, you can use that utilities to apply multiple extends.

#### Type parameters

| Name |
| :------ |
| `TEntity` |
| `TSource` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Constructor`](../modules/types.md#constructor)<`TSource`\> |

#### Returns

[`MixinReturnType`](../modules/types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L16)
=======
[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/utils.ts#L16)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/0490090/src/utils.ts#L16)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L16)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L16)
=======
[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L16)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section

___

### splitRoutes

▸ `Static` `Private` **splitRoutes**(`thing`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `thing` | `string` \| `RegExp` & { `fast_slash`: `boolean`  } |

#### Returns

`string` \| `string`[]

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/utils.ts:103](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L103)
=======
[src/utils.ts:103](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/utils.ts#L103)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/utils.ts:103](https://github.com/adrien2p/medusa-extender/blob/0490090/src/utils.ts#L103)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/utils.ts:101](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L101)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
[src/utils.ts:101](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/utils.ts#L101)
=======
[src/utils.ts:103](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/utils.ts#L103)
>>>>>>> 26ad56d... Feat() Update README decorators section
>>>>>>> 7a00f8d... Feat() Update README decorators section
