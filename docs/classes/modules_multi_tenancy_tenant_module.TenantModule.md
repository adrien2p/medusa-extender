[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/tenant.module](../modules/modules_multi_tenancy_tenant_module.md) / TenantModule

# Class: TenantModule

[modules/multi-tenancy/tenant.module](../modules/modules_multi_tenancy_tenant_module.md).TenantModule

## Implements

- [`MedusaDynamicModule`](../interfaces/core_types.MedusaDynamicModule.md)

## Table of contents

### Constructors

- [constructor](modules_multi_tenancy_tenant_module.TenantModule.md#constructor)

### Methods

- [forRoot](modules_multi_tenancy_tenant_module.TenantModule.md#forroot)

## Constructors

### constructor

• **new TenantModule**()

## Methods

### forRoot

▸ **forRoot**(`configModule`): `Promise`<[`ModuleInjectionOptions`](../modules/core_types.md#moduleinjectionoptions)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configModule` | [`ConfigModule`](../modules/modules_multi_tenancy_types.md#configmodule) |

#### Returns

`Promise`<[`ModuleInjectionOptions`](../modules/core_types.md#moduleinjectionoptions)<`unknown`\>\>

#### Implementation of

[MedusaDynamicModule](../interfaces/core_types.MedusaDynamicModule.md).[forRoot](../interfaces/core_types.MedusaDynamicModule.md#forroot)

#### Defined in

[src/modules/multi-tenancy/tenant.module.ts:9](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/tenant.module.ts#L9)
