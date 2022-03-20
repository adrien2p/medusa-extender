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

**`internal`**
Load all custom entities into the underlying @medusajs instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"entity"``\> |
| `container` | `AwilixContainer`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:13](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/entities.loader.ts#L13)

___

### overrideEntitiesLoader

▸ **overrideEntitiesLoader**(`entities`): `Promise`<`void`\>

**`internal`**
Load all custom entities that override @medusajs instance entities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"entity"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:36](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/entities.loader.ts#L36)

___

### overrideEntity

▸ **overrideEntity**(`entityOptions`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entityOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"entity"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:63](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/entities.loader.ts#L63)

___

### registerEntity

▸ **registerEntity**(`container`, `entityOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |
| `entityOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"entity"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/entities.loader.ts:51](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/entities.loader.ts#L51)
