[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/repository.loader

# Module: loaders/repository.loader

## Table of contents

### Functions

- [overrideRepositoriesLoader](loaders_repository_loader.md#overriderepositoriesloader)
- [overrideRepository](loaders_repository_loader.md#overriderepository)
- [registerRepository](loaders_repository_loader.md#registerrepository)
- [repositoriesLoader](loaders_repository_loader.md#repositoriesloader)

## Functions

### overrideRepositoriesLoader

▸ **overrideRepositoriesLoader**(`repositories`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositories` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"repository"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:17](https://github.com/adrien2p/medusa-extender/blob/bedfabe/src/loaders/repository.loader.ts#L17)

___

### overrideRepository

▸ **overrideRepository**(`repositoryOptions`): `Promise`<`void`\>

**`internal`**
Load custom repositories and override existing ones.

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositoryOptions` | [`GetInjectableOption`](types.md#getinjectableoption)<``"repository"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:50](https://github.com/adrien2p/medusa-extender/blob/bedfabe/src/loaders/repository.loader.ts#L50)

___

### registerRepository

▸ **registerRepository**(`container`, `repositoryOptions`): `void`

**`internal`**
Load custom repository into the container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |
| `repositoryOptions` | [`GetInjectableOption`](types.md#getinjectableoption)<``"repository"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/repository.loader.ts:31](https://github.com/adrien2p/medusa-extender/blob/bedfabe/src/loaders/repository.loader.ts#L31)

___

### repositoriesLoader

▸ **repositoriesLoader**(`repositories`, `container`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `repositories` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"repository"``\> |
| `container` | `AwilixContainer`<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/repository.loader.ts:6](https://github.com/adrien2p/medusa-extender/blob/bedfabe/src/loaders/repository.loader.ts#L6)
