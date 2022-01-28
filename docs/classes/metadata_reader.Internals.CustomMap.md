[medusa-extender](../README.md) / [Exports](../modules.md) / [metadata-reader](../modules/metadata_reader.md) / [Internals](../modules/metadata_reader.Internals.md) / CustomMap

# Class: CustomMap

[metadata-reader](../modules/metadata_reader.md).[Internals](../modules/metadata_reader.Internals.md).CustomMap

## Hierarchy

- `Map`<[`InjectableComponentTypes`](../modules/types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/types.md#getinjectableoptions)\>

  ↳ **`CustomMap`**

## Table of contents

### Constructors

- [constructor](metadata_reader.Internals.CustomMap.md#constructor)

### Methods

- [get](metadata_reader.Internals.CustomMap.md#get)

## Constructors

### constructor

• **new CustomMap**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [[`InjectableComponentTypes`](../modules/types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/types.md#getinjectableoptions)<[`InjectableComponentTypes`](../modules/types.md#injectablecomponenttypes)\>][] |

#### Inherited from

Map<InjectableComponentTypes, GetInjectableOptions\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new CustomMap**(`iterable`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<readonly [[`InjectableComponentTypes`](../modules/types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/types.md#getinjectableoptions)<[`InjectableComponentTypes`](../modules/types.md#injectablecomponenttypes)\>]\> |

#### Inherited from

Map<InjectableComponentTypes, GetInjectableOptions\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:160

## Methods

### get

▸ **get**<`TComponentType`\>(`key`): [`GetInjectableOptions`](../modules/types.md#getinjectableoptions)<`TComponentType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | extends [`InjectableComponentTypes`](../modules/types.md#injectablecomponenttypes) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TComponentType` |

#### Returns

[`GetInjectableOptions`](../modules/types.md#getinjectableoptions)<`TComponentType`\>

#### Overrides

Map.get

#### Defined in

[src/metadata-reader.ts:6](https://github.com/adrien2p/medusa-extender/blob/8756338/src/metadata-reader.ts#L6)
