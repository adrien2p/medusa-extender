[medusa-extender](../README.md) / [Exports](../modules.md) / cli/commands/generate-component

# Module: cli/commands/generate-component

## Table of contents

### Type aliases

- [GenerateCommandOptions](cli_commands_generate_component.md#generatecommandoptions)

### Functions

- [createComponentIfNecessary](cli_commands_generate_component.md#createcomponentifnecessary)
- [generateComponent](cli_commands_generate_component.md#generatecomponent)
- [updateModuleImports](cli_commands_generate_component.md#updatemoduleimports)

## Type aliases

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

[src/cli/commands/generate-component.ts:21](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/cli/commands/generate-component.ts#L21)

## Functions

### createComponentIfNecessary

▸ **createComponentIfNecessary**(`__namedParameters`, `content`): `void`

Create the component file and fill it with the template content.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.componentFileName` | `string` |
| `__namedParameters.componentName` | `string` |
| `__namedParameters.fullDestinationPath` | `string` |
| `content` | `string` |

#### Returns

`void`

#### Defined in

[src/cli/commands/generate-component.ts:113](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/cli/commands/generate-component.ts#L113)

___

### generateComponent

▸ **generateComponent**(`name`, `__namedParameters`): `void`

Generate the required components from the user command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `__namedParameters` | [`GenerateCommandOptions`](cli_commands_generate_component.md#generatecommandoptions) |

#### Returns

`void`

#### Defined in

[src/cli/commands/generate-component.ts:48](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/cli/commands/generate-component.ts#L48)

___

### updateModuleImports

▸ **updateModuleImports**(`fullDestinationPath`): `void`

Lookup for the closest module from the component and update its imports.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullDestinationPath` | `string` |

#### Returns

`void`

#### Defined in

[src/cli/commands/generate-component.ts:140](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/cli/commands/generate-component.ts#L140)
