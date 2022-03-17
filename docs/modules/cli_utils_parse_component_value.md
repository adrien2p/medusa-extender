[medusa-extender](../README.md) / [Exports](../modules.md) / cli/utils/parse-component-value

# Module: cli/utils/parse-component-value

## Table of contents

### Functions

- [parseComponentValue](cli_utils_parse_component_value.md#parsecomponentvalue)

## Functions

### parseComponentValue

▸ **parseComponentValue**(`name`, `componentType`, `path?`): `Object`

Parse the component information to create a kind of descriptor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `componentType` | `string` |
| `path` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `componentFileName` | `string` |
| `componentName` | `string` |
| `fullDestinationPath` | `string` |
| `relativeDestinationPath` | `string` |

#### Defined in

[src/cli/utils/parse-component-value.ts:7](https://github.com/adrien2p/medusa-extender/blob/6e8e0f9/src/cli/utils/parse-component-value.ts#L7)
