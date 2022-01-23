[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaRepositoryStatic

# Interface: MedusaRepositoryStatic<TRepository, OverriddenType\>

[types](../modules/types.md).MedusaRepositoryStatic

**`interface`**
Describe a custom entity repository constructor.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TRepository` | `unknown` |
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

[types.ts:186](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L186)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[types.ts:179](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L179)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[types.ts:178](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L178)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[types.ts:184](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L184)
