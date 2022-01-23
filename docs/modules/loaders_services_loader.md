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
| `services` | [`MedusaServiceStatic`](../interfaces/types.MedusaServiceStatic.md)<`unknown`\>[] | Any custom service that implements MedusaService |
| `container` | `AwilixContainer`<`any`\> | The container to register the custom service or override existing one |

#### Returns

`void`

#### Defined in

[loaders/services.loader.ts:11](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/loaders/services.loader.ts#L11)
