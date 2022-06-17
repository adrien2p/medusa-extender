[medusa-extender](../README.md) / [Exports](../modules.md) / modules/monitoring

# Module: modules/monitoring

## Table of contents

### Interfaces

- [MonitoringOptions](../interfaces/modules_monitoring.MonitoringOptions.md)

### Functions

- [loadMonitoringModule](modules_monitoring.md#loadmonitoringmodule)

## Functions

### loadMonitoringModule

▸ **loadMonitoringModule**(`configModule`, `app`, `options`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `configModule` | `Object` |
| `configModule.monitoring?` | [`MonitoringOptions`](../interfaces/modules_monitoring.MonitoringOptions.md) |
| `app` | `Express` |
| `options` | [`MonitoringOptions`](../interfaces/modules_monitoring.MonitoringOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/modules/monitoring.ts:25](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/modules/monitoring.ts#L25)
