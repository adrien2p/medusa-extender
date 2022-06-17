[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/onMedusaEntityEvent.decorator

# Module: decorators/onMedusaEntityEvent.decorator

## Table of contents

### Classes

- [OnMedusaEntityEvent](../classes/decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

### Type aliases

- [EntityActions](decorators_onMedusaEntityEvent_decorator.md#entityactions)
- [EntityEventActionOptions](decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions)
- [EntityEventType](decorators_onMedusaEntityEvent_decorator.md#entityeventtype)
- [MedusaEventEmittedParams](decorators_onMedusaEntityEvent_decorator.md#medusaeventemittedparams)
- [MedusaEventHandlerParams](decorators_onMedusaEntityEvent_decorator.md#medusaeventhandlerparams)

## Type aliases

### EntityActions

Ƭ **EntityActions**: ``"Insert"`` \| ``"Update"`` \| ``"Remove"``

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:10](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/onMedusaEntityEvent.decorator.ts#L10)

___

### EntityEventActionOptions

Ƭ **EntityEventActionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `async` | `boolean` |
| `metatype?` | [`Type`](../interfaces/core_types.Type.md) |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:5](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/onMedusaEntityEvent.decorator.ts#L5)

___

### EntityEventType

Ƭ **EntityEventType**<`Entity`, `TEntityActions`\>: `TEntityActions` extends ``"Insert"`` ? `InsertEvent`<`Entity`\> : `TEntityActions` extends ``"Update"`` ? `UpdateEvent`<`Entity`\> : `RemoveEvent`<`Entity`\>

Event types that can be emitted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_onMedusaEntityEvent_decorator.md#entityactions) |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/onMedusaEntityEvent.decorator.ts#L15)

___

### MedusaEventEmittedParams

Ƭ **MedusaEventEmittedParams**<`Entity`, `TEntityActions`\>: `Object`

The arguments expected by the [OnMedusaEntityEvent](../classes/decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md) decorator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_onMedusaEntityEvent_decorator.md#entityactions) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `values` | [`MedusaEventHandlerParams`](decorators_onMedusaEntityEvent_decorator.md#medusaeventhandlerparams)<`Entity`, `TEntityActions`\> |
| `resolveOrReject` | (`err?`: `Error`, `res?`: `unknown`) => `void` |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/onMedusaEntityEvent.decorator.ts#L24)

___

### MedusaEventHandlerParams

Ƭ **MedusaEventHandlerParams**<`Entity`, `TEntityActions`\>: `Object`

The arguments expected by the event handler.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_onMedusaEntityEvent_decorator.md#entityactions) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | [`EntityEventType`](decorators_onMedusaEntityEvent_decorator.md#entityeventtype)<`Entity`, `TEntityActions`\> |
| `transactionalEntityManager?` | `EntityManager` |

#### Defined in

[src/decorators/onMedusaEntityEvent.decorator.ts:32](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/onMedusaEntityEvent.decorator.ts#L32)
