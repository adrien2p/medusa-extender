[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/utils

# Module: decorators/utils

## Table of contents

### Functions

- [buildComponentDecorator](decorators_utils.md#buildcomponentdecorator)

## Functions

### buildComponentDecorator

▸ **buildComponentDecorator**<`T`\>(`options`): `ClassDecorator`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/utils.ts:4](https://github.com/adrien2p/medusa-extender/blob/1e764f3/src/decorators/utils.ts#L4)
