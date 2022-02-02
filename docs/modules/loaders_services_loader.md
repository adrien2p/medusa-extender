[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/services.loader

# Module: loaders/services.loader

## Table of contents

### Functions

- [overrideService](loaders_services_loader.md#overrideservice)
- [registerService](loaders_services_loader.md#registerservice)
- [servicesLoader](loaders_services_loader.md#servicesloader)

## Functions

### overrideService

▸ **overrideService**(`container`, `serviceOptions`, `configModule`): `void`

**`internal`**
Load custom service and override existing ones.

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |
| `serviceOptions` | [`GetInjectableOption`](types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/loaders/services.loader.ts:55](https://github.com/adrien2p/medusa-extender/blob/15f0d2f/src/loaders/services.loader.ts#L55)

___

### registerService

▸ **registerService**(`container`, `serviceOptions`, `configModule`): `void`

**`internal`**
Load custom service into the container.

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |
| `serviceOptions` | [`GetInjectableOption`](types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/loaders/services.loader.ts:31](https://github.com/adrien2p/medusa-extender/blob/15f0d2f/src/loaders/services.loader.ts#L31)

___

### servicesLoader

▸ **servicesLoader**(`services`): `Promise`<`void`\>

**`internal`**
Load custom services from the rootDir.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `services` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"service"``\> | Any custom service that implements MedusaService |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/services.loader.ts:9](https://github.com/adrien2p/medusa-extender/blob/15f0d2f/src/loaders/services.loader.ts#L9)
