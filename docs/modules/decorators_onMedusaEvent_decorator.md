[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/onMedusaEvent.decorator

# Module: decorators/onMedusaEvent.decorator

## Table of contents

### Classes

- [OnMedusaEvent](../classes/decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

### Type aliases

- [EntityActions](decorators_onMedusaEvent_decorator.md#entityactions)
- [EntityEventActionOptions](decorators_onMedusaEvent_decorator.md#entityeventactionoptions)
- [EntityEventType](decorators_onMedusaEvent_decorator.md#entityeventtype)
- [MedusaEventEmittedParams](decorators_onMedusaEvent_decorator.md#medusaeventemittedparams)
- [MedusaEventHandlerParams](decorators_onMedusaEvent_decorator.md#medusaeventhandlerparams)

## Type aliases

### EntityActions

Ƭ **EntityActions**: ``"Insert"`` \| ``"Update"`` \| ``"Remove"``

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:10](https://github.com/adrien2p/medusa-extender/blob/daed756/src/decorators/onMedusaEvent.decorator.ts#L10)

___

### EntityEventActionOptions

Ƭ **EntityEventActionOptions**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `async` | `boolean` |
| `metatype?` | [`Type`](../interfaces/types.Type.md)<`T`\> |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:5](https://github.com/adrien2p/medusa-extender/blob/daed756/src/decorators/onMedusaEvent.decorator.ts#L5)

___

### EntityEventType

Ƭ **EntityEventType**<`Entity`, `TEntityActions`\>: `TEntityActions` extends ``"Insert"`` ? `InsertEvent`<`Entity`\> : `TEntityActions` extends ``"Update"`` ? `UpdateEvent`<`Entity`\> : `RemoveEvent`<`Entity`\>

Event types that can be emitted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_onMedusaEvent_decorator.md#entityactions) |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/daed756/src/decorators/onMedusaEvent.decorator.ts#L15)

___

### MedusaEventEmittedParams

Ƭ **MedusaEventEmittedParams**<`Entity`, `TEntityActions`\>: `Object`

The arguments expected by the [OnMedusaEvent](../classes/decorators_onMedusaEvent_decorator.OnMedusaEvent.md) decorator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_onMedusaEvent_decorator.md#entityactions) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `values` | [`MedusaEventHandlerParams`](decorators_onMedusaEvent_decorator.md#medusaeventhandlerparams)<`Entity`, `TEntityActions`\> |
| `resolveOrReject` | (`err?`: `Error`, `res?`: `unknown`) => `void` |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/daed756/src/decorators/onMedusaEvent.decorator.ts#L24)

___

### MedusaEventHandlerParams

Ƭ **MedusaEventHandlerParams**<`Entity`, `TEntityActions`\>: `Object`

The arguments expected by the event handler.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_onMedusaEvent_decorator.md#entityactions) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | [`EntityEventType`](decorators_onMedusaEvent_decorator.md#entityeventtype)<`Entity`, `TEntityActions`\> |
| `transactionalEntityManager?` | `EntityManager` |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:32](https://github.com/adrien2p/medusa-extender/blob/daed756/src/decorators/onMedusaEvent.decorator.ts#L32)
