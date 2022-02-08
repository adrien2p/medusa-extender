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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L15)
=======
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L15)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L15)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:16](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L16)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:16](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L16)
=======
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L15)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L15)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L15)
=======
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L15)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:15](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L15)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:16](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L16)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L42)
=======
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L42)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L42)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:43](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L43)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:43](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L43)
=======
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L42)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L42)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L42)
=======
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L42)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:42](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L42)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:43](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L43)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc

___

### Migration

▸ **Migration**(): `ClassDecorator`

Mark a class as a migration to be used by the loader.

#### Returns

`ClassDecorator`

#### Defined in

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L50)
=======
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L50)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L50)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:51](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L51)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:51](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L51)
=======
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L50)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L50)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L50)
=======
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L50)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:50](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L50)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:51](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L51)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L33)
=======
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L33)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L33)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L34)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L34)
=======
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L33)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L33)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L33)
=======
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L33)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:33](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L33)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:34](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L34)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L59)
=======
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L59)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L59)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L60)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L60)
=======
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L59)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L59)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L59)
=======
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L59)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:59](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L59)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:60](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L60)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L24)
=======
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L24)
=======
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L24)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
=======
>>>>>>> 7a00f8d... Feat() Update README decorators section
[src/decorators/components.decorator.ts:25](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L25)
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:25](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L25)
=======
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L24)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L24)
=======
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L24)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L24)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:25](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L25)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
[src/decorators/components.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L68)
>>>>>>> 366e7bd... [BOT] BUILD DOC
=======
[src/decorators/components.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L68)
>>>>>>> 1f752f6... [BOT] BUILD DOC
=======
=======
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
>>>>>>> 6c0df88... Feat() Update doc
[src/decorators/components.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/7e89c01/src/decorators/components.decorator.ts#L69)
<<<<<<< HEAD
>>>>>>> 92fcc31... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:24](https://github.com/adrien2p/medusa-extender/blob/89f7223/src/decorators/components.decorator.ts#L24)
>>>>>>> 26ad56d... Feat() Update README decorators section
<<<<<<< HEAD
>>>>>>> 7a00f8d... Feat() Update README decorators section
=======
=======
[src/decorators/components.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L68)
>>>>>>> b652414... Feat() Add support to extends validator
<<<<<<< HEAD
>>>>>>> b3bba94... Feat() Add support to extends validator
=======
=======
=======
>>>>>>> d802ff5... [BOT] BUILD DOC
[src/decorators/components.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/834fee1/src/decorators/components.decorator.ts#L68)
=======
[src/decorators/components.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/23cd201/src/decorators/components.decorator.ts#L68)
>>>>>>> 366e7bd... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 4c2e6c1... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> bc86ead... [BOT] BUILD DOC
=======
=======
=======
[src/decorators/components.decorator.ts:68](https://github.com/adrien2p/medusa-extender/blob/0490090/src/decorators/components.decorator.ts#L68)
>>>>>>> 1f752f6... [BOT] BUILD DOC
>>>>>>> d802ff5... [BOT] BUILD DOC
<<<<<<< HEAD
>>>>>>> 57061ec... [BOT] BUILD DOC
=======
=======
[src/decorators/components.decorator.ts:69](https://github.com/adrien2p/medusa-extender/blob/e820602/src/decorators/components.decorator.ts#L69)
>>>>>>> 4c3e573... Feat() Update doc
>>>>>>> 6c0df88... Feat() Update doc
