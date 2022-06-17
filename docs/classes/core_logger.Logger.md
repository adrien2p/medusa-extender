[medusa-extender](../README.md) / [Exports](../modules.md) / [core/logger](../modules/core_logger.md) / Logger

# Class: Logger

[core/logger](../modules/core_logger.md).Logger

**`internal`**
Internal logger to display information about the build.

## Table of contents

### Constructors

- [constructor](core_logger.Logger.md#constructor)

### Properties

- [\_app](core_logger.Logger.md#_app)
- [\_context](core_logger.Logger.md#_context)
- [logsQueue](core_logger.Logger.md#logsqueue)

### Accessors

- [app](core_logger.Logger.md#app)
- [context](core_logger.Logger.md#context)

### Methods

- [buildLog](core_logger.Logger.md#buildlog)
- [error](core_logger.Logger.md#error)
- [flush](core_logger.Logger.md#flush)
- [log](core_logger.Logger.md#log)
- [push](core_logger.Logger.md#push)
- [warn](core_logger.Logger.md#warn)
- [contextualize](core_logger.Logger.md#contextualize)

## Constructors

### constructor

• **new Logger**(`context`, `app`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string` |
| `app` | `string` |

#### Defined in

[src/core/logger.ts:20](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L20)

## Properties

### \_app

• `Private` `Readonly` **\_app**: `string`

#### Defined in

[src/core/logger.ts:10](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L10)

___

### \_context

• `Private` `Readonly` **\_context**: `string`

#### Defined in

[src/core/logger.ts:9](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L9)

___

### logsQueue

• `Private` **logsQueue**: `any`[] = `[]`

#### Defined in

[src/core/logger.ts:8](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L8)

## Accessors

### app

• `get` **app**(): `string`

#### Returns

`string`

#### Defined in

[src/core/logger.ts:16](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L16)

___

### context

• `get` **context**(): `string`

#### Returns

`string`

#### Defined in

[src/core/logger.ts:12](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L12)

## Methods

### buildLog

▸ `Private` **buildLog**(`color`, `description`, ...`variables`): [`Logger`](core_logger.Logger.md)

Build logs taking in count the level color

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Chalk` |
| `description` | `string` |
| `...variables` | `string`[] |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:89](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L89)

___

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

[src/core/logger.ts:66](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L66)

___

### flush

▸ **flush**(): [`Logger`](core_logger.Logger.md)

display all queues logs and then reset the queue.

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:73](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L73)

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

[src/core/logger.ts:48](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L48)

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

[src/core/logger.ts:34](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L34)

___

### warn

▸ **warn**(`description`, ...`variables`): [`Logger`](core_logger.Logger.md)

Display warning immediately.

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `...variables` | `string`[] |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:57](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L57)

___

### contextualize

▸ `Static` **contextualize**(`context`, `app?`): [`Logger`](core_logger.Logger.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `context` | `string` | `undefined` |
| `app` | `string` | `'Server'` |

#### Returns

[`Logger`](core_logger.Logger.md)

#### Defined in

[src/core/logger.ts:25](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/core/logger.ts#L25)
