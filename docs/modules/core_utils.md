[medusa-extender](../README.md) / [Exports](../modules.md) / core/utils

# Module: core/utils

## Table of contents

### Functions

- [Omit](core_utils.md#omit)
- [asyncLoadConfig](core_utils.md#asyncloadconfig)
- [attachOrReplaceEntitySubscriber](core_utils.md#attachorreplaceentitysubscriber)
- [buildRegexpIfValid](core_utils.md#buildregexpifvalid)
- [lowerCaseFirst](core_utils.md#lowercasefirst)
- [repositoryMixin](core_utils.md#repositorymixin)
- [upperCaseFirst](core_utils.md#uppercasefirst)

## Functions

### Omit

▸ **Omit**<`T`, `K`\>(`Class`, `keys`): () => `Omit`<`T`, `K`\>

**`deprecated`** Since this util only acts on the type and not the prototype itself, it adds more confusion for the user. It will be removed in the future
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

[core/utils.ts:55](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L55)

___

### asyncLoadConfig

▸ **asyncLoadConfig**(`rootDir?`, `filename?`): `Promise`<[`ConfigModule`](core_types.md#configmodule)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootDir?` | `string` |
| `filename?` | `string` |

#### Returns

`Promise`<[`ConfigModule`](core_types.md#configmodule)\>

#### Defined in

[core/utils.ts:86](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L86)

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

[core/utils.ts:31](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L31)

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

[core/utils.ts:74](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L74)

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

[core/utils.ts:62](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L62)

___

### repositoryMixin

▸ **repositoryMixin**<`TEntity`, `TSource`\>(`source`): [`MixinReturnType`](core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

**`deprecated`** The definition files merging the entities types allow us to get rid of this util. It will be removed in the future
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

[core/utils.ts:11](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L11)

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

[core/utils.ts:70](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/core/utils.ts#L70)
