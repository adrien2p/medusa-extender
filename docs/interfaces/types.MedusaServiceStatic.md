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

[types.ts:124](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L124)

## Properties

### isHandledByMedusa

• `Optional` **isHandledByMedusa**: `boolean`

#### Defined in

[types.ts:116](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L116)

___

### overriddenType

• `Optional` **overriddenType**: [`Type`](types.Type.md)<`OverriddenType`\>

#### Defined in

[types.ts:115](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L115)

___

### resolutionKey

• `Optional` **resolutionKey**: `string`

Only required if there is no overriddenType

#### Defined in

[types.ts:122](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L122)

___

### scope

• `Optional` **scope**: `LifetimeType`

#### Defined in

[types.ts:117](https://github.com/adrien2p/medusa-extender/blob/55d8212/src/types.ts#L117)
