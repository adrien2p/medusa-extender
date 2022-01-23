[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/database.loader

# Module: loaders/database.loader

## Table of contents

### Functions

- [databaseLoader](loaders_database_loader.md#databaseloader)

## Functions

### databaseLoader

▸ **databaseLoader**(`entities`, `repositories`): `Promise`<`void`\>

**`internal`**
decorate the original database loader to register our custom entities and repositories first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entities` | [`MedusaEntityStatic`](../interfaces/types.MedusaEntityStatic.md)<`unknown`\>[] | Custom entities |
| `repositories` | [`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`unknown`\>[] | Custom repositories |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/database.loader.ts:11](https://github.com/adrien2p/medusa-extender/blob/badcc5e/src/loaders/database.loader.ts#L11)
