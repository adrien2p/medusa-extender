[medusa-extender](../README.md) / [Exports](../modules.md) / [Medusa](../modules/Medusa.md) / Medusa

# Class: Medusa

[Medusa](../modules/Medusa.md).Medusa

Load medusa and apply all components

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

[Medusa.ts:38](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/Medusa.ts#L38)

## Properties

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[Medusa.ts:31](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/Medusa.ts#L31)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[Medusa.ts:32](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/Medusa.ts#L32)

## Methods

### load

▸ **load**(`modules`): `Promise`<`MedusaContainer`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/core_types.Type.md)<`unknown`\>[] | The modules to load into medusa |

#### Returns

`Promise`<`MedusaContainer`\>

#### Defined in

[Medusa.ts:46](https://github.com/adrien2p/medusa-extender/blob/48060f4/src/Medusa.ts#L46)
