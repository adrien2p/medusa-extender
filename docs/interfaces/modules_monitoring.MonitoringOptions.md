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

[src/modules/monitoring.ts:15](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L15)

___

### authentication

• `Optional` **authentication**: `boolean`

#### Defined in

[src/modules/monitoring.ts:17](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L17)

___

### durationBuckets

• `Optional` **durationBuckets**: `number`[]

#### Defined in

[src/modules/monitoring.ts:12](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L12)

___

### elasticsearch

• `Optional` **elasticsearch**: `string`

#### Defined in

[src/modules/monitoring.ts:19](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L19)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[src/modules/monitoring.ts:7](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L7)

___

### ip

• `Optional` **ip**: `string`

#### Defined in

[src/modules/monitoring.ts:8](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L8)

___

### requestSizeBuckets

• `Optional` **requestSizeBuckets**: `number`[]

#### Defined in

[src/modules/monitoring.ts:13](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L13)

___

### responseSizeBuckets

• `Optional` **responseSizeBuckets**: `number`[]

#### Defined in

[src/modules/monitoring.ts:14](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L14)

___

### sessionMaxAge

• `Optional` **sessionMaxAge**: `number`

#### Defined in

[src/modules/monitoring.ts:18](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L18)

___

### swaggerSpec

• `Optional` **swaggerSpec**: `string` \| `Document`<{}\>

#### Defined in

[src/modules/monitoring.ts:10](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L10)

___

### timelineBucketDuration

• `Optional` **timelineBucketDuration**: `number`

#### Defined in

[src/modules/monitoring.ts:9](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L9)

___

### uriPath

• **uriPath**: `string`

#### Defined in

[src/modules/monitoring.ts:11](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L11)

___

### version

• `Optional` **version**: `string`

#### Defined in

[src/modules/monitoring.ts:6](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L6)

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

[src/modules/monitoring.ts:20](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L20)

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

[src/modules/monitoring.ts:16](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L16)
