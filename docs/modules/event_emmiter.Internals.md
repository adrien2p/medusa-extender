[medusa-extender](../README.md) / [Exports](../modules.md) / [event-emmiter](event_emmiter.md) / Internals

# Namespace: Internals

[event-emmiter](event_emmiter.md).Internals

## Table of contents

### Classes

- [CustomEventEmmiter](../classes/event_emmiter.Internals.CustomEventEmmiter.md)

### Type aliases

- [ListenerDescriptor](event_emmiter.Internals.md#listenerdescriptor)

## Type aliases

### ListenerDescriptor

Ƭ **ListenerDescriptor**<`T`\>: `Object`

A listener descriptor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `metatype` | [`Type`](../interfaces/types.Type.md)<`T`\> |
| `propertyName` | `string` |

#### Defined in

[src/event-emmiter.ts:9](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/event-emmiter.ts#L9)
