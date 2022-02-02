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

[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/fc1535d/src/decorators/components.decorator.ts#L15)

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

[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/fc1535d/src/decorators/components.decorator.ts#L42)

___

### Migration

▸ **Migration**(): `ClassDecorator`

Mark a class as a migration to be used by the loader.

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/fc1535d/src/decorators/components.decorator.ts#L50)

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

[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/fc1535d/src/decorators/components.decorator.ts#L33)

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

[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/fc1535d/src/decorators/components.decorator.ts#L59)

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

[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/fc1535d/src/decorators/components.decorator.ts#L24)
