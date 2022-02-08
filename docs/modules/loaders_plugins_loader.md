[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/plugins.loader

# Module: loaders/plugins.loader

## Table of contents

### Functions

- [pluginsLoadersAndListeners](loaders_plugins_loader.md#pluginsloadersandlisteners)

## Functions

### pluginsLoadersAndListeners

▸ **pluginsLoadersAndListeners**(`app`): `Promise`<`void`\>

**`internal`**
Register all listeners before the plugins are loaded to be sure that the scope middleware has already been created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Express` | Express app |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loaders/plugins.loader.ts:11](https://github.com/adrien2p/medusa-extender/blob/0490090/src/loaders/plugins.loader.ts#L11)
