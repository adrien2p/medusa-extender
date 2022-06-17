[medusa-extender](../README.md) / [Exports](../modules.md) / [core/event-emmiter](../modules/core_event_emmiter.md) / [Internals](../modules/core_event_emmiter.Internals.md) / CustomEventEmmiter

# Class: CustomEventEmmiter

[core/event-emmiter](../modules/core_event_emmiter.md).[Internals](../modules/core_event_emmiter.Internals.md).CustomEventEmmiter

Extended event emitter to register methods that must be call when certain events are triggered and relay the handling to the API package

## Hierarchy

- `EventEmitter`

  ↳ **`CustomEventEmmiter`**

## Table of contents

### Constructors

- [constructor](core_event_emmiter.Internals.CustomEventEmmiter.md#constructor)

### Properties

- [#listeners](core_event_emmiter.Internals.CustomEventEmmiter.md##listeners)

### Methods

- [emitAsync](core_event_emmiter.Internals.CustomEventEmmiter.md#emitasync)
- [register](core_event_emmiter.Internals.CustomEventEmmiter.md#register)
- [registerListeners](core_event_emmiter.Internals.CustomEventEmmiter.md#registerlisteners)
- [unregisterListeners](core_event_emmiter.Internals.CustomEventEmmiter.md#unregisterlisteners)

## Constructors

### constructor

• **new CustomEventEmmiter**()

#### Overrides

EventEmitter.constructor

#### Defined in

[src/core/event-emmiter.ts:22](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L22)

## Properties

### #listeners

• `Private` **#listeners**: `Set`<[`ListenerDescriptor`](../modules/core_event_emmiter.Internals.md#listenerdescriptor)<`unknown`\>\>

#### Defined in

[src/core/event-emmiter.ts:20](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L20)

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

[src/core/event-emmiter.ts:79](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L79)

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

[src/core/event-emmiter.ts:32](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L32)

___

### registerListeners

▸ **registerListeners**(`container`): `void`

Apply all event handlers hold by the `listenerDescriptor`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `AwilixContainer` | The IoC container that allow to resolve instance |

#### Returns

`void`

#### Defined in

[src/core/event-emmiter.ts:44](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L44)

___

### unregisterListeners

▸ **unregisterListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/core/event-emmiter.ts:67](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L67)
