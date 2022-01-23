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
| `repositories` | [`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`unknown`\>[] | Any custom repository that implements MedusaRepository |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/repository.loader.ts:10](https://github.com/adrien2p/medusa-extender/blob/b528092/src/loaders/repository.loader.ts#L10)

___

### repositoriesLoader

▸ **repositoriesLoader**(`repositories`, `container`): `Promise`<`void`\>

**`internal`**
Load custom repositories that must be added to the existing container from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repositories` | [`MedusaRepositoryStatic`](../interfaces/types.MedusaRepositoryStatic.md)<`unknown`\>[] | Any custom repository that implements MedusaRepository |
| `container` | `AwilixContainer`<`any`\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/repository.loader.ts:20](https://github.com/adrien2p/medusa-extender/blob/b528092/src/loaders/repository.loader.ts#L20)
