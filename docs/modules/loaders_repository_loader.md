[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/repository.loader

# Module: loaders/repository.loader

## Table of contents

### Functions

- [overrideRepositoriesLoader](loaders_repository_loader.md#overriderepositoriesloader)
- [repositoriesLoader](loaders_repository_loader.md#repositoriesloader)

## Functions

### overrideRepositoriesLoader

▸ **overrideRepositoriesLoader**(`repositories`): `Promise`<`void`\>

**`internal`**
Load all custom repositories that override @medusajs instance entities.

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositories` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"repository"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:37](https://github.com/octalpixel/medusa-extender/blob/1a4be63/src/loaders/repository.loader.ts#L37)

___

### repositoriesLoader

▸ **repositoriesLoader**(`repositories`, `container`): `Promise`<`void`\>

**`internal`**
Load all custom repositories into the underlying @medusajs instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositories` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"repository"``\> |
| `container` | `AwilixContainer`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:14](https://github.com/octalpixel/medusa-extender/blob/1a4be63/src/loaders/repository.loader.ts#L14)
