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

• **new TenantService**()

## Properties

### resolutionKey

▪ `Static` `Readonly` **resolutionKey**: ``"tenantService"``

#### Defined in

[modules/multi-tenancy/tenant.service.ts:10](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/modules/multi-tenancy/tenant.service.ts#L10)

## Methods

### getOrCreateConnection

▸ **getOrCreateConnection**(`defaultManager`, `req`): `Promise`<`EntityManager`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultManager` | `EntityManager` |  |
| `req` | [`MedusaRequest`](../modules/core_types.md#medusarequest) |  |

#### Returns

`Promise`<`EntityManager`\>

#### Defined in

[modules/multi-tenancy/tenant.service.ts:17](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/modules/multi-tenancy/tenant.service.ts#L17)
