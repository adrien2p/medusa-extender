[medusa-extender](../README.md) / [Exports](../modules.md) / [core/event-emmiter](core_event_emmiter.md) / Internals

# Namespace: Internals

[core/event-emmiter](core_event_emmiter.md).Internals

## Table of contents

### Classes

- [CustomEventEmmiter](../classes/core_event_emmiter.Internals.CustomEventEmmiter.md)

### Type aliases

- [ListenerDescriptor](core_event_emmiter.Internals.md#listenerdescriptor)

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
| `metatype` | [`Type`](../interfaces/core_types.Type.md)<`T`\> |
| `propertyName` | `string` |

#### Defined in

[src/core/event-emmiter.ts:10](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/event-emmiter.ts#L10)
