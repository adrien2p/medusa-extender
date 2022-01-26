[medusa-extender](../README.md) / [Exports](../modules.md) / [loader](../modules/loader.md) / Loader

# Class: Loader

[loader](../modules/loader.md).Loader

**`internal`**
Load medusa and apply all middlewares and migrations before registering the medusa
internal container and database connection.

## Table of contents

### Constructors

- [constructor](loader.Loader.md#constructor)

### Methods

- [load](loader.Loader.md#load)
- [registerEventEmitterMiddleware](loader.Loader.md#registereventemittermiddleware)
- [runCustomMigrations](loader.Loader.md#runcustommigrations)
- [startMedusaEngine](loader.Loader.md#startmedusaengine)

## Constructors

### constructor

• **new Loader**()

## Methods

### load

▸ **load**(`modules`, `rootDir`, `express`): `Promise`<`AwilixContainer`<`any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modules` | [`Type`](../interfaces/types.Type.md)<`unknown`\>[] |  |
| `rootDir` | `string` | Directory where `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Returns

`Promise`<`AwilixContainer`<`any`\>\>

#### Defined in

[src/loader.ts:45](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loader.ts#L45)

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

[src/loader.ts:70](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loader.ts#L70)

___

### runCustomMigrations

▸ `Private` **runCustomMigrations**(`migrationsOptions`, `dbConnection`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `migrationsOptions` | [`GetInjectableOptions`](../modules/types.md#getinjectableoptions)<``"migration"``\> | Any custom migration that implements MigrationInterface |
| `dbConnection` | `Connection` | Database connection from medusa internal |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/loader.ts:115](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loader.ts#L115)

___

### startMedusaEngine

▸ `Private` **startMedusaEngine**(`rootDir`, `express`): `Promise`<[`MedusaStartApp`](../modules/loader.Internals.md#medusastartapp)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Returns

`Promise`<[`MedusaStartApp`](../modules/loader.Internals.md#medusastartapp)\>

#### Defined in

[src/loader.ts:100](https://github.com/adrien2p/medusa-extender/blob/9345158/src/loader.ts#L100)
