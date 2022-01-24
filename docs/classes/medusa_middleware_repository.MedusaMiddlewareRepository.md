[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa-middleware.repository](../modules/medusa_middleware_repository.md) / MedusaMiddlewareRepository

# Class: MedusaMiddlewareRepository<T\>

[medusa-middleware.repository](../modules/medusa_middleware_repository.md).MedusaMiddlewareRepository

**`internal`**
The middleware repository that hold all self registered middleawres that must be applied before/after auth.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md) = [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md) |

## Hierarchy

- `Map`<``"preAuth"`` \| ``"postAuth"``, `T`[]\>

  ↳ **`MedusaMiddlewareRepository`**

## Table of contents

### Constructors

- [constructor](medusa_middleware_repository.MedusaMiddlewareRepository.md#constructor)

### Methods

- [registerPostAuth](medusa_middleware_repository.MedusaMiddlewareRepository.md#registerpostauth)
- [registerPreAuth](medusa_middleware_repository.MedusaMiddlewareRepository.md#registerpreauth)

## Constructors

### constructor

• **new MedusaMiddlewareRepository**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md) = [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md) |

#### Overrides

Map&lt;
	&#x27;preAuth&#x27; \| &#x27;postAuth&#x27;,
	T[]
\&gt;.constructor

#### Defined in

[src/medusa-middleware.repository.ts:14](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/medusa-middleware.repository.ts#L14)

## Methods

### registerPostAuth

▸ **registerPostAuth**(...`middlewares`): `void`

Register a new middleware that must applied after auth.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | `T`[] | The middleware to apply |

#### Returns

`void`

#### Defined in

[src/medusa-middleware.repository.ts:36](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/medusa-middleware.repository.ts#L36)

___

### registerPreAuth

▸ **registerPreAuth**(...`middlewares`): `void`

Register a new middleware that must applied before auth.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | `T`[] | The middleware to apply |

#### Returns

`void`

#### Defined in

[src/medusa-middleware.repository.ts:24](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/medusa-middleware.repository.ts#L24)
