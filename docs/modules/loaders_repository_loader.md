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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L16)
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L16)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/0490090/src/loaders/repository.loader.ts#L16)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L16)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L16)
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L16)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L16)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L16)
=======
[src/loaders/repository.loader.ts:16](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L16)
>>>>>>> 366e7bd... [BOT] BUILD DOC
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
>>>>>>> bc86ead... [BOT] BUILD DOC

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L48)
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L48)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/0490090/src/loaders/repository.loader.ts#L48)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L48)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L48)
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L48)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L48)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L48)
=======
[src/loaders/repository.loader.ts:48](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L48)
>>>>>>> 366e7bd... [BOT] BUILD DOC
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
>>>>>>> bc86ead... [BOT] BUILD DOC

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L30)
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L30)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/0490090/src/loaders/repository.loader.ts#L30)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L30)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L30)
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L30)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L30)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L30)
=======
[src/loaders/repository.loader.ts:30](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L30)
>>>>>>> 366e7bd... [BOT] BUILD DOC
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
>>>>>>> bc86ead... [BOT] BUILD DOC

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L5)
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L5)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/0490090/src/loaders/repository.loader.ts#L5)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L5)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/loaders/repository.loader.ts#L5)
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/loaders/repository.loader.ts#L5)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L5)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/loaders/repository.loader.ts#L5)
=======
[src/loaders/repository.loader.ts:5](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/loaders/repository.loader.ts#L5)
>>>>>>> 366e7bd... [BOT] BUILD DOC
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
>>>>>>> bc86ead... [BOT] BUILD DOC
