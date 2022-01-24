[medusa-extender](../README.md) / [Exports](../modules.md) / medusa-scanner

# Module: medusa-scanner

## Table of contents

### Namespaces

- [Internals](medusa_scanner.Internals.md)

### Functions

- [scanFor](medusa_scanner.md#scanfor)

## Functions

### scanFor

▸ **scanFor**<`T`\>(`directory`, `constraints`, `results?`): `Promise`<[`ScannerResults`](medusa_scanner.Internals.md#scannerresults)<`T`\>\>

Scan directories from top to bottom to find any file that match the constraints and return the default exported
member from this file.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `directory` | `string` | Directory from which to start |
| `constraints` | `Object` | The constraints to match a file |
| `constraints.extname?` | `string` | - |
| `constraints.searchFor` | { `lastSegmentPathDir?`: `string` ; `retrievalKey`: `string`  }[] | - |
| `results` | [`ScannerResults`](medusa_scanner.Internals.md#scannerresults)<`T`\> | The collection of default exported member |

#### Returns

`Promise`<[`ScannerResults`](medusa_scanner.Internals.md#scannerresults)<`T`\>\>

#### Defined in

[src/medusa-scanner.ts:15](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/medusa-scanner.ts#L15)
