[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/tenant.service](../modules/modules_multi_tenancy_tenant_service.md) / TenantService

# Class: TenantService

[modules/multi-tenancy/tenant.service](../modules/modules_multi_tenancy_tenant_service.md).TenantService

## Table of contents

### Constructors

- [constructor](modules_multi_tenancy_tenant_service.TenantService.md#constructor)

### Properties

- [#tenantRepository](modules_multi_tenancy_tenant_service.TenantService.md##tenantrepository)
- [resolutionKey](modules_multi_tenancy_tenant_service.TenantService.md#resolutionkey)

### Methods

- [getOrCreateConnection](modules_multi_tenancy_tenant_service.TenantService.md#getorcreateconnection)

## Constructors

### constructor

• **new TenantService**(`container`, `config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`ConstructorParams`](../modules/modules_multi_tenancy_tenant_service.Internals.md#constructorparams) |
| `config` | [`ConfigModule`](../modules/modules_multi_tenancy_types.md#configmodule) |

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:18](https://github.com/adrien2p/medusa-extender/blob/6404d7f/src/modules/multi-tenancy/tenant.service.ts#L18)

## Properties

### #tenantRepository

• `Private` `Readonly` **#tenantRepository**: typeof [`default`](modules_multi_tenancy_tenant_repository.default.md)

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:16](https://github.com/adrien2p/medusa-extender/blob/6404d7f/src/modules/multi-tenancy/tenant.service.ts#L16)

___

### resolutionKey

▪ `Static` `Readonly` **resolutionKey**: ``"tenantService"``

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:14](https://github.com/adrien2p/medusa-extender/blob/6404d7f/src/modules/multi-tenancy/tenant.service.ts#L14)

## Methods

### getOrCreateConnection

▸ **getOrCreateConnection**(`defaultManager`, `req`): `Promise`<`EntityManager`\>

Provide a way to switch between database connections depending on the request property holding the tenant code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultManager` | `EntityManager` |
| `req` | [`MedusaRequest`](../modules/core_types.md#medusarequest)<`unknown`, `Record`<`string`, `unknown`\>\> |

#### Returns

`Promise`<`EntityManager`\>

#### Defined in

[src/modules/multi-tenancy/tenant.service.ts:27](https://github.com/adrien2p/medusa-extender/blob/6404d7f/src/modules/multi-tenancy/tenant.service.ts#L27)
