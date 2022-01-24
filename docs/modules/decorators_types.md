[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/types

# Module: decorators/types

## Table of contents

### Type aliases

- [EntityActions](decorators_types.md#entityactions)
- [EntityEventActionOptions](decorators_types.md#entityeventactionoptions)
- [EntityEventType](decorators_types.md#entityeventtype)
- [MedusaEventEmittedParams](decorators_types.md#medusaeventemittedparams)
- [MedusaEventHandlerParams](decorators_types.md#medusaeventhandlerparams)

## Type aliases

### EntityActions

Ƭ **EntityActions**: ``"Insert"`` \| ``"Update"`` \| ``"Remove"``

#### Defined in

[src/decorators/types.ts:9](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/decorators/types.ts#L9)

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
| `customMetatype?` | [`MedusaServiceStatic`](../interfaces/types.MedusaServiceStatic.md)<`T`\> |

#### Defined in

[src/decorators/types.ts:4](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/decorators/types.ts#L4)

___

### EntityEventType

Ƭ **EntityEventType**<`Entity`, `TEntityActions`\>: `TEntityActions` extends ``"Insert"`` ? `InsertEvent`<`Entity`\> : `TEntityActions` extends ``"Update"`` ? `UpdateEvent`<`Entity`\> : `RemoveEvent`<`Entity`\>

Event types that can be emitted.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_types.md#entityactions) |

#### Defined in

[src/decorators/types.ts:14](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/decorators/types.ts#L14)

___

### MedusaEventEmittedParams

Ƭ **MedusaEventEmittedParams**<`Entity`, `TEntityActions`\>: `Object`

The arguments expected by the [OnMedusaEvent](../classes/decorators_onMedusaEvent_decorator.OnMedusaEvent.md) decorator.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_types.md#entityactions) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `values` | [`MedusaEventHandlerParams`](decorators_types.md#medusaeventhandlerparams)<`Entity`, `TEntityActions`\> |
| `resolveOrReject` | (`err?`: `Error`, `res?`: `unknown`) => `void` |

#### Defined in

[src/decorators/types.ts:23](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/decorators/types.ts#L23)

___

### MedusaEventHandlerParams

Ƭ **MedusaEventHandlerParams**<`Entity`, `TEntityActions`\>: `Object`

The arguments expected by the event handler.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Entity` | `Entity` |
| `TEntityActions` | extends [`EntityActions`](decorators_types.md#entityactions) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | [`EntityEventType`](decorators_types.md#entityeventtype)<`Entity`, `TEntityActions`\> |
| `transactionalEntityManager?` | `EntityManager` |

#### Defined in

[src/decorators/types.ts:31](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/decorators/types.ts#L31)
