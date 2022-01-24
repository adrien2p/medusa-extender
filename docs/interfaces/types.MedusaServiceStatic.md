[medusa-extender](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / MedusaServiceStatic

# Interface: MedusaServiceStatic<OverriddenType\>

[types](../modules/types.md).MedusaServiceStatic

**`interface`**
Describe a custom service constructor.

## Type parameters

| Name | Type |
| :------ | :------ |
| `OverriddenType` | `unknown` |

## Table of contents

### Constructors

- [constructor](types.MedusaServiceStatic.md#constructor)

### Properties

- [isHandledByMedusa](types.MedusaServiceStatic.md#ishandledbymedusa)
- [overriddenType](types.MedusaServiceStatic.md#overriddentype)
- [resolutionKey](types.MedusaServiceStatic.md#resolutionkey)
- [scope](types.MedusaServiceStatic.md#scope)

## Constructors

### constructor

• **new MedusaServiceStatic**(`container`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | `any` |

#### Defined in

[src/types.ts:122](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L122)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[src/types.ts:114](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L114)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[src/types.ts:113](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L113)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[src/types.ts:120](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L120)

___

### scope

• `Optional` **scope**: `LifetimeType`

#### Defined in

[src/types.ts:115](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/types.ts#L115)
