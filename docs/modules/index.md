[medusa-extender](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [Constructor](index.md#constructor)
- [Entity](index.md#entity)
- [EntityActions](index.md#entityactions)
- [EntityEventActionOptions](index.md#entityeventactionoptions)
- [EntityEventType](index.md#entityeventtype)
- [EntityInjectableOptions](index.md#entityinjectableoptions)
- [GetInjectableOption](index.md#getinjectableoption)
- [GetInjectableOptions](index.md#getinjectableoptions)
- [INJECTABLE\_OPTIONS\_KEY](index.md#injectable_options_key)
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
- [Middleware](index.md#middleware)
- [MiddlewareInjectionOptions](index.md#middlewareinjectionoptions)
- [Migration](index.md#migration)
- [Module](index.md#module)
- [OnMedusaEntityEvent](index.md#onmedusaentityevent)
- [Repository](index.md#repository)
- [RepositoryInjectableOptions](index.md#repositoryinjectableoptions)
- [Router](index.md#router)
- [RouterInjectionOptions](index.md#routerinjectionoptions)
- [RoutesInjectionRouterConfiguration](index.md#routesinjectionrouterconfiguration)
- [Service](index.md#service)
- [ServiceInjectableOptions](index.md#serviceinjectableoptions)
- [Type](index.md#type)
- [eventEmitter](index.md#eventemitter)

### Variables

- [Utils](index.md#utils)

## References

### Constructor

Re-exports [Constructor](types.md#constructor)

___

### Entity

Re-exports [Entity](decorators_components_decorator.md#entity)

___

### EntityActions

Re-exports [EntityActions](decorators_onMedusaEntityEvent_decorator.md#entityactions)

___

### EntityEventActionOptions

Re-exports [EntityEventActionOptions](decorators_onMedusaEntityEvent_decorator.md#entityeventactionoptions)

___

### EntityEventType

Re-exports [EntityEventType](decorators_onMedusaEntityEvent_decorator.md#entityeventtype)

___

### EntityInjectableOptions

Re-exports [EntityInjectableOptions](types.md#entityinjectableoptions)

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

Re-exports [MedusaEventEmittedParams](decorators_onMedusaEntityEvent_decorator.md#medusaeventemittedparams)

___

### MedusaEventHandlerParams

Re-exports [MedusaEventHandlerParams](decorators_onMedusaEntityEvent_decorator.md#medusaeventhandlerparams)

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

### Middleware

Re-exports [Middleware](decorators_components_decorator.md#middleware)

___

### MiddlewareInjectionOptions

Re-exports [MiddlewareInjectionOptions](types.md#middlewareinjectionoptions)

___

### Migration

Re-exports [Migration](decorators_components_decorator.md#migration)

___

### Module

Re-exports [Module](decorators_module_decorator.md#module)

___

### OnMedusaEntityEvent

Re-exports [OnMedusaEntityEvent](../classes/decorators_onMedusaEntityEvent_decorator.OnMedusaEntityEvent.md)

___

### Repository

Re-exports [Repository](decorators_components_decorator.md#repository)

___

### RepositoryInjectableOptions

Re-exports [RepositoryInjectableOptions](types.md#repositoryinjectableoptions)

___

### Router

Re-exports [Router](decorators_components_decorator.md#router)

___

### RouterInjectionOptions

Re-exports [RouterInjectionOptions](types.md#routerinjectionoptions)

___

### RoutesInjectionRouterConfiguration

Re-exports [RoutesInjectionRouterConfiguration](types.md#routesinjectionrouterconfiguration)

___

### Service

Re-exports [Service](decorators_components_decorator.md#service)

___

### ServiceInjectableOptions

Re-exports [ServiceInjectableOptions](types.md#serviceinjectableoptions)

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

[src/index.ts:25](https://github.com/adrien2p/medusa-extender/blob/00f227c/src/index.ts#L25)
