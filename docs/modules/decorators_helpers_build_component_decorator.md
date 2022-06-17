[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/helpers/build-component-decorator

# Module: decorators/helpers/build-component-decorator

## Table of contents

### Functions

- [buildComponentDecorator](decorators_helpers_build_component_decorator.md#buildcomponentdecorator)

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

[src/decorators/helpers/build-component-decorator.ts:4](https://github.com/adrien2p/medusa-extender/blob/624a76f/src/decorators/helpers/build-component-decorator.ts#L4)
