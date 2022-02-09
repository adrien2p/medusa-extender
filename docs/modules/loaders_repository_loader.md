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

<<<<<<< HEAD
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/loaders/repository.loader.ts#L16)
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/loaders/repository.loader.ts#L16)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/loaders/repository.loader.ts#L48)
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/loaders/repository.loader.ts#L48)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/loaders/repository.loader.ts#L30)
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/loaders/repository.loader.ts#L30)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/loaders/repository.loader.ts#L5)
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/loaders/repository.loader.ts#L5)
>>>>>>> 51e6b4d... feat: Add support of commitlint
