[medusa-extender](../README.md) / [Exports](../modules.md) / loaders/plugins.loader

# Module: loaders/plugins.loader

## Table of contents

### Functions

- [pluginsLoadersProvidersAndListeners](loaders_plugins_loader.md#pluginsloadersprovidersandlisteners)

## Functions

### pluginsLoadersProvidersAndListeners

▸ **pluginsLoadersProvidersAndListeners**(`app`, `providers`): `Promise`<`void`\>

**`internal`**
Register all listeners before the plugins are loaded to be sure that the scope middleware has already been created.
Also register all providers that are typically created in plugins.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Express` | Express app |
| `providers` | [`GetInjectableOptions`](core_types.md#getinjectableoptions)<``"provider"``\> |  |

#### Returns

`Promise`<`void`\>

#### Defined in

[loaders/plugins.loader.ts:14](https://github.com/adrien2p/medusa-extender/blob/03cec4f/src/loaders/plugins.loader.ts#L14)
