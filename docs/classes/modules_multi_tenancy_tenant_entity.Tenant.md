[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/tenant.entity](../modules/modules_multi_tenancy_tenant_entity.md) / Tenant

# Class: Tenant

[modules/multi-tenancy/tenant.entity](../modules/modules_multi_tenancy_tenant_entity.md).Tenant

## Table of contents

### Constructors

- [constructor](modules_multi_tenancy_tenant_entity.Tenant.md#constructor)

### Properties

- [code](modules_multi_tenancy_tenant_entity.Tenant.md#code)
- [database\_database](modules_multi_tenancy_tenant_entity.Tenant.md#database_database)
- [database\_extra](modules_multi_tenancy_tenant_entity.Tenant.md#database_extra)
- [database\_type](modules_multi_tenancy_tenant_entity.Tenant.md#database_type)
- [database\_url](modules_multi_tenancy_tenant_entity.Tenant.md#database_url)
- [id](modules_multi_tenancy_tenant_entity.Tenant.md#id)

### Methods

- [beforeInsert](modules_multi_tenancy_tenant_entity.Tenant.md#beforeinsert)

## Constructors

### constructor

• **new Tenant**()

## Properties

### code

• **code**: `string`

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:12](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L12)

___

### database\_database

• **database\_database**: `string`

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:21](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L21)

___

### database\_extra

• **database\_extra**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ssl` | { `rejectUnauthorized`: `boolean`  } |
| `ssl.rejectUnauthorized` | `boolean` |

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:24](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L24)

___

### database\_type

• **database\_type**: `string`

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:18](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L18)

___

### database\_url

• **database\_url**: `string`

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:15](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L15)

___

### id

• **id**: `string`

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:9](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L9)

## Methods

### beforeInsert

▸ `Private` **beforeInsert**(): `void`

#### Returns

`void`

#### Defined in

[src/modules/multi-tenancy/tenant.entity.ts:27](https://github.com/adrien2p/medusa-extender/blob/6d94c10/src/modules/multi-tenancy/tenant.entity.ts#L27)
