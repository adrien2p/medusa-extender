[medusa-extender](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [Constructor](index.md#constructor)
- [Medusa](index.md#medusa)
- [MedusaAuthenticatedRequest](index.md#medusaauthenticatedrequest)
- [MedusaEntity](index.md#medusaentity)
- [MedusaEntityEvents](index.md#medusaentityevents)
- [MedusaEntityInstance](index.md#medusaentityinstance)
- [MedusaEntityStatic](index.md#medusaentitystatic)
- [MedusaEntitySubscriber](index.md#medusaentitysubscriber)
- [MedusaEntitySubscriberInstance](index.md#medusaentitysubscriberinstance)
- [MedusaEntitySubscriberStatic](index.md#medusaentitysubscriberstatic)
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
- [StaticImplements](index.md#staticimplements)
- [Type](index.md#type)
- [medusaEventEmitter](index.md#medusaeventemitter)

### Variables

- [MedusaUtils](index.md#medusautils)

## References

### Constructor

Re-exports [Constructor](types.md#constructor)

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

### StaticImplements

Re-exports [StaticImplements](types.md#staticimplements)

___

### Type

Re-exports [Type](../interfaces/types.Type.md)

___

### medusaEventEmitter

Re-exports [medusaEventEmitter](medusa_event_emitter.md#medusaeventemitter)

## Variables

### MedusaUtils

• **MedusaUtils**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attachOrReplaceEntitySubscriber` | <T\>(`connection`: `Connection`, `Subscriber`: `T`, `transactionalEntityManager?`: `EntityManager`) => `void` |
| `repositoryMixin` | <TEntity, TRepository\>(`derivedCtor`: `TRepository`, ...`baseCtors`: `any`[]) => `TRepository` |

#### Defined in

[index.ts:6](https://github.com/adrien2p/medusa-extender/blob/7afa3be/src/index.ts#L6)
