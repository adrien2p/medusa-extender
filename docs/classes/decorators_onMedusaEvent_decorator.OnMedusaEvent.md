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

[src/decorators/onMedusaEvent.decorator.ts:41](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L41)

## Properties

### #targetEntity

• `Private` **#targetEntity**: `any`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:39](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L39)

___

### #when

• `Private` `Readonly` **#when**: `string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:38](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L38)

## Accessors

### After

• `Static` `get` **After**(): [`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Returns

[`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:49](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L49)

___

### Before

• `Static` `get` **Before**(): [`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Returns

[`OnMedusaEvent`](decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:45](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L45)

## Methods

### Insert

▸ **Insert**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEvent_decorator.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L69)

___

### InsertEvent

▸ **InsertEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `Entity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:57](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L57)

___

### Remove

▸ **Remove**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEvent_decorator.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:83](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L83)

___

### RemoveEvent

▸ **RemoveEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `Entity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:65](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L65)

___

### Update

▸ **Update**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEvent_decorator.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:76](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L76)

___

### UpdateEvent

▸ **UpdateEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `Entity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`string`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:61](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L61)

___

### buildDecorator

▸ `Private` **buildDecorator**<`TEntity`\>(`action`, `entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`EntityActions`](../modules/decorators_onMedusaEvent_decorator.md#entityactions) |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEvent_decorator.md#entityeventactionoptions)<`TEntity`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/decorators/onMedusaEvent.decorator.ts:90](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L90)

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

[src/decorators/onMedusaEvent.decorator.ts:53](https://github.com/adrien2p/medusa-extender/blob/79a9c0b/src/decorators/onMedusaEvent.decorator.ts#L53)
