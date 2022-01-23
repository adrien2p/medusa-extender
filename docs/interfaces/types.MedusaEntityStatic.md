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

[types.ts:154](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L154)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[types.ts:147](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L147)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[types.ts:146](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L146)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[types.ts:152](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L152)
