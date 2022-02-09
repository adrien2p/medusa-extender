[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/middlewares.loader

# Module: loaders/middlewares.loader

## Table of contents

### Functions

- [middlewaresLoader](loaders_middlewares_loader.md#middlewaresloader)

## Functions

### middlewaresLoader

▸ **middlewaresLoader**(`app`, `container`, `middlewares`): `void`

**`internal`**
Register custom middlewares into the middlewareRegistery.

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | `Express` |
| `container` | `AwilixContainer`<`any`\> |
| `middlewares` | [`GetInjectableOptions`](types.md#getinjectableoptions)<``"middleware"``\> |

#### Returns

`void`

#### Defined in

[src/loaders/middlewares.loader.ts:13](https://github.com/adrien2p/medusa-extender/blob/6176cb6/src/loaders/middlewares.loader.ts#L13)
