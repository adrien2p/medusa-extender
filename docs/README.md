medusa-extender / [Exports](modules.md)

<!--lint disable awesome-list-item-->
<div align="center">
  <p align="center">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/129161578-19b83dc8-fac5-4520-bd48-53cba676edd2.png" width="200" />
  </p>
  <h1>Extend medusa to fit your needs</h1>
  
  <div align="center">
    <p align="center">
        <a href="https://adrien2p.github.io/medusa-extender/#/">Documentation</a>
    </p>
  </div>
    
  <a href="https://github.com/adrien2p/awesome-medusajs"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://www.npmjs.com/package/medusa-extender"><img src="https://badge.fury.io/js/medusa-extender.svg" alt="npm version" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/commits/main"><img src="https://img.shields.io/github/commit-activity/m/adrien2p/medusa-extender?style=flat-square" alt="activity" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/issues"><img src="https://img.shields.io/github/issues/adrien2p/medusa-extender?style=flat-square" alt="issues" height="18"></a>
  
</div>

# Table of content

- [Getting started](#getting-started)
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
    - [Create you server](#create-your-server)
    - [Create you first module](#create-your-first-module-rocket)
        - [Entity](#entity)
        - [Repository](#repository)
        - [Service](#service)
        - [Middleware](#middleware)
        - [Router](#router)
        - [Module](#module)
- [Entity event handling](#entity-event-handling)

# Getting started

Installation

```bash
npm i medusa-extender
```

# Introduction

This packages exports the necessary objects to customize [medusajs](https://github.com/medusajs/medusa)
and fit your needs.

Here is the architecture of this package and how modules are related to each other. It will help you navigate into the code base.

<img src="/assets/medusa-extender.jpeg"
     onerror="if (this.src != './media/medusa-extender.jpeg') this.src = './media/medusa-extender.jpeg';"
     alt="Dependency graph" />

# Features

- :technologist: Decorators and full typings

> Made DX easy with the usage of decorators for modular architecture and full typings support for a better DX

- :building_construction: Flexible architecture.

> No need anymore to put your services in the services directory, your entities in the models directory and so on. You put your files
> where you want. That way you can organize your code as modules for example and group your modules by domains.

- :tada: Create or extends entities

> If you need to add custom fields on an entity, you only need to extend the original entity from medusa and that's it.

- :tada: Create or extends services

> If you need to extend a service to manage your new fields or update the business logic according to your new needs,
> you only need to extend the original service from medusa and that's it.

- :tada: Create or extends repositories

> When you extend an entity and you want to manipulate that entity in a service, you need to do that through a repository.
> In order for that repository to reflect your extended entities, you are provided with the right tools to do so.

- :tada: Create custom middlewares to apply before/after authentication

> Some times, you need to add custom middlware. For example, to store some context on the incoming request.
> You can achieve that now with the tools provided.

- :tada: Create custom route and attach custom service to handle it.

> You can do that to. Create a new route, configure it, and hit the end point.

# Usage

## Create your server

```typescript
// main.ts
import { MyModule } from './modules/myModule/myModule.module';

async function bootstrap() {
    const expressInstance = express();
    
    const rootDir = resolve(__dirname);
    await new Medusa(rootDir, expressInstance).load(MyModule);
    
    expressInstance.listen(config.serverConfig.port, () => {
        logger.info('Server successfully started on port ' + config.serverConfig.port);
    });
}

bootstrap();
```

## Create your first module :rocket:

### Entity

Let say that you want to add a new field on the `Product` entity.

```typescript
// modules/product/product.entity.ts

import { Product as MedusaProduct } from '@medusa/medusa/dist'; 
import { Column, Entity } from "typeorm"; 
import { Injectable } from "medusa-extender";
//...

@Injectable({ type: 'entity', override: MedusaProduct })
@Entity()
class Product extends MedusaProduct {
    @Column()
    customField: string;
}
```

### Repository

We will then create a new repository to reflect our custom entity.

```typescript
// modules/product/product.repository.ts

import { ProductRepository as MedusaProductRepository } from '@medusa/medusa/dist/repositories/product'; 
import { EntityRepository, Repository } from "typeorm"; 
import { Injectable, Utils } from "medusa-extender"; 
import { Product } from "./product.entity";
//...

@Injectable({ type: 'repository', override: MedusaProductRepository })
@EntityRepository()
class ProductRepository extends Repository<Product> {
}

export default Utils.repositoryMixin(ProductRepository, MedusaProductRepository);
```

> This part `Utils.repositoryMixin(ProductRepository, MedusaProductRepository);` is mandatory
> Since our objective is to extend an existing repository and also reflect our custom entity
> we need to achieve a double extension. This is not possible except using the mixin pattern.

### Service

We want now to add a custom service to implement our custom logic for our new field.

```typescript
// modules/product/product.service.ts

import { Injectable } from 'medusa-extender';
//...

interface ConstructorParams<TSearchService extends DefaultSearchService = DefaultSearchService> {
    manager: EntityManager;
    productRepository: typeof ProductRepository;
    productVariantRepository: typeof ProductVariantRepository;
    productOptionRepository: typeof ProductOptionRepository;
    eventBusService: EventBusService;
    productVariantService: ProductVariantService;
    productCollectionService: ProductCollectionService;
    productTypeRepository: ObjectType<typeof ProductTypeRepository>;
    productTagRepository: ObjectType<typeof ProductTagRepository>;
    imageRepository: ObjectType<typeof ImageRepository>;
    searchService: TSearchService;
}

@Injectable({ type: 'service', scope: 'SCOPED', override: MedusaProductService })
export default class ProductService extends MedusaProductService {
    readonly #manager: EntityManager;
    
    constructor(private readonly container: ConstructorParams) {
        super(container);
        this.#manager = container.manager;
    }
    
    @OnMedusaEvent.Before.Insert(Product, { async: true })
    public async attachStoreToProduct(
        params: MedusaEventHandlerParams<Product, 'Insert'>
    ): Promise<EntityEventType<Product, 'Insert'>> {
        const { event } = params;
        event.entity.customField = 'custom_value';
        return event;
    }
    
    public prepareListQuery_(selector: Record<string, any>, config: FindConfig<Product>): any {
        selector['customField'] = 'custom_value';
        return super.prepareListQuery_(selector, config) as any;
    }
}
```

### Middleware

Let say that you want to attach a custom middleware to certain routes

```typescript
// modules/product/custom.middleware.ts

import { Express, NextFunction, Response } from 'express';
import {
    Injectable,
    MedusaAuthenticatedRequest,
    MedusaMiddleware,
} from 'medusa-extender';

const routerOption = { method: 'post', path: '/admin/products/' }; 

@Injectable({ type: 'middleware', requireAuth: true, routerOptions: [routerOption] })
export class CustomMiddleware  implements MedusaMiddleware {
    public consume(
        options: { app: Express }
    ): (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction) => void | Promise<void> {
        return (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void => {
            return next();
        };
    }
}

```

### Router

If you need to add custom routes to medusa here is a simple way to achieve that

```typescript
// modules/product/product.router.ts

import { Injectable } from 'medusa-extender';
import yourController from './yourController.contaoller';

@Injectable({
    type: 'route',
    router: [{
        requiredAuth: true,
        path: '/admin/dashboard',
        method: 'get',
        handler: yourController.getStats
    }]
})
export class ProductRouter {
}
```

### Module

the last step is to import everything in our module :package:

```typescript
// modules/products/myModule.module.ts

import { Module } from 'medusa-extender';
import { Product } from './product.entity';
import { ProductRouter } from './product.router';
import { CustomMiddleware } from './custom.middleware';
import ProductRepository from './product.repository';
import ProductService from './product.service';

@Module({
    imports: [
        Product,
        ProductRepository,
        ProductService,
        ProductRouter,
        CustomMiddleware
    ]
})
export class MyModule {}
```

That's it you've completed your first module :rocket:

## Entity event handling

One of the feature out the box is the ability to emit (sync/async) event from
your entity subscriber and to be able to handle those event easily.

To be able to achieve that, here is an example.

```typescript
// modules/products/product.subscriber.ts

import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { eventEmitter, Utils, OnMedusaEntityEvent } from 'medusa-extender';
import { Product } from '../entities/product.entity';

@EventSubscriber()
export default class ProductSubscriber implements EntitySubscriberInterface<Product> {
    static attachTo(connection: Connection): void {
        Utils.attachOrReplaceEntitySubscriber(connection, ProductSubscriber);
    }
    
    public listenTo(): typeof Product {
        return Product;
    }
    
    /**
     * Relay the event to the handlers.
     * @param event Event to pass to the event handler
     */
    public async beforeInsert(event: InsertEvent<Product>): Promise<void> {
        return await eventEmitter.emitAsync(OnMedusaEntityEvent.Before.InsertEvent(Product), {
            event,
            transactionalEntityManager: event.manager,
        });
    }
}
```
And then the handler will work like following.

```typescript
// modules/product/product.service.ts

import { Injectable, OnMedusaEntityEvent } from 'medusa-extender';
//...

interface ConstructorParams {
    // ...
}

@Injectable({ type: 'service', scope: 'SCOPED', override: MedusaProductService })
export default class ProductService extends MedusaProductService {
    readonly #manager: EntityManager;
    
    constructor(private readonly container: ConstructorParams) {
        super(container);
        this.#manager = container.manager;
    }
    
    @OnMedusaEntityEvent.Before.Insert(Product, { async: true })
    public async attachStoreToProduct(
        params: MedusaEventHandlerParams<Product, 'Insert'>
    ): Promise<EntityEventType<Product, 'Insert'>> {
        const { event } = params;
        event.entity.customField = 'custom_value';
        return event;
    }
}
```

And finally, we need to add the subscriber to the connection. There is different way to achieve
it. Will see as an example a way to attach request scoped subscribers.

```typescript
// modules/product/attachSubscriber.middleware.ts

import { Express, NextFunction, Response } from 'express';
import {
Injectable,
MEDUSA_RESOLVER_KEYS,
MedusaAuthenticatedRequest,
MedusaMiddleware,
MedusaRouteOptions,
Utils as MedusaUtils,
} from 'medusa-extender';
import { Connection } from 'typeorm';
import Utils from '@core/utils';
import ProductSubscriber from '@modules/product/subscribers/product.subscriber';

@Injectable({ type: 'middleware', requireAuth: true, routerOptions: [{ method: 'post', path: '/admin/products/' }] })
export class AttachProductSubscribersMiddleware implements MedusaMiddleware {
    private app: Express;
    private hasBeenAttached = false;
    
    public static get routesOptions(): MedusaRouteOptions {
        return {
            path: '/admin/products/',
            method: 'post',
        };
    }
    
    public consume(
        options: { app: Express }
    ): (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction) => void | Promise<void> {
        this.app = options.app;
    
        const attachIfNeeded = (routeOptions: MedusaRouteOptions): void => {
            if (!this.hasBeenAttached) {
                this.app.use((req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void => {
                    if (Utils.isExpectedRoute([routeOptions], req)) {
                        const { connection } = req.scope.resolve(MEDUSA_RESOLVER_KEYS.manager) as { connection: Connection };
                        MedusaUtils.attachOrReplaceEntitySubscriber(connection, ProductSubscriber);
                    }
                    return next();
                });
                this.hasBeenAttached = true;
            }
        }
    
        return (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void => {
            const routeOptions = AttachProductSubscribersMiddleware.routesOptions;
            attachIfNeeded(routeOptions);
            return next();
        };
    }
}
```

Now, you only need to add that middleware to the previous module we've created.

```typescript
// modules/products/myModule.module.ts

import { Module } from 'medusa-extender';
import { Product } from './product.entity';
import { ProductRouter } from './product.router';
import { CustomMiddleware } from './custom.middleware';
import ProductRepository from './product.repository';
import ProductService from './product.service';
import { AttachProductSubscribersMiddleware } from './attachSubscriber.middleware'

@Module({
    imports: [
        Product,
        ProductRepository,
        ProductService,
        ProductRouter,
        CustomMiddleware,
        AttachProductSubscribersMiddleware
    ]
})
export class MyModule {}
```

# Contribute :ballot_box:

Contributions welcome!
