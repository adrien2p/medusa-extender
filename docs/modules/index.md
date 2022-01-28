[medusa-extender](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [ComplexInjectableOptions](index.md#complexinjectableoptions)
- [Constructor](index.md#constructor)
- [EntityActions](index.md#entityactions)
- [EntityEventActionOptions](index.md#entityeventactionoptions)
- [EntityEventType](index.md#entityeventtype)
- [GetInjectableOption](index.md#getinjectableoption)
- [GetInjectableOptions](index.md#getinjectableoptions)
- [INJECTABLE\_OPTIONS\_KEY](index.md#injectable_options_key)
- [Injectable](index.md#injectable)
- [InjectableComponentTypes](index.md#injectablecomponenttypes)
- [InjectableOptions](index.md#injectableoptions)
- [MEDUSA\_RESOLVER\_KEYS](index.md#medusa_resolver_keys)
- [MODULE\_KEY](index.md#module_key)
- [Medusa](index.md#medusa)
- [MedusaAuthenticatedRequest](index.md#medusaauthenticatedrequest)
- [MedusaEventEmittedParams](index.md#medusaeventemittedparams)
- [MedusaEventHandlerParams](index.md#medusaeventhandlerparams)
- [MedusaMiddleware](index.md#medusamiddleware)
- [MedusaRequest](index.md#medusarequest)
- [MedusaRouteMethods](index.md#medusaroutemethods)
- [MedusaRouteOptions](index.md#medusarouteoptions)
- [MiddlewareInjectionOptions](index.md#middlewareinjectionoptions)
- [MigrationInjectionOptions](index.md#migrationinjectionoptions)
- [Module](index.md#module)
- [OnMedusaEvent](index.md#onmedusaevent)
- [RepositoryInjectableOptions](index.md#repositoryinjectableoptions)
- [RoutesInjectionOptions](index.md#routesinjectionoptions)
- [RoutesInjectionRouterConfiguration](index.md#routesinjectionrouterconfiguration)
- [Type](index.md#type)
- [eventEmitter](index.md#eventemitter)

### Variables

- [Utils](index.md#utils)

## References

### ComplexInjectableOptions

Re-exports [ComplexInjectableOptions](types.md#complexinjectableoptions)

___

### Constructor

Re-exports [Constructor](types.md#constructor)

___

### EntityActions

Re-exports [EntityActions](decorators_onMedusaEvent_decorator.md#entityactions)

___

### EntityEventActionOptions

Re-exports [EntityEventActionOptions](decorators_onMedusaEvent_decorator.md#entityeventactionoptions)

___

### EntityEventType

Re-exports [EntityEventType](decorators_onMedusaEvent_decorator.md#entityeventtype)

___

### GetInjectableOption

Re-exports [GetInjectableOption](types.md#getinjectableoption)

___

### GetInjectableOptions

Re-exports [GetInjectableOptions](types.md#getinjectableoptions)

___

### INJECTABLE\_OPTIONS\_KEY

Re-exports [INJECTABLE_OPTIONS_KEY](contants.md#injectable_options_key)

___

### Injectable

Re-exports [Injectable](decorators_injectable_decorator.md#injectable)

___

### InjectableComponentTypes

Re-exports [InjectableComponentTypes](types.md#injectablecomponenttypes)

___

### InjectableOptions

Re-exports [InjectableOptions](types.md#injectableoptions)

___

### MEDUSA\_RESOLVER\_KEYS

Re-exports [MEDUSA_RESOLVER_KEYS](contants.md#medusa_resolver_keys)

___

### MODULE\_KEY

Re-exports [MODULE_KEY](contants.md#module_key)

___

### Medusa

Re-exports [Medusa](../classes/medusa.Medusa.md)

___

### MedusaAuthenticatedRequest

Re-exports [MedusaAuthenticatedRequest](types.md#medusaauthenticatedrequest)

___

### MedusaEventEmittedParams

Re-exports [MedusaEventEmittedParams](decorators_onMedusaEvent_decorator.md#medusaeventemittedparams)

___

### MedusaEventHandlerParams

Re-exports [MedusaEventHandlerParams](decorators_onMedusaEvent_decorator.md#medusaeventhandlerparams)

___

### MedusaMiddleware

Re-exports [MedusaMiddleware](../interfaces/types.MedusaMiddleware.md)

___

### MedusaRequest

Re-exports [MedusaRequest](types.md#medusarequest)

___

### MedusaRouteMethods

Re-exports [MedusaRouteMethods](types.md#medusaroutemethods)

___

### MedusaRouteOptions

Re-exports [MedusaRouteOptions](types.md#medusarouteoptions)

___

### MiddlewareInjectionOptions

Re-exports [MiddlewareInjectionOptions](types.md#middlewareinjectionoptions)

___

### MigrationInjectionOptions

Re-exports [MigrationInjectionOptions](types.md#migrationinjectionoptions)

___

### Module

Re-exports [Module](decorators_module_decorator.md#module)

___

### OnMedusaEvent

Re-exports [OnMedusaEvent](../classes/decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

___

### RepositoryInjectableOptions

Re-exports [RepositoryInjectableOptions](types.md#repositoryinjectableoptions)

___

### RoutesInjectionOptions

Re-exports [RoutesInjectionOptions](types.md#routesinjectionoptions)

___

### RoutesInjectionRouterConfiguration

Re-exports [RoutesInjectionRouterConfiguration](types.md#routesinjectionrouterconfiguration)

___

### Type

Re-exports [Type](../interfaces/types.Type.md)

___

### eventEmitter

Renames and re-exports [customEventEmitter](event_emmiter.md#customeventemitter)

## Variables

### Utils

• **Utils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachOrReplaceEntitySubscriber` | <T\>(`connection`: `Connection`, `Subscriber`: `T`, `transactionalEntityManager?`: `EntityManager`) => `void` |
| `repositoryMixin` | <TRepository, TMedusaRepository\>(`target`: `TRepository`, `source`: `TMedusaRepository`) => `TRepository` & `TMedusaRepository` |

#### Defined in

[src/index.ts:20](https://github.com/adrien2p/medusa-extender/blob/daed756/src/index.ts#L20)
