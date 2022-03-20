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
| `container` | `AwilixContainer`<`any`\> |
| `serviceOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/loaders/services.loader.ts:55](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/services.loader.ts#L55)

___

### registerService

▸ **registerService**(`container`, `serviceOptions`, `configModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |
| `serviceOptions` | [`GetInjectableOption`](core_types.md#getinjectableoption)<``"service"``\> |
| `configModule` | `Record`<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[src/loaders/services.loader.ts:40](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/services.loader.ts#L40)

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

[src/loaders/services.loader.ts:12](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/loaders/services.loader.ts#L12)
