[medusa-extender](../README.md) / [Exports](../modules.md) / [core/event-emmiter](../modules/core_event_emmiter.md) / [Internals](../modules/core_event_emmiter.Internals.md) / CustomEventEmitter

# Class: CustomEventEmitter

[core/event-emmiter](../modules/core_event_emmiter.md).[Internals](../modules/core_event_emmiter.Internals.md).CustomEventEmitter

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

[core/event-emmiter.ts:24](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/core/event-emmiter.ts#L24)

## Properties

### #listeners

• `Private` **#listeners**: `Map`<`string` \| `symbol`, [`ListenerDescriptor`](../modules/core_event_emmiter.Internals.md#listenerdescriptor)<`unknown`\>[]\>

#### Defined in

[core/event-emmiter.ts:22](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/core/event-emmiter.ts#L22)

## Methods

### emitAsync

▸ **emitAsync**<`T`\>(`eventName`, `values`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` |  |
| `values` | `Record`<`string`, `unknown`\> |  |

#### Returns

`Promise`<`T`\>

#### Defined in

[core/event-emmiter.ts:94](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/core/event-emmiter.ts#L94)

___

### register

▸ **register**<`T`\>(`eventName`, `propertyName`, `metatype`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` |  |
| `propertyName` | `string` |  |
| `metatype` | [`Type`](../interfaces/core_types.Type.md)<`T`\> |  |

#### Returns

`void`

#### Defined in

[core/event-emmiter.ts:34](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/core/event-emmiter.ts#L34)

___

### registerListeners

▸ **registerListeners**(`container`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `AwilixContainer`<`any`\> |  |

#### Returns

`void`

#### Defined in

[core/event-emmiter.ts:47](https://github.com/adrien2p/medusa-extender/blob/12c4270/src/core/event-emmiter.ts#L47)
