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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/event-emmiter.ts#L21)
=======
[src/core/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/event-emmiter.ts#L21)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/event-emmiter.ts#L21)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

## Properties

### #listeners

• `Private` **#listeners**: `Set`<[`ListenerDescriptor`](../modules/core_event_emmiter.Internals.md#listenerdescriptor)<`unknown`\>\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/event-emmiter.ts#L19)
=======
[src/core/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/event-emmiter.ts#L19)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/event-emmiter.ts#L19)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/event-emmiter.ts#L80)
=======
[src/core/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/event-emmiter.ts#L80)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/event-emmiter.ts#L80)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/event-emmiter.ts#L31)
=======
[src/core/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/event-emmiter.ts#L31)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/event-emmiter.ts#L31)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

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

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/event-emmiter.ts#L43)
=======
[src/core/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/event-emmiter.ts#L43)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/event-emmiter.ts#L43)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### unregisterListeners

▸ **unregisterListeners**(): `void`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/core/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/core/event-emmiter.ts#L68)
=======
[src/core/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/core/event-emmiter.ts#L68)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/core/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/core/event-emmiter.ts#L68)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
