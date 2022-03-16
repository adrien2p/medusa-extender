[medusa-extender](../README.md) / [Exports](../modules.md) / [modules/monitoring](../modules/modules_monitoring.md) / MonitoringOptions

# Interface: MonitoringOptions

[modules/monitoring](../modules/modules_monitoring.md).MonitoringOptions

## Table of contents

### Properties

- [apdexThreshold](modules_monitoring.MonitoringOptions.md#apdexthreshold)
- [authentication](modules_monitoring.MonitoringOptions.md#authentication)
- [durationBuckets](modules_monitoring.MonitoringOptions.md#durationbuckets)
- [elasticsearch](modules_monitoring.MonitoringOptions.md#elasticsearch)
- [hostname](modules_monitoring.MonitoringOptions.md#hostname)
- [ip](modules_monitoring.MonitoringOptions.md#ip)
- [requestSizeBuckets](modules_monitoring.MonitoringOptions.md#requestsizebuckets)
- [responseSizeBuckets](modules_monitoring.MonitoringOptions.md#responsesizebuckets)
- [sessionMaxAge](modules_monitoring.MonitoringOptions.md#sessionmaxage)
- [swaggerSpec](modules_monitoring.MonitoringOptions.md#swaggerspec)
- [timelineBucketDuration](modules_monitoring.MonitoringOptions.md#timelinebucketduration)
- [uriPath](modules_monitoring.MonitoringOptions.md#uripath)
- [version](modules_monitoring.MonitoringOptions.md#version)

### Methods

- [onAuthenticate](modules_monitoring.MonitoringOptions.md#onauthenticate)
- [onResponseFinish](modules_monitoring.MonitoringOptions.md#onresponsefinish)

## Properties

### apdexThreshold

• `Optional` **apdexThreshold**: `number`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:15](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L15)
=======
[src/modules/monitoring.ts:15](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L15)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:15](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L15)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### authentication

• `Optional` **authentication**: `boolean`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:17](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L17)
=======
[src/modules/monitoring.ts:17](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L17)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:17](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L17)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### durationBuckets

• `Optional` **durationBuckets**: `number`[]

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:12](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L12)
=======
[src/modules/monitoring.ts:12](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L12)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:12](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L12)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### elasticsearch

• `Optional` **elasticsearch**: `string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:19](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L19)
=======
[src/modules/monitoring.ts:19](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L19)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:19](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L19)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:7](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L7)
=======
[src/modules/monitoring.ts:7](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L7)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:7](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L7)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### ip

• `Optional` **ip**: `string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:8](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L8)
=======
[src/modules/monitoring.ts:8](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L8)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:8](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L8)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### requestSizeBuckets

• `Optional` **requestSizeBuckets**: `number`[]

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:13](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L13)
=======
[src/modules/monitoring.ts:13](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L13)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:13](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L13)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### responseSizeBuckets

• `Optional` **responseSizeBuckets**: `number`[]

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:14](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L14)
=======
[src/modules/monitoring.ts:14](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L14)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:14](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L14)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### sessionMaxAge

• `Optional` **sessionMaxAge**: `number`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:18](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L18)
=======
[src/modules/monitoring.ts:18](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L18)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:18](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L18)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### swaggerSpec

• `Optional` **swaggerSpec**: `string` \| `Document`<{}\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:10](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L10)
=======
[src/modules/monitoring.ts:10](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L10)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:10](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L10)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### timelineBucketDuration

• `Optional` **timelineBucketDuration**: `number`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:9](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L9)
=======
[src/modules/monitoring.ts:9](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L9)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:9](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L9)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### uriPath

• **uriPath**: `string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:11](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L11)
=======
[src/modules/monitoring.ts:11](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L11)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:11](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L11)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### version

• `Optional` **version**: `string`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:6](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L6)
=======
[src/modules/monitoring.ts:6](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L6)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:6](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L6)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

## Methods

### onAuthenticate

▸ `Optional` **onAuthenticate**(`req`, `username`, `password`): `boolean` \| `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `username` | `string` |
| `password` | `string` |

#### Returns

`boolean` \| `Promise`<`boolean`\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:20](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L20)
=======
[src/modules/monitoring.ts:20](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L20)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:20](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L20)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation

___

### onResponseFinish

▸ `Optional` **onResponseFinish**(`req`, `res`, `next`): `void` \| `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void` \| `Promise`<`void`\>

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
[src/modules/monitoring.ts:16](https://github.com/adrien2p/medusa-extender/blob/8d611e7/src/modules/monitoring.ts#L16)
=======
[src/modules/monitoring.ts:16](https://github.com/adrien2p/medusa-extender/blob/b9aa690/src/modules/monitoring.ts#L16)
>>>>>>> 04c62ec... docs(cli): Update cli documentation
=======
[src/modules/monitoring.ts:16](https://github.com/adrien2p/medusa-extender/blob/d7ce7dc/src/modules/monitoring.ts#L16)
>>>>>>> 17eff7d... docs(cli): Update CLI reference api documentation
