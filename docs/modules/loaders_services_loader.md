[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/services.loader

# Module: loaders/services.loader

## Table of contents

### Functions

- [servicesLoader](loaders_services_loader.md#servicesloader)

## Functions

### servicesLoader

▸ **servicesLoader**(`services`, `container`): `void`

**`internal`**
Load custom services from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `services` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"service"``\> | Any custom service that implements MedusaService |
| `container` | `AwilixContainer`<`any`\> | The container to register the custom service under custom-medusa-extender or override existing one |

#### Returns

`void`

#### Defined in

[src/loaders/services.loader.ts:11](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/loaders/services.loader.ts#L11)
