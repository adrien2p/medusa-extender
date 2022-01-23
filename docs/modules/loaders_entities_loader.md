[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/entities.loader

# Module: loaders/entities.loader

## Table of contents

### Functions

- [entitiesLoader](loaders_entities_loader.md#entitiesloader)
- [overriddenEntitiesLoader](loaders_entities_loader.md#overriddenentitiesloader)

## Functions

### entitiesLoader

▸ **entitiesLoader**(`entities`, `container`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`MedusaEntityStatic`](../interfaces/types.MedusaEntityStatic.md)<`unknown`\>[] |
| `container` | `AwilixContainer`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/entities.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/loaders/entities.loader.ts#L14)

___

### overriddenEntitiesLoader

▸ **overriddenEntitiesLoader**(`entities`): `Promise`<`void`\>

**`internal`**
Load custom entities that must override the existing entities from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`MedusaEntityStatic`](../interfaces/types.MedusaEntityStatic.md)<`unknown`\>[] | Any custom entity that implements MedusaEntity |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/entities.loader.ts:10](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/loaders/entities.loader.ts#L10)
