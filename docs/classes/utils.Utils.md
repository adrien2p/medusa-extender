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

[src/utils.ts:36](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/utils.ts#L36)

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

[src/utils.ts:67](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/utils.ts#L67)

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

[src/utils.ts:57](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/utils.ts#L57)

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

[src/utils.ts:81](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/utils.ts#L81)

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

[src/utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/utils.ts#L16)

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

[src/utils.ts:101](https://github.com/adrien2p/medusa-extender/blob/b52b129/src/utils.ts#L101)
