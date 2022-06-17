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

[src/Medusa.ts:39](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/Medusa.ts#L39)

## Properties

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[src/Medusa.ts:32](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/Medusa.ts#L32)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[src/Medusa.ts:33](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/Medusa.ts#L33)

## Methods

### load

▸ **load**(`modules`): `Promise`<[`MedusaContainer`](../modules/core_types.md#medusacontainer)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/core_types.Type.md)<`unknown`\>[] | The modules to load into medusa |

#### Returns

`Promise`<[`MedusaContainer`](../modules/core_types.md#medusacontainer)\>

#### Defined in

[src/Medusa.ts:47](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/Medusa.ts#L47)
