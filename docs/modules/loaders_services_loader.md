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
| `container` | `MedusaContainer` |
| `serviceOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/services.loader.ts:53](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/loaders/services.loader.ts#L53)

___

### registerService

▸ **registerService**(`container`, `serviceOptions`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `MedusaContainer` |
| `serviceOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[loaders/services.loader.ts:41](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/loaders/services.loader.ts#L41)

___

### servicesLoader

▸ **servicesLoader**(`services`): `Promise`<`void`\>

**`internal`**
Load all custom services and overridden services into the underlying @medusajs instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `services` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"service"``\> | Any custom service that implements MedusaService |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/services.loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/loaders/services.loader.ts#L13)
