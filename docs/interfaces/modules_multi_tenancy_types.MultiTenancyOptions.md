[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/types](../modules/modules_multi_tenancy_types.md) / MultiTenancyOptions

# Interface: MultiTenancyOptions

[modules/multi-tenancy/types](../modules/modules_multi_tenancy_types.md).MultiTenancyOptions

## Table of contents

### Properties

- [enable](modules_multi_tenancy_types.MultiTenancyOptions.md#enable)
- [tenants](modules_multi_tenancy_types.MultiTenancyOptions.md#tenants)

### Methods

- [tenant\_code\_resolver](modules_multi_tenancy_types.MultiTenancyOptions.md#tenant_code_resolver)

## Properties

### enable

• **enable**: `boolean`

#### Defined in

[src/modules/multi-tenancy/types.ts:10](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/types.ts#L10)

___

### tenants

• **tenants**: { `code`: `string` ; `database_config`: { `database_database`: `string` ; `database_extra`: `Record`<`string`, `unknown`\> ; `database_type`: `string` ; `database_url`: `string`  }  }[]

#### Defined in

[src/modules/multi-tenancy/types.ts:12](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/types.ts#L12)

## Methods

### tenant\_code\_resolver

▸ **tenant_code_resolver**(`req`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`MedusaRequest`](../modules/core_types.md#medusarequest) |

#### Returns

`string`

#### Defined in

[src/modules/multi-tenancy/types.ts:11](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/types.ts#L11)
