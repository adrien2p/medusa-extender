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
- [loadMonitoringModuleIfNecessary](Medusa.Medusa-1.md#loadmonitoringmoduleifnecessary)

## Constructors

### constructor

• **new Medusa**(`rootDir`, `express`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where the `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Defined in

[src/Medusa.ts:35](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/Medusa.ts#L35)

## Properties

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[src/Medusa.ts:28](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/Medusa.ts#L28)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[src/Medusa.ts:29](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/Medusa.ts#L29)

## Methods

### load

▸ **load**(`modules`): `Promise`<`AwilixContainer`<`any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Constructor`](../modules/core_types.md#constructor)<`unknown`\>[] | The modules to load into medusa |

#### Returns

`Promise`<`AwilixContainer`<`any`\>\>

#### Defined in

[src/Medusa.ts:43](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/Medusa.ts#L43)

___

### loadMonitoringModuleIfNecessary

▸ `Private` **loadMonitoringModuleIfNecessary**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Medusa.ts:81](https://github.com/adrien2p/medusa-extender/blob/6afd1c2/src/Medusa.ts#L81)
