[medusa-extender](../README.md) / [Exports](../modules.md) / core/utils

# Module: core/utils

## Table of contents

### Functions

- [Omit](core_utils.md#omit)
- [attachOrReplaceEntitySubscriber](core_utils.md#attachorreplaceentitysubscriber)
- [buildRegexpIfValid](core_utils.md#buildregexpifvalid)
- [lowerCaseFirst](core_utils.md#lowercasefirst)
- [repositoryMixin](core_utils.md#repositorymixin)
- [upperCaseFirst](core_utils.md#uppercasefirst)

## Functions

### Omit

▸ **Omit**<`T`, `K`\>(`Class`, `keys`): () => `Omit`<`T`, `K`\>

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

[core/utils.ts:52](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/utils.ts#L52)

___

### attachOrReplaceEntitySubscriber

▸ **attachOrReplaceEntitySubscriber**<`T`\>(`connection`, `Subscriber`, `transactionalEntityManager?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](core_types.md#constructor)<`EntitySubscriberInterface`<`unknown`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | `Connection` |  |
| `Subscriber` | `T` |  |
| `transactionalEntityManager?` | `EntityManager` |  |

#### Returns

`void`

#### Defined in

[core/utils.ts:29](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/utils.ts#L29)

___

### buildRegexpIfValid

▸ **buildRegexpIfValid**(`str`): `RegExp` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`RegExp` \| `undefined`

#### Defined in

[core/utils.ts:71](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/utils.ts#L71)

___

### lowerCaseFirst

▸ **lowerCaseFirst**(`str`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |

#### Returns

`string`

#### Defined in

[core/utils.ts:59](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/utils.ts#L59)

___

### repositoryMixin

▸ **repositoryMixin**<`TEntity`, `TSource`\>(`source`): [`MixinReturnType`](core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

#### Type parameters

| Name |
| :------ |
| `TEntity` |
| `TSource` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Constructor`](core_types.md#constructor)<`TSource`\> |  |

#### Returns

[`MixinReturnType`](core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

#### Defined in

[core/utils.ts:9](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/utils.ts#L9)

___

### upperCaseFirst

▸ **upperCaseFirst**(`str`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` |  |

#### Returns

`string`

#### Defined in

[core/utils.ts:67](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/core/utils.ts#L67)
