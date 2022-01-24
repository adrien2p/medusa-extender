[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa-loader](../modules/medusa_loader.md) / MedusaLoader

# Class: MedusaLoader

[medusa-loader](../modules/medusa_loader.md).MedusaLoader

**`internal`**
Load medusa and apply all middlewares and migrations before registering the medusa
internal container and database connection.

## Table of contents

### Constructors

- [constructor](medusa_loader.MedusaLoader.md#constructor)

### Methods

- [load](medusa_loader.MedusaLoader.md#load)
- [registerEventEmitterMiddleware](medusa_loader.MedusaLoader.md#registereventemittermiddleware)
- [runCustomMigrations](medusa_loader.MedusaLoader.md#runcustommigrations)
- [startMedusaEngine](medusa_loader.MedusaLoader.md#startmedusaengine)

## Constructors

### constructor

• **new MedusaLoader**()

## Methods

### load

▸ **load**(`rootDir`, `express`): `Promise`<`AwilixContainer`<`any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Returns

`Promise`<`AwilixContainer`<`any`\>\>

#### Defined in

[src/medusa-loader.ts:68](https://github.com/adrien2p/medusa-extender/blob/c135947/src/medusa-loader.ts#L68)

___

### registerEventEmitterMiddleware

▸ `Private` **registerEventEmitterMiddleware**(`app`): `Promise`<`void`\>

Register all listeners before the plugins are loaded to be sure that the scope middleware has already been created.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `Express` | Express app |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/medusa-loader.ts:104](https://github.com/adrien2p/medusa-extender/blob/c135947/src/medusa-loader.ts#L104)

___

### runCustomMigrations

▸ `Private` **runCustomMigrations**(`migrations`, `dbConnection`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `migrations` | [`Constructor`](../modules/types.md#constructor)<`MigrationInterface`\>[] | Any custom migration that implements MigrationInterface |
| `dbConnection` | `Connection` | Database connection from medusa internal |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/medusa-loader.ts:149](https://github.com/adrien2p/medusa-extender/blob/c135947/src/medusa-loader.ts#L149)

___

### startMedusaEngine

▸ `Private` **startMedusaEngine**(`rootDir`, `express`): `Promise`<[`MedusaStartApp`](../modules/medusa_loader.Internals.md#medusastartapp)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Returns

`Promise`<[`MedusaStartApp`](../modules/medusa_loader.Internals.md#medusastartapp)\>

#### Defined in

[src/medusa-loader.ts:134](https://github.com/adrien2p/medusa-extender/blob/c135947/src/medusa-loader.ts#L134)
