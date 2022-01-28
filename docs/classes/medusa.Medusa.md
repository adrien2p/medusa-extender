[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa](../modules/medusa.md) / Medusa

# Class: Medusa

[medusa](../modules/medusa.md).Medusa

Register steps that must be executed before/after medusa is load.

## Table of contents

### Constructors

- [constructor](medusa.Medusa.md#constructor)

### Properties

- [#express](medusa.Medusa.md##express)
- [#rootDir](medusa.Medusa.md##rootdir)

### Methods

- [load](medusa.Medusa.md#load)

## Constructors

### constructor

• **new Medusa**(`rootDir`, `express`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where the `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Defined in

[src/medusa.ts:15](https://github.com/adrien2p/medusa-extender/blob/31f6975/src/medusa.ts#L15)

## Properties

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[src/medusa.ts:8](https://github.com/adrien2p/medusa-extender/blob/31f6975/src/medusa.ts#L8)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[src/medusa.ts:9](https://github.com/adrien2p/medusa-extender/blob/31f6975/src/medusa.ts#L9)

## Methods

### load

▸ **load**(...`modules`): `Promise`<`void`\>

Launch all the steps before/after medusa according to the `stepOptions`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...modules` | [`Type`](../interfaces/types.Type.md)<`unknown`\>[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/medusa.ts:23](https://github.com/adrien2p/medusa-extender/blob/31f6975/src/medusa.ts#L23)
