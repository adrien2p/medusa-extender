[medusa-extender](../README.md) / [Exports](../modules.md) / core/metadata-reader

# Module: core/metadata-reader

## Table of contents

### Namespaces

- [Internals](core_metadata_reader.Internals.md)

### Functions

- [componentsMetadataReader](core_metadata_reader.md#componentsmetadatareader)
- [metadataReader](core_metadata_reader.md#metadatareader)

## Functions

### componentsMetadataReader

▸ **componentsMetadataReader**<`TComponentType`\>(`component`): [`InjectableOptions`](core_types.md#injectableoptions)<`TComponentType`\> & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  }

**`internal`**

Return the options from components.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`Type`](../interfaces/core_types.Type.md)<`unknown`\> |

#### Returns

[`InjectableOptions`](core_types.md#injectableoptions)<`TComponentType`\> & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  }

#### Defined in

[src/core/metadata-reader.ts:49](https://github.com/adrien2p/medusa-extender/blob/3ee1b1f/src/core/metadata-reader.ts#L49)

___

### metadataReader

▸ **metadataReader**(`modules`): [`CustomMap`](../classes/core_metadata_reader.Internals.CustomMap.md)

**`internal`**

Read all metadata from the imported modules and extract components that will be stored by there type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/core_types.Type.md)<`unknown`\>[] | The modules from which the metadata are read. |

#### Returns

[`CustomMap`](../classes/core_metadata_reader.Internals.CustomMap.md)

#### Defined in

[src/core/metadata-reader.ts:16](https://github.com/adrien2p/medusa-extender/blob/3ee1b1f/src/core/metadata-reader.ts#L16)
