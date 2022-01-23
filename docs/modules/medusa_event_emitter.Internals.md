[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa-event-emitter](medusa_event_emitter.md) / Internals

# Namespace: Internals

[medusa-event-emitter](medusa_event_emitter.md).Internals

## Table of contents

### Classes

- [MedusaEventEmitter](../classes/medusa_event_emitter.Internals.MedusaEventEmitter.md)

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
| `metatype` | [`MedusaServiceStatic`](../interfaces/types.MedusaServiceStatic.md)<`T`\> |
| `propertyName` | `string` |

#### Defined in

[medusa-event-emitter.ts:8](https://github.com/adrien2p/medusa-extender/blob/badcc5e/src/medusa-event-emitter.ts#L8)
