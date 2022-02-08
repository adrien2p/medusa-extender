medusa-extender / [Exports](modules.md)

<!--lint disable awesome-list-item-->
<div align="center">
  <p align="center">
    <img alt="Medusa" src="https://uploads-ssl.webflow.com/61fba9f6deac297b7b22017d/62000006ce573a706c92546c_logo.svg" width="200" />
  </p>
  
  <h1>Extend medusa to fit your needs</h1>
  
  <p>
        Did ever though about adding custom fields? Did you ever wonder how to add some custom features?
        Did you ever wanted to build something more than a single store?
        Well, this project has been made to help you reach you goal. It is now possible to customise
        Medusa in a way you will be able to enjoy all the awesome features that Medusa provides you
        but with the possibility to take your e-commerce project to the next level :rocket:
  </p>
  
</div>

---

<div align="center">
  <a href="https://github.com/adrien2p/awesome-medusajs"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://www.npmjs.com/package/medusa-extender"><img src="https://badge.fury.io/js/medusa-extender.svg" alt="npm version" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/commits/main"><img src="https://img.shields.io/github/commit-activity/m/adrien2p/medusa-extender?style=flat-square" alt="activity" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/issues"><img src="https://img.shields.io/github/issues/adrien2p/medusa-extender?style=flat-square" alt="issues" height="18"></a>
  <a href="https://www.npmjs.com/package/medusa-extender"><img src="https://img.shields.io/npm/dm/medusa-extender?style=flat-square" alt="download" height="18"></a>
  <img src="./assets/coverage/badge-statements.svg" onerror="if (this.src != './media/coverage/badge-statements.svg') this.src = './media/coverage/badge-statements.svg';" alt="coverage" height="18">
  <a href="https://github.com/adrien2p/medusa-extender/blob/main/LICENSE"><img src="https://img.shields.io/github/license/adrien2p/medusa-extender?style=flat-square" alt="licence" height="18"></a>
  <a href="https://twitter.com/intent/tweet?text=Check%20this%20out!%20The%20new%20medusa%20headless%20e-commerce%20extender&url=https://github.com/adrien2p/medusa-extender"><img src="https://badgen.net/badge/icon/twitter?icon=twitter&label=Share%20it%20on" alt="twitter" height="18"></a>
  
</div>

--- 

<div align="center">
    <p align="center">
        Access the website
        <a href="https://adrien2p.github.io/medusa-extender/#/">Documentation</a>
    </p>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,320L40,293.3C80,267,160,213,240,213.3C320,213,400,267,480,250.7C560,235,640,149,720,138.7C800,128,880,192,960,213.3C1040,235,1120,213,1200,176C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

# Table of contents

