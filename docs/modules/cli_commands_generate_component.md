[medusa-extender](../README.md) / [Exports](../modules.md) / cli/commands/generate-component

# Module: cli/commands/generate-component

## Table of contents

### Type Aliases

- [GenerateCommandOptions](cli_commands_generate_component.md#generatecommandoptions)

### Functions

- [createComponentIfNecessary](cli_commands_generate_component.md#createcomponentifnecessary)
- [generateComponent](cli_commands_generate_component.md#generatecomponent)
- [updateModuleImports](cli_commands_generate_component.md#updatemoduleimports)

## Type Aliases

### GenerateCommandOptions

Ƭ **GenerateCommandOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity?` | `boolean` |
| `middleware?` | `boolean` |
| `migration?` | `boolean` |
| `module?` | `boolean` |
| `path?` | `string` |
| `repository?` | `boolean` |
| `router?` | `boolean` |
| `service?` | `boolean` |
| `validator?` | `boolean` |

#### Defined in

[cli/commands/generate-component.ts:21](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/cli/commands/generate-component.ts#L21)

## Functions

### createComponentIfNecessary

▸ **createComponentIfNecessary**(`«destructured»`, `content`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | - |
| › `componentFileName` | `string` | - |
| › `componentName` | `string` | - |
| › `fullDestinationPath` | `string` | - |
| `content` | `string` |  |

#### Returns

`void`

#### Defined in

[cli/commands/generate-component.ts:113](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/cli/commands/generate-component.ts#L113)

___

### generateComponent

▸ **generateComponent**(`name`, `«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `«destructured»` | [`GenerateCommandOptions`](cli_commands_generate_component.md#generatecommandoptions) |

#### Returns

`void`

#### Defined in

[cli/commands/generate-component.ts:48](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/cli/commands/generate-component.ts#L48)

___

### updateModuleImports

▸ **updateModuleImports**(`fullDestinationPath`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullDestinationPath` | `string` |  |

#### Returns

`void`

#### Defined in

[cli/commands/generate-component.ts:140](https://github.com/adrien2p/medusa-extender/blob/dcdc178/src/cli/commands/generate-component.ts#L140)
