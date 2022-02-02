[medusa-extender](../README.md) / [Exports](../modules.md) / [loader](../modules/loader.md) / Loader

# Class: Loader

[loader](../modules/loader.md).Loader

**`internal`**
Load medusa and apply all middlewares and migrations before registering the medusa
internal container and database connection.

## Table of contents

### Constructors

- [constructor](loader.Loader.md#constructor)

### Methods

- [load](loader.Loader.md#load)

## Constructors

### constructor

• **new Loader**()

## Methods

### load

▸ **load**(`modules`, `rootDir`, `express`): `Promise`<`AwilixContainer`<`any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/types.Type.md)<`unknown`\>[] |  |
| `rootDir` | `string` | Directory where `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Returns

`Promise`<`AwilixContainer`<`any`\>\>

#### Defined in

[src/loader.ts:35](https://github.com/adrien2p/medusa-extender/blob/a0a14e5/src/loader.ts#L35)
