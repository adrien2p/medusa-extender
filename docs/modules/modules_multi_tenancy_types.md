[medusa-extender](../README.md) / [Exports](../modules.md) / modules/multi-tenancy/types

# Module: modules/multi-tenancy/types

## Table of contents

### Interfaces

- [MultiTenancyOptions](../interfaces/modules_multi_tenancy_types.MultiTenancyOptions.md)

### Type aliases

- [ConfigModule](modules_multi_tenancy_types.md#configmodule)

## Type aliases

### ConfigModule

Ƭ **ConfigModule**: `Record`<`string`, `unknown`\> & { `multiTenancy?`: [`MultiTenancyOptions`](../interfaces/modules_multi_tenancy_types.MultiTenancyOptions.md) ; `projectConfig`: { `database_logging?`: `LoggerOptions`  }  }

#### Defined in

[src/modules/multi-tenancy/types.ts:4](https://github.com/octalpixel/medusa-extender/blob/1a4be63/src/modules/multi-tenancy/types.ts#L4)
