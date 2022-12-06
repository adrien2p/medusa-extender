[medusa-extender](../README.md) / [Exports](../modules.md) / [Medusa](../modules/Medusa.md) / Medusa

# Class: Medusa

[Medusa](../modules/Medusa.md).Medusa

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
| `rootDir` | `string` |  |
| `express` | `Express` |  |

#### Defined in

[Medusa.ts:38](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/Medusa.ts#L38)

## Properties

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[Medusa.ts:31](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/Medusa.ts#L31)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[Medusa.ts:32](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/Medusa.ts#L32)

## Methods

### load

▸ **load**(`modules`): `Promise`<[`MedusaContainer`](../modules/core_types.md#medusacontainer)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/core_types.Type.md)<`unknown`\>[] |  |

#### Returns

`Promise`<[`MedusaContainer`](../modules/core_types.md#medusacontainer)\>

#### Defined in

[Medusa.ts:46](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/Medusa.ts#L46)
