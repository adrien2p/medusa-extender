[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/tenant.service](../modules/modules_multi_tenancy_tenant_service.md) / TenantService

# Class: TenantService

[modules/multi-tenancy/tenant.service](../modules/modules_multi_tenancy_tenant_service.md).TenantService

## Table of contents

### Constructors

- [constructor](modules_multi_tenancy_tenant_service.TenantService.md#constructor)

### Properties

- [resolutionKey](modules_multi_tenancy_tenant_service.TenantService.md#resolutionkey)

### Methods

- [getOrCreateConnection](modules_multi_tenancy_tenant_service.TenantService.md#getorcreateconnection)

## Constructors

### constructor

• **new TenantService**(`_`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`MedusaContainer`](../modules/core_types.md#medusacontainer) |
| `config` | [`ConfigModule`](../modules/modules_multi_tenancy_types.md#configmodule) |

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:11](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/tenant.service.ts#L11)

## Properties

### resolutionKey

▪ `Static` `Readonly` **resolutionKey**: ``"tenantService"``

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:9](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/tenant.service.ts#L9)

## Methods

### getOrCreateConnection

▸ **getOrCreateConnection**(`defaultManager`, `req`): `Promise`<`EntityManager`\>

Provide a way to switch between database connections depending on the request property holding the tenant code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultManager` | `EntityManager` |
| `req` | [`MedusaRequest`](../modules/core_types.md#medusarequest) |

#### Returns

`Promise`<`EntityManager`\>

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:18](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/tenant.service.ts#L18)
