[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/components.decorator

# Module: decorators/components.decorator

## Table of contents

### Functions

- [Entity](decorators_components_decorator.md#entity)
- [Middleware](decorators_components_decorator.md#middleware)
- [Migration](decorators_components_decorator.md#migration)
- [Repository](decorators_components_decorator.md#repository)
- [Router](decorators_components_decorator.md#router)
- [Service](decorators_components_decorator.md#service)
- [Subscriber](decorators_components_decorator.md#subscriber)
- [Validator](decorators_components_decorator.md#validator)

## Functions

### Entity

▸ **Entity**<`T`\>(`options?`): `ClassDecorator`

Mark a class as an entity to be used by the loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:16](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L16)

___

### Middleware

▸ **Middleware**(`options`): `ClassDecorator`

Mark a class as a middleware to be used by the loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:43](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L43)

___

### Migration

▸ **Migration**(): `ClassDecorator`

Mark a class as a migration to be used by the loader.

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:51](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L51)

___

### Repository

▸ **Repository**<`T`\>(`options?`): `ClassDecorator`

Mark a class as a repository to be used by the loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L34)

___

### Router

▸ **Router**(`options`): `ClassDecorator`

Mark a class as a router to be used by the loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L60)

___

### Service

▸ **Service**<`T`\>(`options?`): `ClassDecorator`

Mark a class as a service to be used by the loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:25](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L25)

___

### Subscriber

▸ **Subscriber**(): `ClassDecorator`

Mark a class as a subscriber.

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:77](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L77)

___

### Validator

▸ **Validator**(`options`): `ClassDecorator`

Mark a class as a validator to be used by the validator utility.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`unknown`\> |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/components.decorator.ts#L69)
