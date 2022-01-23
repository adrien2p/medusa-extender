[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa](../modules/medusa.md) / Medusa

# Class: Medusa

[medusa](../modules/medusa.md).Medusa

Register steps that must be executed before/after medusa is load.

## Table of contents

### Constructors

- [constructor](medusa.Medusa.md#constructor)

### Properties

- [#afterSteps](medusa.Medusa.md##aftersteps)
- [#beforeSteps](medusa.Medusa.md##beforesteps)
- [#express](medusa.Medusa.md##express)
- [#middlewareRepository](medusa.Medusa.md##middlewarerepository)
- [#rootDir](medusa.Medusa.md##rootdir)

### Methods

- [consume](medusa.Medusa.md#consume)
- [load](medusa.Medusa.md#load)
- [registerStepAfterMedusaLaunch](medusa.Medusa.md#registerstepaftermedusalaunch)
- [registerStepBeforeMedusaLaunch](medusa.Medusa.md#registerstepbeforemedusalaunch)
- [runSteps](medusa.Medusa.md#runsteps)

## Constructors

### constructor

• **new Medusa**(`rootDir`, `express`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rootDir` | `string` | Directory where the `medusa-config` is located |
| `express` | `Express` | Express instance |

#### Defined in

[medusa.ts:30](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L30)

## Properties

### #afterSteps

• `Private` `Readonly` **#afterSteps**: `Set`<{ `options`: [`StepOptions`](../modules/medusa.Internals.md#stepoptions) ; `step`: [`Step`](../modules/medusa.Internals.md#step)  }\>

#### Defined in

[medusa.ts:24](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L24)

___

### #beforeSteps

• `Private` `Readonly` **#beforeSteps**: `Set`<{ `options`: [`StepOptions`](../modules/medusa.Internals.md#stepoptions) ; `step`: [`Step`](../modules/medusa.Internals.md#step)  }\>

#### Defined in

[medusa.ts:23](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L23)

___

### #express

• `Private` `Readonly` **#express**: `Express`

#### Defined in

[medusa.ts:20](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L20)

___

### #middlewareRepository

• `Private` `Readonly` **#middlewareRepository**: [`MedusaMiddlewareRepository`](medusa_middleware_repository.MedusaMiddlewareRepository.md)<[`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md)\> = `medusaMiddlewareRepository`

#### Defined in

[medusa.ts:21](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L21)

___

### #rootDir

• `Private` `Readonly` **#rootDir**: `string`

#### Defined in

[medusa.ts:22](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L22)

## Methods

### consume

▸ **consume**(...`middlewares`): [`Medusa`](medusa.Medusa.md)

Register middlewares to be apply before/after auth middleware.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...middlewares` | [`MedusaMiddlewareStatic`](../interfaces/types.MedusaMiddlewareStatic.md)[] | The middlewares to consume |

#### Returns

[`Medusa`](medusa.Medusa.md)

#### Defined in

[medusa.ts:39](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L39)

___

### load

▸ **load**(): `Promise`<`void`\>

Launch all the steps before/after medusa according to the `stepOptions`.

#### Returns

`Promise`<`void`\>

#### Defined in

[medusa.ts:76](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L76)

___

### registerStepAfterMedusaLaunch

▸ **registerStepAfterMedusaLaunch**(`step`): [`Medusa`](medusa.Medusa.md)

Register a step that must be executed after medusa is loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `step` | [`Step`](../modules/medusa.Internals.md#step) | The step to execute |

#### Returns

[`Medusa`](medusa.Medusa.md)

#### Defined in

[medusa.ts:67](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L67)

___

### registerStepBeforeMedusaLaunch

▸ **registerStepBeforeMedusaLaunch**(`step`): [`Medusa`](medusa.Medusa.md)

Register a step that must be executed before medusa is loaded.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `step` | [`Step`](../modules/medusa.Internals.md#step) | The step to execute |

#### Returns

[`Medusa`](medusa.Medusa.md)

#### Defined in

[medusa.ts:57](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L57)

___

### runSteps

▸ `Private` **runSteps**(`steps`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `steps` | [`Step`](../modules/medusa.Internals.md#step)[] | Steps that must be executed |

#### Returns

`Promise`<`void`\>

Promise<void>

#### Defined in

[medusa.ts:99](https://github.com/adrien2p/medusa-extender/blob/b528092/src/medusa.ts#L99)
