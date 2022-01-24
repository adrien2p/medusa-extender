[medusa-extender](../README.md) / [Exports](../modules.md) / [decorators/onMedusaEvent.decorator](../modules/decorators_onMedusaEvent_decorator.md) / OnMedusaEvent

# Class: OnMedusaEvent

[decorators/onMedusaEvent.decorator](../modules/decorators_onMedusaEvent_decorator.md).OnMedusaEvent

## Table of contents

### Constructors

- [constructor](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#constructor)

### Properties

- [#targetEntity](decorators_onMedusaEvent_decorator.OnMedusaEvent.md##targetentity)
- [#when](decorators_onMedusaEvent_decorator.OnMedusaEvent.md##when)

### Accessors

- [After](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#after)
- [Before](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#before)

### Methods

- [Insert](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#insert)
- [InsertEvent](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#insertevent)
- [Remove](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#remove)
- [RemoveEvent](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#removeevent)
- [Update](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#update)
- [UpdateEvent](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#updateevent)
- [buildDecorator](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#builddecorator)
- [build](decorators_onMedusaEvent_decorator.OnMedusaEvent.md#build)

## Constructors

### constructor

• **new OnMedusaEvent**(`when?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `when?` | `string` |

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:10](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L10)

## Properties

### #targetEntity

• `Private` **#targetEntity**: `any`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:8](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L8)

___

### #when

• `Private` `Readonly` **#when**: `string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:7](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L7)

## Accessors

### After

• `Static` `get` **After**(): [`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Returns

[`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:18](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L18)

___

### Before

• `Static` `get` **Before**(): [`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Returns

[`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:14](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L14)

## Methods

### Insert

▸ **Insert**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends (`options?`: `EntityOptions`) => `ClassDecorator`(`name?`: `string`, `options?`: `EntityOptions`) => `ClassDecorator` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_types.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:38](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L38)

___

### InsertEvent

▸ **InsertEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name |
| :------ |
| `Entity` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Constructor`](../modules/types.md#constructor)<`Entity`\> |

#### Returns

`string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:26](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L26)

___

### Remove

▸ **Remove**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends (`options?`: `EntityOptions`) => `ClassDecorator`(`name?`: `string`, `options?`: `EntityOptions`) => `ClassDecorator` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_types.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:52](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L52)

___

### RemoveEvent

▸ **RemoveEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name |
| :------ |
| `Entity` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Constructor`](../modules/types.md#constructor)<`Entity`\> |

#### Returns

`string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L34)

___

### Update

▸ **Update**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends (`options?`: `EntityOptions`) => `ClassDecorator`(`name?`: `string`, `options?`: `EntityOptions`) => `ClassDecorator` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_types.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:45](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L45)

___

### UpdateEvent

▸ **UpdateEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name |
| :------ |
| `Entity` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`Constructor`](../modules/types.md#constructor)<`Entity`\> |

#### Returns

`string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:30](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L30)

___

### buildDecorator

▸ `Private` **buildDecorator**<`TEntity`\>(`action`, `entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends (`options?`: `EntityOptions`) => `ClassDecorator`(`name?`: `string`, `options?`: `EntityOptions`) => `ClassDecorator` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`EntityActions`](../modules/decorators_types.md#entityactions) |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_types.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L59)

___

### build

▸ `Static` `Private` **build**(`when`): [`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `when` | `string` |

#### Returns

[`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:22](https://github.com/adrien2p/medusa-extender/blob/c135947/src/decorators/onMedusaEvent.decorator.ts#L22)
