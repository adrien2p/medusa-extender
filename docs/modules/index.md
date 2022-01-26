[medusa-extender](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [ComplexInjectableOptions](index.md#complexinjectableoptions)
- [Constructor](index.md#constructor)
- [GetInjectableOption](index.md#getinjectableoption)
- [GetInjectableOptions](index.md#getinjectableoptions)
- [Injectable](index.md#injectable)
- [InjectableComponentTypes](index.md#injectablecomponenttypes)
- [InjectableOptions](index.md#injectableoptions)
- [Medusa](index.md#medusa)
- [MedusaAuthenticatedRequest](index.md#medusaauthenticatedrequest)
- [MedusaMiddleware](index.md#medusamiddleware)
- [MedusaRequest](index.md#medusarequest)
- [MedusaRouteMethods](index.md#medusaroutemethods)
- [MedusaRouteOptions](index.md#medusarouteoptions)
- [MiddlewareInjectionOptions](index.md#middlewareinjectionoptions)
- [MigrationInjectionOptions](index.md#migrationinjectionoptions)
- [Module](index.md#module)
- [OnMedusaEvent](index.md#onmedusaevent)
- [RoutesInjectionOptions](index.md#routesinjectionoptions)
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

### GetInjectableOption

Re-exports [GetInjectableOption](types.md#getinjectableoption)

___

### GetInjectableOptions

Re-exports [GetInjectableOptions](types.md#getinjectableoptions)

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

### Medusa

Re-exports [Medusa](../classes/medusa.Medusa.md)

___

### MedusaAuthenticatedRequest

Re-exports [MedusaAuthenticatedRequest](types.md#medusaauthenticatedrequest)

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

### RoutesInjectionOptions

Re-exports [RoutesInjectionOptions](types.md#routesinjectionoptions)

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
| `repositoryMixin` | <TRepository, TMedusaRepository\>(`derivedCtor`: `TRepository`, `medusaConstructor`: `TMedusaRepository`) => `TRepository` & `TMedusaRepository` |

#### Defined in

[src/index.ts:9](https://github.com/adrien2p/medusa-extender/blob/80bf51f/src/index.ts#L9)
