[medusa-extender](../README.md) / [Exports](../modules.md) / core/utils

# Module: core/utils

## Table of contents

### Functions

- [attachOrReplaceEntitySubscriber](core_utils.md#attachorreplaceentitysubscriber)
- [repositoryMixin](core_utils.md#repositorymixin)

## Functions

### attachOrReplaceEntitySubscriber

▸ **attachOrReplaceEntitySubscriber**<`T`\>(`connection`, `Subscriber`, `transactionalEntityManager?`): `void`

Attach a new subscriber to a specific entities.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](core_types.md#constructor)<`EntitySubscriberInterface`<`unknown`\>\> |

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
[src/core/utils.ts:30](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/utils.ts#L30)
=======
[src/core/utils.ts:30](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/utils.ts#L30)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/utils.ts:30](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/utils.ts#L30)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### repositoryMixin

▸ **repositoryMixin**<`TEntity`, `TSource`\>(`source`): [`MixinReturnType`](core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

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
| `source` | [`Constructor`](core_types.md#constructor)<`TSource`\> |

#### Returns

[`MixinReturnType`](core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/utils.ts:10](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/utils.ts#L10)
=======
[src/core/utils.ts:10](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/utils.ts#L10)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/utils.ts:10](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/utils.ts#L10)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