- [Getting started](#getting-started)
- [Code base overview](#code-base-overview)
- [Features](#features)
- Starters
    - [Server](https://github.com/adrien2p/medusa-extender/tree/main/starters/server)
    - [Plugin module](https://github.com/adrien2p/medusa-extender/tree/main/starters/plugin-module)
- [Usage](#usage)
    - [Create your server](#create-your-server)
    - [Create your first module](#create-your-first-module-rocket)
        - [Entity](#entity)
        - [Migration](#migration)
        - [Repository](#repository)
        - [Service](#service)
        - [Middleware](#middleware)
        - [Router](#router)
        - [Validator](#validator)
        - [Module](#module)
- [Decorators](#decorators)
- [Entity event handling](#entity-event-handling)

# Getting started

Installation

```bash
npm i medusa-extender
```

# Code base overview

<img src="/assets/medusa-extender.jpeg"
     onerror="if (this.src != '/media/medusa-extender.jpeg') this.src = '/media/medusa-extender.jpeg';"
     alt="Dependency graph" />

# Features

- :technologist: Decorators and full typing support

> Makes DX easy with the usage of decorators for modular architecture and full typing support for a better DX

- :building_construction: Flexible architecture.

>  You can organize your code as modules and group your modules by domains.

- :tada: Create or extend entities

> Some of the problems that developers encounter are that when you want to add custom fields
> to an entity, it is not that easy. You can't extend a typeorm entity and adding custom
> fields through configuration makes you lose the typings and the domains in which 
> they exist. Here, you can now extend a typeorm entity just like any other object.

- :tada: Create or extend services

> If you need to extend a service to manage your new fields or update the business logic according to your new needs,
> you only need to extend the original service from medusa and that's it.

- :tada: Create or extend repositories

> When you extend an entity and you want to manipulate that entity in a service, you need to do it through a repository.
> In order for that repository to reflect your extended entities, while still getting access to the base repository methods,
> you are provided with the right tools to do so.

- :tada: Create custom middlewares to apply before/after authentication

> Do you want to apply custom middlewares to load data on the requests or add some custom
> checks or any other situations? Then what are you waiting for?

- :tada: Create custom route and attach custom service to handle it.

> Do you need to add new routes for new features? Do you want to receive webhooks?
> It is easy to do it now.

- :bulb: Handle entity events from subscribers as easily as possible through the provided decorators.

> Emit an event (async/sync) from your subscriber and then register a new handler in any of your files. Just use the `OnMedusaEntityEvent` decorator.

- :package: Build sharable modules

> Build a module, export it and share it with the community.

# Usage

## Create your server

<details>
<summary>Click to see the example!</summary>
  
```typescript
// index.ts
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
</details>

## Create your first module :rocket:

### Entity

Let's say that you want to add a new field on the `Product` entity.
<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/product.entity.ts

import { Product as MedusaProduct } from '@medusa/medusa/dist'; 
import { Column, Entity } from "typeorm"; 
import { Entity as MedusaEntity } from "medusa-extender";
//...

@MedusaEntity({ override: MedusaProduct })
@Entity()
class Product extends MedusaProduct {
    @Column()
    customField: string;
}
```
</details>

### Migration

After have updated your entity, you will have to migrate the database in order to reflect the new fields.

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/20211126000001-add-field-to-product

import { MigrationInterface, QueryRunner } from 'typeorm';
import { Migration } from 'medusa-extender';

@Migration()
export default class AddFieldToProduct1611063162649 implements MigrationInterface {
    name = 'addFieldToProduct1611063162649';

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
```
</details>

### Repository

We will then create a new repository to reflect our custom entity.

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/product.repository.ts

import { OrderRepository as MedusaOrderRepository } from '@medusa/medusa/dist/repositories/order'; 
import { EntityRepository } from "typeorm"; 
import { Repository as MedusaRepository, Utils } from "medusa-extender"; 
import { Order } from "./order.entity";
//...

@MedusaRepository({ override: MedusaOrderRepository })
@EntityRepository(Order)
export class OrderRepository extends Utils.repositoryMixin<Order, MedusaOrderRepository>(MedusaOrderRepository) {
	testProperty = 'I am the property from OrderRepository that extend MedusaOrderRepository';

	test(): Promise<Order[]> {
		return this.findWithRelations() as Promise<Order[]>;
	}
}
```

</details>

### Service

We now want to add a custom service to implement our custom logic for our new field.

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/product.service.ts

import { Service, OnMedusaEntityEvent, MedusaEventHandlerParams, EntityEventType } from 'medusa-extender';
//...

interface ConstructorParams<TSearchService extends DefaultSearchService = DefaultSearchService> {
    manager: EntityManager;
    productRepository: typeof ProductRepository;
    productVariantRepository: typeof ProductVariantRepository;
    productOptionRepository: typeof ProductOptionRepository;
    eventBusService: EventBusService;
    productVariantService: ProductVariantService;
    productCollectionService: ProductCollectionService;
    productTypeRepository: typeof ProductTypeRepository;
    productTagRepository: typeof ProductTagRepository;
    imageRepository: typeof ImageRepository;
    searchService: TSearchService;
}

@Service({ scope: 'SCOPED', override: MedusaProductService })
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
    
    /**
    * This is an example. you must not necessarly keep that implementation.
    **/
    public prepareListQuery_(selector: Record<string, any>, config: FindConfig<Product>): object {
        selector['customField'] = 'custom_value';
        return super.prepareListQuery_(selector, config);
    }
}
```
</details>

### Middleware

Let's say that you want to attach a custom middleware to certain routes

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/custom.middleware.ts

import { Express, NextFunction, Response } from 'express';
import {
    Middleware,
    MedusaAuthenticatedRequest,
    MedusaMiddleware,
} from 'medusa-extender';

const routerOption = { method: 'post', path: '/admin/products/' }; 

@Middleware({ requireAuth: true, routerOptions: [routerOption] })
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
</details>

### Router

If you need to add custom routes to medusa here is a simple way to achieve this

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/product.router.ts

import { Router } from 'medusa-extender';
import yourController from './yourController.contaoller';

@Router({
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
</details>

### Validator

If you add a custom field on an entity, there is a huge risk that you end up getting
an error as soon as you it the end point with that new field. The medusa validators
are not aware of your new field once the request arrive. In order to handle that
you can extend the class validator in order to add your custom field constraint.

<details>
<summary>Click to see the example!</summary>

```typescript
<<<<<<< HEAD
// modules/product/AdminPostProductsReq.validator.ts
=======
// modules/product/product.router.ts
>>>>>>> d802ff5... [BOT] BUILD DOC

import { Validator } from 'medusa-extender';
import { AdminPostProductsReq } from "@medusajs/medusa/dist";

@Validator({ override: AdminPostProductsReq })
class ExtendedClassValidator extends AdminPostProductsReq {
    @IsString()
    customField: string;
}
```
</details>

### Module

the last step is to import everything in our module :package:

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/products/myModule.module.ts

import { Module } from 'medusa-extender';
import { Product } from './product.entity';
import { ProductRouter } from './product.router';
import { CustomMiddleware } from './custom.middleware';
import ProductRepository from './product.repository';
import ProductService from './product.service';
import AddFieldToProduct1611063162649 from './product.20211126000001-add-field-to-product';

@Module({
    imports: [
        Product,
        ProductRepository,
        ProductService,
        ProductRouter,
        CustomMiddleware,
        AddFieldToProduct1611063162649,
        ExtendedClassValidator
    ]
})
export class MyModule {}
```
</details>

That's it. You've completed your first module :rocket:

## Decorators

Here is the list of the provided decorators.

| Decorator                            | Description                                                                 | Option               |
| ----------------------               | ----------------------                                                      | ----------------------
| `@Entity(/*...*/)`                   | Decorate an entity                                                          | `{ scope?: LifetimeType; resolutionKey?: string; override?: Type<TOverride>; };`
| `@Repository(/*...*/)`               | Decorate a repository                                                       | `{ resolutionKey?: string; override?: Type<TOverride>; };`
| `@Service(/*...*/)`                  | Decorate a service                                                          | `{ scope?: LifetimeType; resolutionKey?: string; override?: Type<TOverride>; };`
| `@Middleware(/*...*/)`               | Decorate a middleware                                                       | `{ requireAuth: boolean; string; routerOptions: MedusaRouteOptions[]; };`
| `@Router(/*...*/)`                   | Decorate a router                                                           | `{ router: RoutesInjectionRouterConfiguration[]; };`
| `@Migration(/*...*/)`                | Decorate a migration                                                        |
| `@Validator(/*...*/)`                | Decorate a validator                                                        | `{ override: Type<TOverride>; };`
| `@OnMedusaEntityEvent.\*.\*(/*...*/)`| Can be used to send the right event type or register handler to an event    |

## Entity event handling

One of the feature out the box is the ability to emit (sync/async) events from
your entity subscriber and to be able to handle those events easily.

To be able to achieve this, here is an example.

<details>
<summary>Click to see the example!</summary>

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
</details>

And then create a new handler.

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/product.service.ts

import { Service, OnMedusaEntityEvent } from 'medusa-extender';
//...

interface ConstructorParams {
    // ...
}

@Service({ scope: 'SCOPED', override: MedusaProductService })
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
</details>

And finally, we need to add the subscriber to the connection. There are different ways to achieve
this. We will see, as an example below, a way to attach request scoped subscribers.

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/product/attachSubscriber.middleware.ts

import { Express, NextFunction, Response } from 'express';
import {
    Middleware,
    MEDUSA_RESOLVER_KEYS,
    MedusaAuthenticatedRequest,
    MedusaMiddleware,
    MedusaRouteOptions,
    Utils as MedusaUtils,
} from 'medusa-extender';
import { Connection } from 'typeorm';
import Utils from '@core/utils';
import ProductSubscriber from '@modules/product/subscribers/product.subscriber'; import { Middleware } from "./components.decorator";

@Middleware({ requireAuth: true, routerOptions: [{ method: 'post', path: '/admin/products/' }] })
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
</details>

Now, you only need to add that middleware to the previous module we've created.

<details>
<summary>Click to see the example!</summary>

```typescript
// modules/products/myModule.module.ts

import { Module } from 'medusa-extender';
import { Product } from './product.entity';
import { ProductRouter } from './product.router';
import { CustomMiddleware } from './custom.middleware';
import ProductRepository from './product.repository';
import ProductService from './product.service';
import AddFieldToProduct1611063162649 from './product.20211126000001-add-field-to-product';
import { AttachProductSubscribersMiddleware } from './attachSubscriber.middleware'

@Module({
    imports: [
        Product,
        ProductRepository,
        ProductService,
        ProductRouter,
        CustomMiddleware,
        AttachProductSubscribersMiddleware,
        AddFieldToProduct1611063162649
    ]
})
export class MyModule {}
```
</details>

# Contribute :ballot_box:

Contributions are welcome! You can look at the contribution [guidelines](./CONTRIBUTING.md)
