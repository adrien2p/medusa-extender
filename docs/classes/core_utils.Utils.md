[medusa-extender](../README.md) / [Exports](../modules.md) / [core/utils](../modules/core_utils.md) / Utils

# Class: Utils

[core/utils](../modules/core_utils.md).Utils

**`internal`**
Utilities helper methods.

## Table of contents

### Constructors

- [constructor](core_utils.Utils.md#constructor)

### Properties

- [logs](core_utils.Utils.md#logs)

### Methods

- [attachOrReplaceEntitySubscriber](core_utils.Utils.md#attachorreplaceentitysubscriber)
- [displayLogs](core_utils.Utils.md#displaylogs)
- [hydrateLog](core_utils.Utils.md#hydratelog)
- [hydrateRouterLog](core_utils.Utils.md#hydraterouterlog)
- [repositoryMixin](core_utils.Utils.md#repositorymixin)

## Constructors

### constructor

• **new Utils**()

## Properties

### logs

▪ `Static` **logs**: `string`[][] = `[]`

#### Defined in

[src/core/utils.ts:13](https://github.com/adrien2p/medusa-extender/blob/5fdc11f/src/core/utils.ts#L13)

## Methods

### attachOrReplaceEntitySubscriber

▸ `Static` **attachOrReplaceEntitySubscriber**<`T`\>(`connection`, `Subscriber`, `transactionalEntityManager?`): `void`

Attach a new subscriber to a specific entities.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](../modules/core_types.md#constructor)<`EntitySubscriberInterface`<`unknown`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connection` | `Connection` | The database connection |
| `Subscriber` | `T` | The subscriber to attach |
| `transactionalEntityManager?` | `EntityManager` | The transactional entity manager to pass the transaction through |

#### Returns

`void`

#### Defined in

[src/core/utils.ts:40](https://github.com/adrien2p/medusa-extender/blob/5fdc11f/src/core/utils.ts#L40)

___

### displayLogs

▸ `Static` **displayLogs**(): `void`

**`internal`**
Display the logs that has been registered during the build time.

#### Returns

`void`

#### Defined in

[src/core/utils.ts:90](https://github.com/adrien2p/medusa-extender/blob/5fdc11f/src/core/utils.ts#L90)

___

### hydrateLog

▸ `Static` **hydrateLog**(`context`, `description`, ...`variables`): `void`

**`internal`**
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

[src/core/utils.ts:64](https://github.com/adrien2p/medusa-extender/blob/5fdc11f/src/core/utils.ts#L64)

___

### hydrateRouterLog

▸ `Static` **hydrateRouterLog**(`app`): `void`

**`internal`**
Prepare the logs the show all available routes on the app.

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Express` |

#### Returns

`void`

#### Defined in

[src/core/utils.ts:77](https://github.com/adrien2p/medusa-extender/blob/5fdc11f/src/core/utils.ts#L77)

___

### repositoryMixin

▸ `Static` **repositoryMixin**<`TEntity`, `TSource`\>(`source`): [`MixinReturnType`](../modules/core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

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
| `source` | [`Constructor`](../modules/core_types.md#constructor)<`TSource`\> |

#### Returns

[`MixinReturnType`](../modules/core_types.md#mixinreturntype)<`Repository`<`TEntity`\>, `TSource`\>

#### Defined in

[src/core/utils.ts:20](https://github.com/adrien2p/medusa-extender/blob/5fdc11f/src/core/utils.ts#L20)
