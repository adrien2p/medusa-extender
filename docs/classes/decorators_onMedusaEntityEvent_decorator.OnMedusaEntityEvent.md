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
[src/decorators/onMedusaEntityEvent.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L42)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L42)
>>>>>>> 51e6b4d... feat: Add support of commitlint

## Properties

### #targetEntity

• `Private` **#targetEntity**: [`Type`](../interfaces/types.Type.md)<`unknown`\>

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:40](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L40)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:40](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L40)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### #when

• `Private` `Readonly` **#when**: `string`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:39](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L39)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:39](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L39)
>>>>>>> 51e6b4d... feat: Add support of commitlint

## Accessors

### After

• `Static` `get` **After**(): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L50)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L50)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Before

• `Static` `get` **Before**(): [`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Returns

[`OnMedusaEntityEvent`](decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:46](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L46)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:46](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L46)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:70](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L70)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:70](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L70)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:58](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L58)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:58](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L58)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:84](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L84)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:84](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L84)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:66](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L66)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:66](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L66)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:77](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L77)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:77](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L77)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:62](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L62)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:62](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L62)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
| `action` | [`EntityActions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityactions) |
| `entity` | `TEntity` |
| `options` | [`EntityEventActionOptions`](../modules/decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions) |

#### Returns

`MethodDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:91](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L91)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:91](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L91)
>>>>>>> 51e6b4d... feat: Add support of commitlint

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
[src/decorators/onMedusaEntityEvent.decorator.ts:54](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/onMedusaEntityEvent.decorator.ts#L54)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:54](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/onMedusaEntityEvent.decorator.ts#L54)
>>>>>>> 51e6b4d... feat: Add support of commitlint
