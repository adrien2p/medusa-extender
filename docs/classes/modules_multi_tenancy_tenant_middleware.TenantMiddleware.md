[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/multi-tenancy/tenant.middleware](../modules/modules_multi_tenancy_tenant_middleware.md) / TenantMiddleware

# Class: TenantMiddleware

[modules/multi-tenancy/tenant.middleware](../modules/modules_multi_tenancy_tenant_middleware.md).TenantMiddleware

## Implements

- [`MedusaMiddleware`](../interfaces/core_types.MedusaMiddleware.md)

## Table of contents

### Constructors

- [constructor](modules_multi_tenancy_tenant_middleware.TenantMiddleware.md#constructor)

### Methods

- [consume](modules_multi_tenancy_tenant_middleware.TenantMiddleware.md#consume)

## Constructors

### constructor

• **new TenantMiddleware**()

## Methods

### consume

▸ **consume**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`MedusaAuthenticatedRequest`](../modules/core_types.md#medusaauthenticatedrequest) |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[MedusaMiddleware](../interfaces/core_types.MedusaMiddleware.md).[consume](../interfaces/core_types.MedusaMiddleware.md#consume)

#### Defined in

[src/modules/multi-tenancy/tenant.middleware.ts:12](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/multi-tenancy/tenant.middleware.ts#L12)
