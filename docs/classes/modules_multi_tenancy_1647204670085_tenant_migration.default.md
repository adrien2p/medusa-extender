[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/1647204670085-tenant.migration](../modules/modules_multi_tenancy_1647204670085_tenant_migration.md) / default

# Class: default

[modules/multi-tenancy/1647204670085-tenant.migration](../modules/modules_multi_tenancy_1647204670085_tenant_migration.md).default

## Implements

- `MigrationInterface`

## Table of contents

### Constructors

- [constructor](modules_multi_tenancy_1647204670085_tenant_migration.default.md#constructor)

### Properties

- [name](modules_multi_tenancy_1647204670085_tenant_migration.default.md#name)

### Methods

- [down](modules_multi_tenancy_1647204670085_tenant_migration.default.md#down)
- [up](modules_multi_tenancy_1647204670085_tenant_migration.default.md#up)

## Constructors

### constructor

• **new default**()

## Properties

### name

• **name**: `string` = `'TenantMigration1647204670085'`

#### Implementation of

MigrationInterface.name

#### Defined in

[src/modules/multi-tenancy/1647204670085-tenant.migration.ts:6](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/modules/multi-tenancy/1647204670085-tenant.migration.ts#L6)

## Methods

### down

▸ **down**(`queryRunner`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryRunner` | `QueryRunner` |

#### Returns

`Promise`<`void`\>

#### Implementation of

MigrationInterface.down

#### Defined in

[src/modules/multi-tenancy/1647204670085-tenant.migration.ts:24](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/modules/multi-tenancy/1647204670085-tenant.migration.ts#L24)

___

### up

▸ **up**(`queryRunner`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryRunner` | `QueryRunner` |

#### Returns

`Promise`<`void`\>

#### Implementation of

MigrationInterface.up

#### Defined in

[src/modules/multi-tenancy/1647204670085-tenant.migration.ts:8](https://github.com/octalpixel/medusa-extender/blob/317cb2f/src/modules/multi-tenancy/1647204670085-tenant.migration.ts#L8)
