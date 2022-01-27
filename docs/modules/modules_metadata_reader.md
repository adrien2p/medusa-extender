[medusa-extender](../README.md) / [Exports](../modules.md) / modules-metadata-reader

# Module: modules-metadata-reader

## Table of contents

### Namespaces

- [Internals](modules_metadata_reader.Internals.md)

### Functions

- [componentsMetadataReader](modules_metadata_reader.md#componentsmetadatareader)
- [modulesMetadataReader](modules_metadata_reader.md#modulesmetadatareader)

## Functions

### componentsMetadataReader

▸ **componentsMetadataReader**<`TComponentType`\>(`component`): [`InjectableOptions`](types.md#injectableoptions)<`TComponentType`\>

**`internal`**
Return the options from components.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TComponentType` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`Type`](../interfaces/types.Type.md)<`unknown`\> |

#### Returns

[`InjectableOptions`](types.md#injectableoptions)<`TComponentType`\>

#### Defined in

[src/modules-metadata-reader.ts:43](https://github.com/adrien2p/medusa-extender/blob/80081b5/src/modules-metadata-reader.ts#L43)

___

### modulesMetadataReader

▸ **modulesMetadataReader**(`modules`): [`CustomMap`](../classes/modules_metadata_reader.Internals.CustomMap.md)

Read all metadata from the imported modules and extract components that will be stored by there type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/types.Type.md)<`unknown`\>[] | The modules from which the metadata are read. |

#### Returns

[`CustomMap`](../classes/modules_metadata_reader.Internals.CustomMap.md)

#### Defined in

[src/modules-metadata-reader.ts:15](https://github.com/adrien2p/medusa-extender/blob/80081b5/src/modules-metadata-reader.ts#L15)
