[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaRepositoryStatic

# Interface: MedusaRepositoryStatic<OverriddenType\>

[types](../modules/types.md).MedusaRepositoryStatic

**`interface`**
Describe a custom entity repository constructor.

## Type parameters

| Name | Type |
| :------ | :------ |
| `OverriddenType` | `unknown` |

## Table of contents

### Constructors

- [constructor](types.MedusaRepositoryStatic.md#constructor)

### Properties

- [isHandledByMedusa](types.MedusaRepositoryStatic.md#ishandledbymedusa)
- [overriddenType](types.MedusaRepositoryStatic.md#overriddentype)
- [resolutionKey](types.MedusaRepositoryStatic.md#resolutionkey)

## Constructors

### constructor

• **new MedusaRepositoryStatic**()

#### Defined in

[src/types.ts:185](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L185)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[src/types.ts:178](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L178)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[src/types.ts:177](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L177)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[src/types.ts:183](https://github.com/adrien2p/medusa-extender/blob/c135947/src/types.ts#L183)
