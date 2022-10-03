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

[src/decorators/onMedusaEntityEvent.decorator.ts:40](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L40)

## Properties

### #targetEntity

• `Private` **#targetEntity**: [`Type`](../interfaces/core_types.Type.md)<`unknown`\>

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:38](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L38)

___

### #when

• `Private` `Readonly` **#when**: `string`

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:37](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L37)

## Accessors

### After

• `Static` `get` **After**(): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:48](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L48)

___

### Before

• `Static` `get` **Before**(): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:44](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L44)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L68)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:56](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L56)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:82](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L82)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:64](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L64)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:75](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L75)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L60)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:89](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L89)

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

[src/decorators/onMedusaEntityEvent.decorator.ts:52](https://github.com/adrien2p/medusa-extender/blob/ba60811/src/decorators/onMedusaEntityEvent.decorator.ts#L52)
