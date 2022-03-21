[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/types](../modules/modules_multi_tenancy_types.md) / MultiTenancyOptions

# Interface: MultiTenancyOptions

[modules/multi-tenancy/types](../modules/modules_multi_tenancy_types.md).MultiTenancyOptions

## Table of contents

### Properties

- [enable](modules_multi_tenancy_types.MultiTenancyOptions.md#enable)

### Methods

- [tenantCodeResolver](modules_multi_tenancy_types.MultiTenancyOptions.md#tenantcoderesolver)

## Properties

### enable

• **enable**: `boolean`

#### Defined in

[src/modules/multi-tenancy/types.ts:10](https://github.com/adrien2p/medusa-extender/blob/83dceb0/src/modules/multi-tenancy/types.ts#L10)

## Methods

### tenantCodeResolver

▸ **tenantCodeResolver**(`req`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`MedusaRequest`](../modules/core_types.md#medusarequest)<`unknown`, `Record`<`string`, `unknown`\>\> |

#### Returns

`string`

#### Defined in

[src/modules/multi-tenancy/types.ts:11](https://github.com/adrien2p/medusa-extender/blob/83dceb0/src/modules/multi-tenancy/types.ts#L11)
