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
- [logRoutes](utils.Utils.md#logroutes)
- [prepareLog](utils.Utils.md#preparelog)
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

[src/utils.ts:40](https://github.com/adrien2p/medusa-extender/blob/daed756/src/utils.ts#L40)

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

[src/utils.ts:61](https://github.com/adrien2p/medusa-extender/blob/daed756/src/utils.ts#L61)

___

### prepareLog

▸ `Static` **prepareLog**(`context`, `description`): `string`

Prepare the log to be shown to be consistent everywhere.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `string` | Where the log comes from |
| `description` | `string` | The description of the action logged |

#### Returns

`string`

#### Defined in

[src/utils.ts:70](https://github.com/adrien2p/medusa-extender/blob/daed756/src/utils.ts#L70)

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

[src/utils.ts:81](https://github.com/adrien2p/medusa-extender/blob/daed756/src/utils.ts#L81)

___

### repositoryMixin

▸ `Static` **repositoryMixin**<`TRepository`, `TMedusaRepository`\>(`target`, `source`): `TRepository` & `TMedusaRepository`

For repository context, you should extends repository and the medusa target repository.
Since it is not possible to use multiple extend, you can use that utilities to apply multiple extends.

#### Type parameters

| Name |
| :------ |
| `TRepository` |
| `TMedusaRepository` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TRepository` |
| `source` | `TMedusaRepository` |

#### Returns

`TRepository` & `TMedusaRepository`

#### Defined in

[src/utils.ts:17](https://github.com/adrien2p/medusa-extender/blob/daed756/src/utils.ts#L17)

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

[src/utils.ts:101](https://github.com/adrien2p/medusa-extender/blob/daed756/src/utils.ts#L101)
