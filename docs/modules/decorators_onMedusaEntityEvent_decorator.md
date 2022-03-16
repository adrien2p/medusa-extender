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

<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:10](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L10)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:10](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L10)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:10](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/decorators/onMedusaEntityEvent.decorator.ts#L10)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### EntityEventActionOptions

Ƭ **EntityEventActionOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `async` | `boolean` |
| `metatype?` | [`Type`](../interfaces/core_types.Type.md) |

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:5](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L5)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:5](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L5)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:5](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/decorators/onMedusaEntityEvent.decorator.ts#L5)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L15)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L15)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/decorators/onMedusaEntityEvent.decorator.ts#L15)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L24)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L24)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/decorators/onMedusaEntityEvent.decorator.ts#L24)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/onMedusaEntityEvent.decorator.ts:32](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/decorators/onMedusaEntityEvent.decorator.ts#L32)
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:32](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/decorators/onMedusaEntityEvent.decorator.ts#L32)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/decorators/onMedusaEntityEvent.decorator.ts:32](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/decorators/onMedusaEntityEvent.decorator.ts#L32)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
