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

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |
| `serviceOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/services.loader.ts:52](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/services.loader.ts#L52)

___

### registerService

▸ **registerService**(`container`, `serviceOptions`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`MedusaContainer`](core_types.md#medusacontainer) |
| `serviceOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/services.loader.ts:40](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/services.loader.ts#L40)

___

### servicesLoader

▸ **servicesLoader**(`services`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `services` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"service"``\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/services.loader.ts:12](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/loaders/services.loader.ts#L12)
