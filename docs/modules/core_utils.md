[medusa-extender](../README.md) / [Exports](../modules.md) / core/utils

# Module: core/utils

## Table of contents

### Functions

- [Omit](core_utils.md#omit)
- [attachOrReplaceEntitySubscriber](core_utils.md#attachorreplaceentitysubscriber)
- [lowerCaseFirst](core_utils.md#lowercasefirst)
- [repositoryMixin](core_utils.md#repositorymixin)
- [upperCaseFirst](core_utils.md#uppercasefirst)

## Functions

### Omit

▸ **Omit**<`T`, `K`\>(`Class`, `keys`): () => `Omit`<`T`, `K`\>

Allow to omit some property from a class.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `Class` | () => `T` |
| `keys` | `K`[] |

#### Returns

`fn`

• **new Omit**()

#### Defined in

[src/core/utils.ts:53](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/core/utils.ts#L53)

___

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

[src/core/utils.ts:30](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/core/utils.ts#L30)

___

### lowerCaseFirst

▸ **lowerCaseFirst**(`str`): `string`

Lower case the first character of the input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/core/utils.ts:60](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/core/utils.ts#L60)

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

[src/core/utils.ts:10](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/core/utils.ts#L10)

___

### upperCaseFirst

▸ **upperCaseFirst**(`str`): `string`

Upper case the first character of the input string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/core/utils.ts:68](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/core/utils.ts#L68)
