[medusa-extender](../README.md) / [Exports](../modules.md) / [core/event-emmiter](../modules/core_event_emmiter.md) / [Internals](../modules/core_event_emmiter.Internals.md) / CustomEventEmitter

# Class: CustomEventEmitter

[core/event-emmiter](../modules/core_event_emmiter.md).[Internals](../modules/core_event_emmiter.Internals.md).CustomEventEmitter

Extended event emitter to register methods that must be call when certain events are triggered and relay the handling to the API package

## Hierarchy

- `EventEmitter`

  ↳ **`CustomEventEmitter`**

## Table of contents

### Constructors

- [constructor](core_event_emmiter.Internals.CustomEventEmitter.md#constructor)

### Properties

- [#listeners](core_event_emmiter.Internals.CustomEventEmitter.md##listeners)

### Methods

- [emitAsync](core_event_emmiter.Internals.CustomEventEmitter.md#emitasync)
- [register](core_event_emmiter.Internals.CustomEventEmitter.md#register)
- [registerListeners](core_event_emmiter.Internals.CustomEventEmitter.md#registerlisteners)

## Constructors

### constructor

• **new CustomEventEmitter**()

#### Overrides

EventEmitter.constructor

#### Defined in

[src/core/event-emmiter.ts:22](https://github.com/adrien2p/medusa-extender/blob/9478406/src/core/event-emmiter.ts#L22)

## Properties

### #listeners

• `Private` **#listeners**: `Set`<[`ListenerDescriptor`](../modules/core_event_emmiter.Internals.md#listenerdescriptor)<`unknown`\>\>

#### Defined in

[src/core/event-emmiter.ts:20](https://github.com/adrien2p/medusa-extender/blob/9478406/src/core/event-emmiter.ts#L20)

## Methods

### emitAsync

▸ **emitAsync**<`T`\>(`eventName`, `values`): `Promise`<`T`\>

Emit an asynchrone event entity based and wait for the result.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The event that must be triggered |
| `values` | `Record`<`string`, `unknown`\> | The data that are passed to the event handler |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/core/event-emmiter.ts:74](https://github.com/adrien2p/medusa-extender/blob/9478406/src/core/event-emmiter.ts#L74)

___

### register

▸ **register**<`T`\>(`eventName`, `propertyName`, `metatype`): `void`

Register a new event handler.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event that has to be triggered |
| `propertyName` | `string` | The name of the class property that will handle the event |
| `metatype` | [`Type`](../interfaces/core_types.Type.md)<`T`\> | The object that contains the property above |

#### Returns

`void`

#### Defined in

[src/core/event-emmiter.ts:32](https://github.com/adrien2p/medusa-extender/blob/9478406/src/core/event-emmiter.ts#L32)

___

### registerListeners

▸ **registerListeners**(`container`): `void`

Apply all event handlers hold by the `listenerDescriptor`.
Only unregister and register again non singleton based event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `AwilixContainer` | The IoC container that allow to resolve instance |

#### Returns

`void`

#### Defined in

[src/core/event-emmiter.ts:45](https://github.com/adrien2p/medusa-extender/blob/9478406/src/core/event-emmiter.ts#L45)
