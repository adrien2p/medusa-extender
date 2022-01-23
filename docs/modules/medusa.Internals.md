[medusa-extender](../README.md) / [Exports](../modules.md) / [medusa](medusa.md) / Internals

# Namespace: Internals

[medusa](medusa.md).Internals

## Table of contents

### Type aliases

- [Step](medusa.Internals.md#step)
- [StepOptions](medusa.Internals.md#stepoptions)

## Type aliases

### Step

Ƭ **Step**: (`express`: `Express`) => `Promise`<`Express`\>

#### Type declaration

▸ (`express`): `Promise`<`Express`\>

Step type of type function that take in express instance and return Promise<Express>.

##### Parameters

| Name | Type |
| :------ | :------ |
| `express` | `Express` |

##### Returns

`Promise`<`Express`\>

#### Defined in

[medusa.ts:9](https://github.com/adrien2p/medusa-extender/blob/2b98a6d/src/medusa.ts#L9)

___

### StepOptions

Ƭ **StepOptions**: `Object`

Step options with `rank` and `isBefore`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isBefore?` | `boolean` |
| `rank` | `number` |

#### Defined in

[medusa.ts:14](https://github.com/adrien2p/medusa-extender/blob/2b98a6d/src/medusa.ts#L14)
