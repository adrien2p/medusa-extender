[medusa-extender](../README.md) / [Exports](../modules.md) / [core/componentMap](../modules/core_componentMap.md) / ComponentMap

# Class: ComponentMap

[core/componentMap](../modules/core_componentMap.md).ComponentMap

## Hierarchy

- `Map`<[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)\>

  ↳ **`ComponentMap`**

## Table of contents

### Constructors

- [constructor](core_componentMap.ComponentMap.md#constructor)

### Methods

- [get](core_componentMap.ComponentMap.md#get)

## Constructors

### constructor

• **new ComponentMap**(`entries?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes), [`GetInjectableOptions`](../modules/core_types.md#getinjectableoptions)<[`InjectableComponentTypes`](../modules/core_types.md#injectablecomponenttypes)\>][] |

#### Inherited from

Map<InjectableComponentTypes, GetInjectableOptions\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:33

• **new ComponentMap**(`iterable?`)

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

[src/core/componentMap.ts:4](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/componentMap.ts#L4)
