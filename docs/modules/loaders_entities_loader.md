[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/entities.loader

# Module: loaders/entities.loader

## Table of contents

### Functions

- [entitiesLoader](loaders_entities_loader.md#entitiesloader)
- [overrideEntitiesLoader](loaders_entities_loader.md#overrideentitiesloader)
- [overrideEntity](loaders_entities_loader.md#overrideentity)
- [registerEntity](loaders_entities_loader.md#registerentity)

## Functions

### entitiesLoader

▸ **entitiesLoader**(`entities`, `container`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"entity"``\> |
| `container` | `AwilixContainer`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/b811430/src/loaders/entities.loader.ts#L5)

___

### overrideEntitiesLoader

▸ **overrideEntitiesLoader**(`entities`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"entity"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/b811430/src/loaders/entities.loader.ts#L16)

___

### overrideEntity

▸ **overrideEntity**(`entityOptions`): `Promise`<`void`\>

**`internal`**
Load custom entity and override existing ones.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityOptions` | [`GetInjectableOption`](types.md#getinjectableoption)<``"entity"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:49](https://github.com/adrien2p/medusa-extender/blob/b811430/src/loaders/entities.loader.ts#L49)

___

### registerEntity

▸ **registerEntity**(`container`, `entityOptions`): `void`

**`internal`**
Load custom entity into the container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |
| `entityOptions` | [`GetInjectableOption`](types.md#getinjectableoption)<``"entity"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/entities.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/b811430/src/loaders/entities.loader.ts#L30)
