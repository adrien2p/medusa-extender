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

[src/utils.ts:39](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/utils.ts#L39)

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

[src/utils.ts:60](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/utils.ts#L60)

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

[src/utils.ts:69](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/utils.ts#L69)

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

[src/utils.ts:80](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/utils.ts#L80)

___

### repositoryMixin

▸ `Static` **repositoryMixin**<`TRepository`, `TMedusaRepository`\>(`derivedCtor`, `medusaConstructor`): `TRepository` & `TMedusaRepository`

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
| `derivedCtor` | `TRepository` |
| `medusaConstructor` | `TMedusaRepository` |

#### Returns

`TRepository` & `TMedusaRepository`

#### Defined in

[src/utils.ts:17](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/utils.ts#L17)

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

[src/utils.ts:100](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/utils.ts#L100)
