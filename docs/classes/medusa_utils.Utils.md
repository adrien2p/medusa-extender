[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa-utils](../modules/medusa_utils.md) / Utils

# Class: Utils

[medusa-utils](../modules/medusa_utils.md).Utils

**`internal`**
Utilities helper methods.

## Table of contents

### Constructors

- [constructor](medusa_utils.Utils.md#constructor)

### Methods

- [attachOrReplaceEntitySubscriber](medusa_utils.Utils.md#attachorreplaceentitysubscriber)
- [logRoutes](medusa_utils.Utils.md#logroutes)
- [prepareLog](medusa_utils.Utils.md#preparelog)
- [printRoutes](medusa_utils.Utils.md#printroutes)
- [repositoryMixin](medusa_utils.Utils.md#repositorymixin)
- [splitRoutes](medusa_utils.Utils.md#splitroutes)

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

[medusa-utils.ts:38](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/medusa-utils.ts#L38)

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

[medusa-utils.ts:59](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/medusa-utils.ts#L59)

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

[medusa-utils.ts:68](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/medusa-utils.ts#L68)

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

[medusa-utils.ts:79](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/medusa-utils.ts#L79)

___

### repositoryMixin

▸ `Static` **repositoryMixin**<`TEntity`, `TRepository`, `OverriddenType`\>(`derivedCtor`): [`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`TRepository`, `OverriddenType`\>

For repository context, you should extends repository and the medusa target repository.
Since it is not possible to use multiple extend, you can use that utilities to apply multiple extends.

#### Type parameters

| Name |
| :------ |
| `TEntity` |
| `TRepository` |
| `OverriddenType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `derivedCtor` | [`Constructor`](../modules/types.md#constructor)<`TRepository`\> |

#### Returns

[`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`TRepository`, `OverriddenType`\>

#### Defined in

[medusa-utils.ts:16](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/medusa-utils.ts#L16)

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

[medusa-utils.ts:99](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/medusa-utils.ts#L99)
