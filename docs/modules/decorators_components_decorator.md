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
- [Validator](decorators_components_decorator.md#validator)

## Functions

### Entity

▸ **Entity**<`T`\>(`options`): `ClassDecorator`

Mark a class as an entity to be used by the loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`EntityInjectableOptions`](types.md#entityinjectableoptions)<`T`\> |

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:16](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L16)
=======
[src/decorators/components.decorator.ts:16](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L16)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Middleware

▸ **Middleware**(`options`): `ClassDecorator`

Mark a class as a middleware to be used by the loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) |

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:43](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L43)
=======
[src/decorators/components.decorator.ts:43](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L43)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Migration

▸ **Migration**(): `ClassDecorator`

Mark a class as a migration to be used by the loader.

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:51](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L51)
=======
[src/decorators/components.decorator.ts:51](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L51)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Repository

▸ **Repository**<`T`\>(`options`): `ClassDecorator`

Mark a class as a repository to be used by the loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions)<`T`\> |

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L34)
=======
[src/decorators/components.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L34)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Router

▸ **Router**(`options`): `ClassDecorator`

Mark a class as a router to be used by the loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`RouterInjectionOptions`](types.md#routerinjectionoptions) |

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L60)
=======
[src/decorators/components.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L60)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Service

▸ **Service**<`T`\>(`options`): `ClassDecorator`

Mark a class as a service to be used by the loader.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ServiceInjectableOptions`](types.md#serviceinjectableoptions)<`T`\> |

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:25](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L25)
=======
[src/decorators/components.decorator.ts:25](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L25)
>>>>>>> 51e6b4d... feat: Add support of commitlint

___

### Validator

▸ **Validator**(`options`): `ClassDecorator`

Mark a class as a validator to be used by the validator utility.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ValidatorInjectionOptions`](types.md#validatorinjectionoptions)<`unknown`\> |

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
[src/decorators/components.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/6bd2587/src/decorators/components.decorator.ts#L69)
=======
[src/decorators/components.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/be0642a/src/decorators/components.decorator.ts#L69)
>>>>>>> 51e6b4d... feat: Add support of commitlint
