[medusa-extender](../README.md) / [Exports](../modules.md) / [decorators/onMedusaEntityEvent.decorator](../modules/decorators_onMedusaEntityEvent_decorator.md) / OnMedusaEntityEvent

# Class: OnMedusaEntityEvent

[decorators/onMedusaEntityEvent.decorator](../modules/decorators_onMedusaEntityEvent_decorator.md).OnMedusaEntityEvent

## Table of contents

### Constructors

- [constructor](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#constructor)

### Properties

- [#targetEntity](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md##targetentity)
- [#when](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md##when)

### Accessors

- [After](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#after)
- [Before](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#before)

### Methods

- [Insert](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#insert)
- [InsertEvent](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#insertevent)
- [Remove](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#remove)
- [RemoveEvent](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#removeevent)
- [Update](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#update)
- [UpdateEvent](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#updateevent)
- [buildDecorator](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#builddecorator)
- [build](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md#build)

## Constructors

### constructor

• **new OnMedusaEntityEvent**(`when?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `when?` | `string` |

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:41](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L41)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:41](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L41)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

## Properties

### #targetEntity

• `Private` **#targetEntity**: [`Type`](../interfaces/core_types.Type.md)<`unknown`\>

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:39](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L39)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:39](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L39)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### #when

• `Private` `Readonly` **#when**: `string`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:38](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L38)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:38](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L38)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

## Accessors

### After

• `Static` `get` **After**(): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:49](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L49)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:49](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L49)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### Before

• `Static` `get` **Before**(): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:45](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L45)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:45](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L45)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

## Methods

### Insert

▸ **Insert**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L69)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L69)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### InsertEvent

▸ **InsertEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `Entity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:57](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L57)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:57](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L57)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### Remove

▸ **Remove**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:83](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L83)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:83](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L83)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### RemoveEvent

▸ **RemoveEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `Entity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:65](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L65)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:65](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L65)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### Update

▸ **Update**<`TEntity`\>(`entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:76](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L76)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:76](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L76)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### UpdateEvent

▸ **UpdateEvent**<`Entity`\>(`entity`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `Entity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | `Entity` |

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:61](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L61)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:61](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L61)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### buildDecorator

▸ `Private` **buildDecorator**<`TEntity`\>(`action`, `entity`, `options?`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | extends [`Type`](../interfaces/core_types.Type.md)<`unknown`, `TEntity`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`EntityActions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityactions) |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:90](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L90)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:90](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L90)
>>>>>>> 04c62ec... docs(cli): Update cli documentation

___

### build

▸ `Static` `Private` **build**(`when`): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `when` | `string` |

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:53](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L53)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:53](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L53)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
