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
| `options` | [`MiddlewareInjectionOptions`](types.md#middlewareinjectionoptions) & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  } & [`RouterInjectionOptions`](types.md#routerinjectionoptions) & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  } & [`EntityInjectableOptions`](types.md#entityinjectableoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  } & [`ServiceInjectableOptions`](types.md#serviceinjectableoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  } & [`RepositoryInjectableOptions`](types.md#repositoryinjectableoptions)<`T`\> & { `type`: [`InjectableComponentTypes`](types.md#injectablecomponenttypes)  } |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/utils.ts:4](https://github.com/adrien2p/medusa-extender/blob/36712b0/src/decorators/utils.ts#L4)
