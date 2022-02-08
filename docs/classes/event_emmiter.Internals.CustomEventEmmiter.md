[medusa-extender](../README.md) / [Exports](../modules.md) / [event-emmiter](../modules/event_emmiter.md) / [Internals](../modules/event_emmiter.Internals.md) / CustomEventEmmiter

# Class: CustomEventEmmiter

[event-emmiter](../modules/event_emmiter.md).[Internals](../modules/event_emmiter.Internals.md).CustomEventEmmiter

Extended event emitter to register methods that must be call when certain events are triggered and relay the handling to the API package

## Hierarchy

- `EventEmitter`

  ↳ **`CustomEventEmmiter`**

## Table of contents

### Constructors

- [constructor](event_emmiter.Internals.CustomEventEmmiter.md#constructor)

### Properties

- [#listeners](event_emmiter.Internals.CustomEventEmmiter.md##listeners)

### Methods

- [emitAsync](event_emmiter.Internals.CustomEventEmmiter.md#emitasync)
- [register](event_emmiter.Internals.CustomEventEmmiter.md#register)
- [registerListeners](event_emmiter.Internals.CustomEventEmmiter.md#registerlisteners)
- [unregisterListeners](event_emmiter.Internals.CustomEventEmmiter.md#unregisterlisteners)

## Constructors

### constructor

• **new CustomEventEmmiter**()

#### Overrides

EventEmitter.constructor

#### Defined in

[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L21)

## Properties

### #listeners

• `Private` **#listeners**: `Set`<[`ListenerDescriptor`](../modules/event_emmiter.Internals.md#listenerdescriptor)<`unknown`\>\>

#### Defined in

[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L19)

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

[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L80)

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
| `metatype` | [`Type`](../interfaces/types.Type.md)<`T`\> | The object that contains the property above |

#### Returns

`void`

#### Defined in

[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L31)

___

### registerListeners

▸ **registerListeners**(`container`): `void`

Apply all event handlers hold by the `listenerDescriptor`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `AwilixContainer`<`any`\> | The IoC container that allow to resolve instance |

#### Returns

`void`

#### Defined in

[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L43)

___

### unregisterListeners

▸ **unregisterListeners**(): `void`

#### Returns

`void`

#### Defined in

[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L68)
