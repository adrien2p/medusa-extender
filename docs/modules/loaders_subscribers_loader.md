[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/subscribers.loader

# Module: loaders/subscribers.loader

## Table of contents

### Functions

- [subscribersLoader](loaders_subscribers_loader.md#subscribersloader)

## Functions

### subscribersLoader

▸ **subscribersLoader**(`subscribersOptions`): `Promise`<`void`\>

**`internal`**
Load all custom extended validators into the underlying @medusajs instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscribersOptions` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"subscriber"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/subscribers.loader.ts:12](https://github.com/adrien2p/medusa-extender/blob/da12f07/src/loaders/subscribers.loader.ts#L12)
