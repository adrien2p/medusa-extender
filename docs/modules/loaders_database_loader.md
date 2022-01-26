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
| `entities` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"entity"``\> | Custom entities options |
| `repositories` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"repository"``\> | Custom repositories options |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/database.loader.ts:11](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/database.loader.ts#L11)
