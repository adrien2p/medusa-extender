[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/entities.loader

# Module: loaders/entities.loader

## Table of contents

### Functions

- [entitiesLoader](loaders_entities_loader.md#entitiesloader)
- [overriddenEntitiesLoader](loaders_entities_loader.md#overriddenentitiesloader)

## Functions

### entitiesLoader

▸ **entitiesLoader**(`entities`, `container`): `Promise`<`void`\>

**`internal`**
Load custom entities that must be added to the container

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"entity"``\> | Any custom entities |
| `container` | `AwilixContainer`<`any`\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:23](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/entities.loader.ts#L23)

___

### overriddenEntitiesLoader

▸ **overriddenEntitiesLoader**(`entities`): `Promise`<`void`\>

**`internal`**
Load custom entities that must override the existing entities from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"entity"``\> | Any custom entities |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/entities.loader.ts:10](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/entities.loader.ts#L10)
