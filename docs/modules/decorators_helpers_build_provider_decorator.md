[medusa-extender](../README.md) / [Exports](../modules.md) / decorators/helpers/build-provider-decorator

# Module: decorators/helpers/build-provider-decorator

## Table of contents

### Functions

- [buildProviderDecorator](decorators_helpers_build_provider_decorator.md#buildproviderdecorator)

## Functions

### buildProviderDecorator

▸ **buildProviderDecorator**<`T`\>(`options`): `ClassDecorator`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`MiddlewareInjectionOptions`](core_types.md#middlewareinjectionoptions) & { `subtype`: [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`RouterInjectionOptions`](core_types.md#routerinjectionoptions) & { `subtype`: [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`EntityInjectableOptions`](core_types.md#entityinjectableoptions)<`T`\> & { `subtype`: [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`ServiceInjectableOptions`](core_types.md#serviceinjectableoptions)<`T`\> & { `subtype`: [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`RepositoryInjectableOptions`](core_types.md#repositoryinjectableoptions)<`T`\> & { `subtype`: [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } & [`ValidatorInjectionOptions`](core_types.md#validatorinjectionoptions)<`T`\> & { `subtype`: [`InjectableProviderSubTypes`](core_types.md#injectableprovidersubtypes) ; `type`: [`InjectableComponentTypes`](core_types.md#injectablecomponenttypes)  } |

#### Returns

`ClassDecorator`

#### Defined in

[decorators/helpers/build-provider-decorator.ts:9](https://github.com/adrien2p/medusa-extender/blob/71ceaa3/src/decorators/helpers/build-provider-decorator.ts#L9)
