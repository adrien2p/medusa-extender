[medusa-extender](../README.md) / [Exports](../modules.md) / [core/logger](../modules/core_logger.md) / Logger

# Class: Logger

[core/logger](../modules/core_logger.md).Logger

**`internal`**
Internal logger to display information about the build.

## Table of contents

### Constructors

- [constructor](core_logger.Logger.md#constructor)

### Properties

- [context](core_logger.Logger.md#context)
- [logsQueue](core_logger.Logger.md#logsqueue)

### Methods

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

[src/core/logger.ts:11](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L11)

## Properties

### context

• `Private` `Readonly` **context**: `string`

#### Defined in

[src/core/logger.ts:9](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L9)

___

### logsQueue

• `Private` **logsQueue**: `any`[] = `[]`

#### Defined in

[src/core/logger.ts:8](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L8)

## Methods

### flush

▸ **flush**(): [`Logger`](core_logger.Logger.md)

Show all queues logs and then reset the queue.

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:50](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L50)

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

[src/core/logger.ts:38](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L38)

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

[src/core/logger.ts:24](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L24)

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

[src/core/logger.ts:15](https://github.com/adrien2p/medusa-extender/blob/8c068bd/src/core/logger.ts#L15)
