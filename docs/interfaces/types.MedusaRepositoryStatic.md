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

[src/types.ts:182](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L182)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[src/types.ts:175](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L175)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[src/types.ts:174](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L174)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[src/types.ts:180](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L180)
