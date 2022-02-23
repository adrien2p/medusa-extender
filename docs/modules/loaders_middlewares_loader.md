[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/middlewares.loader

# Module: loaders/middlewares.loader

## Table of contents

### Functions

- [middlewaresLoader](loaders_middlewares_loader.md#middlewaresloader)
- [wrapMiddleware](loaders_middlewares_loader.md#wrapmiddleware)

## Functions

### middlewaresLoader

▸ **middlewaresLoader**(`app`, `container`, `middlewares`): `void`

**`internal`**
Register custom middlewares into medusa middleware service to be applied at the right moment.

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Express` |
| `container` | `AwilixContainer`<`any`\> |
| `middlewares` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/middlewares.loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/b811430/src/loaders/middlewares.loader.ts#L13)

___

### wrapMiddleware

▸ **wrapMiddleware**(`middleware`): (`{ app }`: { `app`: `Express`  }) => (...`args`: `unknown`[]) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `middleware` | [`GetInjectableOption`](types.md#getinjectableoption)<``"middleware"``\> |

#### Returns

`fn`

▸ (`{ app }`): (...`args`: `unknown`[]) => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `{ app }` | `Object` |
| `{ app }.app` | `Express` |

##### Returns

`fn`

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

##### Returns

`void`

#### Defined in

[src/loaders/middlewares.loader.ts:39](https://github.com/adrien2p/medusa-extender/blob/b811430/src/loaders/middlewares.loader.ts#L39)
