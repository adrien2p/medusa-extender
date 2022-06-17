[medusa-extender](../README.md) / [Exports](../modules.md) / [core/types](../modules/core_types.md) / MedusaDynamicModule

# Interface: MedusaDynamicModule<T\>

[core/types](../modules/core_types.md).MedusaDynamicModule

**`interface`**
Describe a dynamic module which resolve its import dynamically.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Implemented by

- [`TenantModule`](../classes/modules_multi_tenancy_tenant_module.TenantModule.md)

## Table of contents

### Methods

- [forRoot](core_types.MedusaDynamicModule.md#forroot)

## Methods

### forRoot

▸ **forRoot**(`configModule`): `Promise`<[`ModuleInjectionOptions`](../modules/core_types.md#moduleinjectionoptions)<`unknown`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configModule` | `T` |

#### Returns

`Promise`<[`ModuleInjectionOptions`](../modules/core_types.md#moduleinjectionoptions)<`unknown`\>\>

#### Defined in

[src/core/types.ts:189](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/types.ts#L189)
