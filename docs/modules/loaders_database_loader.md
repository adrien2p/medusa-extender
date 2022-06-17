[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/database.loader

# Module: loaders/database.loader

## Table of contents

### Functions

- [databaseLoader](loaders_database_loader.md#databaseloader)

## Functions

### databaseLoader

▸ **databaseLoader**(`entities`, `repositories`, `migrations`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entities` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"entity"``\> |
| `repositories` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"repository"``\> |
| `migrations` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"migration"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/database.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/loaders/database.loader.ts#L5)
