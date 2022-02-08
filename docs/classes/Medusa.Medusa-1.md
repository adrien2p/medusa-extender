[medusa-extender](../README.md) / [Exports](../modules.md) / [Medusa](../modules/Medusa.md) / Medusa

# Class: Medusa

[Medusa](../modules/Medusa.md).Medusa

Load medusa and apply all middlewares and migrations before registering the medusa
internal container and database connection.

## Table of contents

### Constructors

- [constructor](Medusa.Medusa-1.md#constructor)

### Properties

- [#express](Medusa.Medusa-1.md##express)
- [#rootDir](Medusa.Medusa-1.md##rootdir)

### Methods

- [load](Medusa.Medusa-1.md#load)

## Constructors

### constructor

• **new Medusa**(`rootDir`, `express`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where the `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Defined in

[src/Medusa.ts:37](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/Medusa.ts#L37)

## Properties

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[src/Medusa.ts:30](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/Medusa.ts#L30)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[src/Medusa.ts:31](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/Medusa.ts#L31)

## Methods

### load

▸ **load**(`modules`): `Promise`<`AwilixContainer`<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modules` | [`Constructor`](../modules/types.md#constructor)<`unknown`\>[] |

#### Returns

`Promise`<`AwilixContainer`<`any`\>\>

#### Defined in

[src/Medusa.ts:45](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/Medusa.ts#L45)
