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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L21)
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L21)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L21)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L21)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L21)
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L21)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L21)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L21)
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L21)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/event-emmiter.ts:21](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L21)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC

## Properties

### #listeners

• `Private` **#listeners**: `Set`<[`ListenerDescriptor`](../modules/event_emmiter.Internals.md#listenerdescriptor)<`unknown`\>\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L19)
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L19)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L19)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L19)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L19)
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L19)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L19)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L19)
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L19)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/event-emmiter.ts:19](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L19)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L80)
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L80)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L80)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L80)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L80)
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L80)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L80)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L80)
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L80)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/event-emmiter.ts:80](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L80)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L31)
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L31)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L31)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L31)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L31)
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L31)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L31)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L31)
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L31)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/event-emmiter.ts:31](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L31)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L43)
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L43)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L43)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L43)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L43)
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L43)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L43)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L43)
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L43)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/event-emmiter.ts:43](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L43)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC

___

### unregisterListeners

▸ **unregisterListeners**(): `void`

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L68)
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L68)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L68)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L68)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/event-emmiter.ts#L68)
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/event-emmiter.ts#L68)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L68)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/event-emmiter.ts#L68)
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/event-emmiter.ts#L68)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/event-emmiter.ts:68](https://github.com/adrien2p/medusa-extender/blob/0490090/src/event-emmiter.ts#L68)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
>>>>>>> 57061ec... [BOT] BUILD DOC
