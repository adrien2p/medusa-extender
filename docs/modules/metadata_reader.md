[medusa-extender](../README.md) / [Exports](../modules.md) / metadata-reader

# Module: metadata-reader

## Table of contents

### Namespaces

- [Internals](metadata_reader.Internals.md)

### Functions

- [componentsMetadataReader](metadata_reader.md#componentsmetadatareader)
- [metadataReader](metadata_reader.md#metadatareader)

## Functions

### componentsMetadataReader

▸ **componentsMetadataReader**<`TComponentType`\>(`component`): [`InjectableOptions`](types.md#injectableoptions)<`TComponentType`\> & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  }

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

[`InjectableOptions`](types.md#injectableoptions)<`TComponentType`\> & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  }

#### Defined in

[src/metadata-reader.ts:36](https://github.com/adrien2p/medusa-extender/blob/af3b06d/src/metadata-reader.ts#L36)

___

### metadataReader

▸ **metadataReader**(`modules`): [`CustomMap`](../classes/metadata_reader.Internals.CustomMap.md)

Read all metadata from the imported modules and extract components that will be stored by there type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/types.Type.md)<`unknown`\>[] | The modules from which the metadata are read. |

#### Returns

[`CustomMap`](../classes/metadata_reader.Internals.CustomMap.md)

#### Defined in

[src/metadata-reader.ts:14](https://github.com/adrien2p/medusa-extender/blob/af3b06d/src/metadata-reader.ts#L14)
