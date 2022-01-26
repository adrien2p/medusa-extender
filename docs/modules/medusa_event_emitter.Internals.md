[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa-event-emitter](medusa_event_emitter.md) / Internals

# Namespace: Internals

[medusa-event-emitter](medusa_event_emitter.md).Internals

## Table of contents

### Classes

- [EventEmmiter](../classes/medusa_event_emitter.Internals.EventEmmiter.md)

### Type aliases

- [ListenerDescriptor](medusa_event_emitter.Internals.md#listenerdescriptor)

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
| `metatype` | [`Metatype`](types.md#metatype)<`T`\> |
| `propertyName` | `string` |

#### Defined in

[src/event-emmiter.ts:8](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/medusa-event-emitter.ts#L8)
