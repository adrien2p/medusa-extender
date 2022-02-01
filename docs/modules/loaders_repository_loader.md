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

[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/00b341f/src/loaders/repository.loader.ts#L16)

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

[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/00b341f/src/loaders/repository.loader.ts#L48)

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

[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/00b341f/src/loaders/repository.loader.ts#L30)

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

[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/00b341f/src/loaders/repository.loader.ts#L5)
