[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/repository.loader

# Module: loaders/repository.loader

## Table of contents

### Functions

- [overriddenRepositoriesLoader](loaders_repository_loader.md#overriddenrepositoriesloader)
- [repositoriesLoader](loaders_repository_loader.md#repositoriesloader)

## Functions

### overriddenRepositoriesLoader

▸ **overriddenRepositoriesLoader**(`repositories`): `Promise`<`void`\>

**`internal`**
Load custom repositories that must override the existing repositories from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repositories` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"repository"``\> | Any custom repository that implements MedusaRepository |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:10](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/repository.loader.ts#L10)

___

### repositoriesLoader

▸ **repositoriesLoader**(`repositories`, `container`): `Promise`<`void`\>

**`internal`**
Load custom repositories that must be added to the existing container from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repositories` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"repository"``\> | Any custom repository that implements MedusaRepository |
| `container` | `AwilixContainer`<`any`\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:23](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loaders/repository.loader.ts#L23)
