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

<<<<<<< HEAD
<<<<<<< HEAD
[src/loaders/repository.loader.ts:37](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/loaders/repository.loader.ts#L37)
=======
[src/loaders/repository.loader.ts:37](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/loaders/repository.loader.ts#L37)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/loaders/repository.loader.ts:37](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/loaders/repository.loader.ts#L37)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/loaders/repository.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/loaders/repository.loader.ts#L14)
=======
[src/loaders/repository.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/loaders/repository.loader.ts#L14)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/loaders/repository.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/loaders/repository.loader.ts#L14)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
