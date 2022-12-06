[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/repository.loader

# Module: loaders/repository.loader

## Table of contents

### Functions

- [overrideRepositoriesLoader](loaders_repository_loader.md#overriderepositoriesloader)
- [repositoriesLoader](loaders_repository_loader.md#repositoriesloader)

## Functions

### overrideRepositoriesLoader

▸ **overrideRepositoriesLoader**(`repositories`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repositories` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"repository"``\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/repository.loader.ts:37](https://github.com/adrien2p/medusa-extender/blob/4d59aa3/src/loaders/repository.loader.ts#L37)

___

### repositoriesLoader

▸ **repositoriesLoader**(`repositories`, `container`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repositories` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"repository"``\> |  |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/repository.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/4d59aa3/src/loaders/repository.loader.ts#L14)
