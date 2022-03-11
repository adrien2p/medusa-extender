[medusa-extender](../README.md) / [Exports](../modules.md) / [core/metadata-reader](../modules/core_metadata_reader.md) / [Internals](../modules/core_metadata_reader.Internals.md) / CustomMap

# Class: CustomMap

[core/metadata-reader](../modules/core_metadata_reader.md).[Internals](../modules/core_metadata_reader.Internals.md).CustomMap

## Hierarchy

- `Map`<[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)\>

  ↳ **`CustomMap`**

## Table of contents

### Constructors

- [constructor](core_metadata_reader.Internals.CustomMap.md#constructor)

### Methods

- [get](core_metadata_reader.Internals.CustomMap.md#get)

## Constructors

### constructor

• **new CustomMap**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)<[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes)\>][] |

#### Inherited from

Map<InjectableComponentTypes, GetInjectableOptions\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new CustomMap**(`iterable?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `Iterable`<readonly [[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)<[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes)\>]\> |

#### Inherited from

Map<InjectableComponentTypes, GetInjectableOptions\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:161

## Methods

### get

▸ **get**<`TComponentType`\>(`key`): [`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)<`TComponentType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TComponentType` |

#### Returns

[`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)<`TComponentType`\>

#### Overrides

Map.get

#### Defined in

[src/core/metadata-reader.ts:5](https://github.com/adrien2p/medusa-extender/blob/ef51195/src/core/metadata-reader.ts#L5)
