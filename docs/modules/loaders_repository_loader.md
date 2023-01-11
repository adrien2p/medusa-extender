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

[loaders/repository.loader.ts:38](https://github.com/adrien2p/medusa-extender/blob/03cec4f/src/loaders/repository.loader.ts#L38)

___

### repositoriesLoader

▸ **repositoriesLoader**(`repositories`, `container`): `Promise`<`void`\>

**`internal`**
Load all custom repositories into the underlying @medusajs instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositories` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"repository"``\> |
| `container` | `MedusaContainer` |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/repository.loader.ts:15](https://github.com/adrien2p/medusa-extender/blob/03cec4f/src/loaders/repository.loader.ts#L15)
