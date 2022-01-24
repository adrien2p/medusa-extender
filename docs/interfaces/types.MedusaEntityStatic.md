[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaEntityStatic

# Interface: MedusaEntityStatic<OverriddenType\>

[types](../modules/types.md).MedusaEntityStatic

**`interface`**
Describe a custom entity constructor.

## Type parameters

| Name | Type |
| :------ | :------ |
| `OverriddenType` | `unknown` |

## Table of contents

### Constructors

- [constructor](types.MedusaEntityStatic.md#constructor)

### Properties

- [isHandledByMedusa](types.MedusaEntityStatic.md#ishandledbymedusa)
- [overriddenType](types.MedusaEntityStatic.md#overriddentype)
- [resolutionKey](types.MedusaEntityStatic.md#resolutionkey)

## Constructors

### constructor

• **new MedusaEntityStatic**()

#### Defined in

[src/types.ts:151](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L151)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[src/types.ts:144](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L144)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[src/types.ts:143](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L143)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[src/types.ts:149](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L149)
