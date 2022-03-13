[medusa-extender](../README.md) / [Exports](../modules.md) / [core/logger](../modules/core_logger.md) / Logger

# Class: Logger

[core/logger](../modules/core_logger.md).Logger

**`internal`**
Internal logger to display information about the build.

## Table of contents

### Constructors

- [constructor](core_logger.Logger.md#constructor)

### Properties

- [\_context](core_logger.Logger.md#_context)
- [logsQueue](core_logger.Logger.md#logsqueue)

### Accessors

- [context](core_logger.Logger.md#context)

### Methods

- [error](core_logger.Logger.md#error)
- [flush](core_logger.Logger.md#flush)
- [log](core_logger.Logger.md#log)
- [push](core_logger.Logger.md#push)
- [contextualize](core_logger.Logger.md#contextualize)

## Constructors

### constructor

• **new Logger**(`context`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Defined in

[src/core/logger.ts:15](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L15)

## Properties

### \_context

• `Private` `Readonly` **\_context**: `string`

#### Defined in

[src/core/logger.ts:9](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L9)

___

### logsQueue

• `Private` **logsQueue**: `any`[] = `[]`

#### Defined in

[src/core/logger.ts:8](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L8)

## Accessors

### context

• `get` **context**(): `string`

#### Returns

`string`

#### Defined in

[src/core/logger.ts:11](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L11)

## Methods

### error

▸ **error**(`description`, ...`variables`): [`Logger`](core_logger.Logger.md)

Display error logs in red immediately

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `...variables` | `string`[] |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:56](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L56)

___

### flush

▸ **flush**(): [`Logger`](core_logger.Logger.md)

Show all queues logs and then reset the queue.

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:68](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L68)

___

### log

▸ **log**(`description`, ...`variables`): [`Logger`](core_logger.Logger.md)

Display log immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `...variables` | `string`[] |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:42](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L42)

___

### push

▸ **push**(`description`, ...`variables`): [`Logger`](core_logger.Logger.md)

Push new logs to queue and then show them later on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `...variables` | `string`[] |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:28](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L28)

___

### contextualize

▸ `Static` **contextualize**(`context`): [`Logger`](core_logger.Logger.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:19](https://github.com/adrien2p/medusa-extender/blob/55f4a3a/src/core/logger.ts#L19)
