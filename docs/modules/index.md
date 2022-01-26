[medusa-extender](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [Constructor](index.md#constructor)
- [EntityActions](index.md#entityactions)
- [EntityEventActionOptions](index.md#entityeventactionoptions)
- [EntityEventType](index.md#entityeventtype)
- [Medusa](index.md#medusa)
- [MedusaAuthenticatedRequest](index.md#medusaauthenticatedrequest)
- [MedusaEntity](index.md#medusaentity)
- [MedusaEntityEvents](index.md#medusaentityevents)
- [MedusaEntityInstance](index.md#medusaentityinstance)
- [MedusaEntityStatic](index.md#medusaentitystatic)
- [MedusaEntitySubscriber](index.md#medusaentitysubscriber)
- [MedusaEntitySubscriberInstance](index.md#medusaentitysubscriberinstance)
- [MedusaEntitySubscriberStatic](index.md#medusaentitysubscriberstatic)
- [MedusaEventEmittedParams](index.md#medusaeventemittedparams)
- [MedusaEventHandlerParams](index.md#medusaeventhandlerparams)
- [MedusaMiddleware](index.md#medusamiddleware)
- [MedusaMiddlewareInstance](index.md#medusamiddlewareinstance)
- [MedusaMiddlewareStatic](index.md#medusamiddlewarestatic)
- [MedusaRepository](index.md#medusarepository)
- [MedusaRepositoryInstance](index.md#medusarepositoryinstance)
- [MedusaRepositoryStatic](index.md#medusarepositorystatic)
- [MedusaRequest](index.md#medusarequest)
- [MedusaResolverKeys](index.md#medusaresolverkeys)
- [MedusaRoute](index.md#medusaroute)
- [MedusaRouteMethods](index.md#medusaroutemethods)
- [MedusaRouteOptions](index.md#medusarouteoptions)
- [MedusaService](index.md#medusaservice)
- [MedusaServiceInstance](index.md#medusaserviceinstance)
- [MedusaServiceStatic](index.md#medusaservicestatic)
- [Metatype](index.md#metatype)
- [OnMedusaEvent](index.md#onmedusaevent)
- [StaticImplements](index.md#staticimplements)
- [Type](index.md#type)
- [customEventEmitter](index.md#medusaeventemitter)

### Variables

- [MedusaUtils](index.md#medusautils)

## References

### Constructor

Re-exports [Constructor](types.md#constructor)

___

### EntityActions

Re-exports [EntityActions](decorators_types.md#entityactions)

___

### EntityEventActionOptions

Re-exports [EntityEventActionOptions](decorators_types.md#entityeventactionoptions)

___

### EntityEventType

Re-exports [EntityEventType](decorators_types.md#entityeventtype)

___

### Medusa

Re-exports [Medusa](../classes/medusa.Medusa.md)

___

### MedusaAuthenticatedRequest

Re-exports [MedusaAuthenticatedRequest](types.md#medusaauthenticatedrequest)

___

### MedusaEntity

Re-exports [MedusaEntity](types.md#medusaentity)

___

### MedusaEntityEvents

Re-exports [MedusaEntityEvents](types.md#medusaentityevents)

___

### MedusaEntityInstance

Re-exports [MedusaEntityInstance](../interfaces/types.MedusaEntityInstance.md)

___

### MedusaEntityStatic

Re-exports [MedusaEntityStatic](../interfaces/types.MedusaEntityStatic.md)

___

### MedusaEntitySubscriber

Re-exports [MedusaEntitySubscriber](types.md#medusaentitysubscriber)

___

### MedusaEntitySubscriberInstance

Re-exports [MedusaEntitySubscriberInstance](../interfaces/types.MedusaEntitySubscriberInstance.md)

___

### MedusaEntitySubscriberStatic

Re-exports [MedusaEntitySubscriberStatic](../interfaces/types.MedusaEntitySubscriberStatic.md)

___

### MedusaEventEmittedParams

Re-exports [MedusaEventEmittedParams](decorators_types.md#medusaeventemittedparams)

___

### MedusaEventHandlerParams

Re-exports [MedusaEventHandlerParams](decorators_types.md#medusaeventhandlerparams)

___

### MedusaMiddleware

Re-exports [MedusaMiddleware](types.md#medusamiddleware)

___

### MedusaMiddlewareInstance

Re-exports [MedusaMiddlewareInstance](../interfaces/types.MedusaMiddlewareInstance.md)

___

### MedusaMiddlewareStatic

Re-exports [MedusaMiddlewareStatic](../interfaces/types.MedusaMiddlewareStatic.md)

___

### MedusaRepository

Re-exports [MedusaRepository](types.md#medusarepository)

___

### MedusaRepositoryInstance

Re-exports [MedusaRepositoryInstance](../interfaces/types.MedusaRepositoryInstance.md)

___

### MedusaRepositoryStatic

Re-exports [MedusaRepositoryStatic](../interfaces/types.MedusaRepositoryStatic.md)

___

### MedusaRequest

Re-exports [MedusaRequest](types.md#medusarequest)

___

### MedusaResolverKeys

Re-exports [MedusaResolverKeys](types.md#medusaresolverkeys)

___

### MedusaRoute

Re-exports [MedusaRoute](types.md#medusaroute)

___

### MedusaRouteMethods

Re-exports [MedusaRouteMethods](types.md#medusaroutemethods)

___

### MedusaRouteOptions

Re-exports [MedusaRouteOptions](types.md#medusarouteoptions)

___

### MedusaService

Re-exports [MedusaService](types.md#medusaservice)

___

### MedusaServiceInstance

Re-exports [MedusaServiceInstance](../interfaces/types.MedusaServiceInstance.md)

___

### MedusaServiceStatic

Re-exports [MedusaServiceStatic](../interfaces/types.MedusaServiceStatic.md)

___

### Metatype

Re-exports [Metatype](types.md#metatype)

___

### OnMedusaEvent

Re-exports [OnMedusaEvent](../classes/decorators_onMedusaEvent_decorator.OnMedusaEvent.md)

___

### StaticImplements

Re-exports [StaticImplements](types.md#staticimplements)

___

### Type

Re-exports [Type](../interfaces/types.Type.md)

___

### customEventEmitter

Re-exports [customEventEmitter](medusa_event_emitter.md#medusaeventemitter)

## Variables

### MedusaUtils

• **MedusaUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachOrReplaceEntitySubscriber` | <T\>(`connection`: `Connection`, `Subscriber`: `T`, `transactionalEntityManager?`: `EntityManager`) => `void` |
| `repositoryMixin` | <TEntity, TRepository\>(`derivedCtor`: `TRepository`, ...`baseCtors`: `any`[]) => `TRepository` |

#### Defined in

[src/index.ts:9](https://github.com/adrien2p/medusa-extender/blob/682c80d/src/index.ts#L9)
