[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/migrations.loader

# Module: loaders/migrations.loader

## Table of contents

### Functions

- [migrationsLoader](loaders_migrations_loader.md#migrationsloader)

## Functions

### migrationsLoader

▸ **migrationsLoader**(`migrationsOptions`, `dbConnection`): `Promise`<`void`\>

**`internal`**
Run custom migrations that are find from the provided directory and stored in a `migrations` subdirectory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `migrationsOptions` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"migration"``\> | Any custom migration that implements MigrationInterface |
| `dbConnection` | `Connection` | Database connection from medusa internal |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/migrations.loader.ts:10](https://github.com/adrien2p/medusa-extender/blob/0490090/src/loaders/migrations.loader.ts#L10)
