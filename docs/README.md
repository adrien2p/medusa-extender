medusa-extender / [Exports](modules.md)

<!--lint disable awesome-list-item-->
<div align="center">
  <p align="center">
    <img alt="Medusa" src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/logo.png?raw=true"/>
  </p>
  
  <h1>Extend medusa with badass features</h1>
  
  <p>
        Do you want to extend existing entities to add custom fields? Do you want to implement your own feature or extend existing one
        in a module way? Did you ever wanted to build something more than a single store?
        Well, this project has been made to help you reach you goal. It is now possible to customise
        Medusa in a way you will be able to enjoy all the awesome features that Medusa provides you
        but with the possibility to take your e-commerce project to the next level :rocket:
  </p>
  
</div>

---

<div align="center">
  <a href="https://github.com/adrien2p/awesome-medusajs"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://www.npmjs.com/package/medusa-extender"><img src="https://badge.fury.io/js/medusa-extender.svg" alt="npm version" height="18"></a>
  <a href="https://img.shields.io/npm/dt/medusa-extender"><img src="https://img.shields.io/npm/dt/medusa-extender" alt="npm download" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/commits/main"><img src="https://img.shields.io/github/commit-activity/m/adrien2p/medusa-extender?style=flat-square" alt="activity" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/issues"><img src="https://img.shields.io/github/issues/adrien2p/medusa-extender?style=flat-square" alt="issues" height="18"></a>
  <a href="https://www.npmjs.com/package/medusa-extender"><img src="https://img.shields.io/npm/dm/medusa-extender?style=flat-square" alt="download" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/blob/assets/assets/coverage/badge-statements.svg?raw=true"><img src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/coverage/badge-statements.svg?raw=true" alt="coverage" height="18"></a>
  <a href="https://github.com/adrien2p/medusa-extender/blob/main/LICENSE"><img src="https://img.shields.io/github/license/adrien2p/medusa-extender?style=flat-square" alt="licence" height="18"></a>
  <a href="https://twitter.com/intent/tweet?text=Check%20this%20out!%20The%20new%20medusa%20headless%20e-commerce%20extender&url=https://github.com/adrien2p/medusa-extender"><img src="https://badgen.net/badge/icon/twitter?icon=twitter&label=Share%20it%20on" alt="twitter" height="18"></a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://github.com/adrien2p/medusa-extender/blob/main/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://github.com/adrien2p/medusa-extender/actions/workflows/action.yml/badge.svg"><img src="https://github.com/adrien2p/medusa-extender/actions/workflows/action.yml/badge.svg" alt="Test pipeline status"></a>
  <a href="https://github.com/adrien2p/medusa-extender/actions/workflows/pages/pages-build-deployment/badge.svg"><img src="https://github.com/adrien2p/medusa-extender/actions/workflows/pages/pages-build-deployment/badge.svg" alt="Pages build deployment status"></a>
  <a href="https://github.com/adrien2p/medusa-extender/actions/workflows/codeql-analysis.yml/badge.svg"><img src="https://github.com/adrien2p/medusa-extender/actions/workflows/codeql-analysis.yml/badge.svg" alt="CodeQL analysis status"></a>
</div>

--- 

<div align="center">
    <p align="center">
        Access the website
        <a href="https://adrien2p.github.io/medusa-extender/#/">Documentation</a>
    </p>
</div>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b974ff" fill-opacity="1" d="M0,224L34.3,186.7C68.6,149,137,75,206,74.7C274.3,75,343,149,411,165.3C480,181,549,139,617,101.3C685.7,64,754,32,823,42.7C891.4,53,960,107,1029,122.7C1097.1,139,1166,117,1234,138.7C1302.9,160,1371,224,1406,256L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

# Table of contents

- [Getting started](#getting-started)
- [Full documentation including API](https://adrien2p.github.io/medusa-extender/#/)
- [Code base overview](#code-base-overview)
- [Features](#features)
- [Demo: Products scoped per store (Marketplace)](#demo-products-scoped-per-store-marketplace)
- Starters
    - [Server](https://github.com/adrien2p/medusa-extender/tree/main/starters/server)
    - [Plugin module](https://github.com/adrien2p/medusa-extender/tree/main/starters/plugin-module)
- [Usage](#usage)
    - [Extending an existing feature](#extending-an-existing-feature)
    - [Create a custom feature module](#create-a-custom-feature-module)
    - [Handling entity subscribers](#handling-entity-subscribers)
    - [Build a shareable module](#build-a-shareable-module)
    - [Use custom configuration inside service](#use-custom-configuration-inside-service)
    - [Integration in an existing medusa project](#integration-in-an-existing-medusa-project)
- [Decorators API](#decorators-api)

# Getting started

> The usage of the extender does not break any features from the original medusa.

```bash
npm i medusa-extender
```

# Code base overview

<img src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/medusa-extender.jpeg?raw=true" alt="Dependency graph" />

# Features

- :technologist: Decorators and full typing support

> Makes DX easy with the usage of decorators for modular architecture and full typing support for a better DX

- :building_construction: Flexible architecture.

>  You can organize your code as modules and group your modules by domains.

- :tada: Create or extend entities (Custom fields)

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

- :tada: Create custom middlewares that are applied before/after authentication

> Do you want to apply custom middlewares to load data on the requests or add some custom
> checks or any other situations? Then what are you waiting for?

- :tada: Create custom route and attach custom handler to it.

> Do you need to add new routes for new features? Do you want to receive webhooks?
> Create a new route, attach an handler and enjoy.

- :tada: Override existing validators.

> Really useful when your adding custom fields.

- :bulb: Handle entity events from subscribers as smoothly as possible.

> Emit an event (async/sync) from your subscriber and then register a new handler in any of your files. Just use the `OnMedusaEntityEvent` decorator.

- :package: Build sharable modules

> Build a module, export it and share it with the community.

# Demo: Products scoped per store (Marketplace)

[![Video demo: scoped products per store](https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/store_scoped_demo_thumbnail.png?raw=true)](https://streamable.com/e/oel4vl)

# Usage

For the purpose of the examples that will follow in the next sections,
I will organise my files in the following manner 
(You can organise it as you want, there is no restrictions to your architecture).

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/scenario-1-architecture.png?raw=true" alt="Scenario 1 module architecture" />

## Extending an existing feature

Let's create a scenario.

> As a user, I want to add a new field to the existing product entity to manage some custom data.
> For that I will need:
>
> - To extend an entity (for the example we will use the product);
> - To extend the custom repository in order to reflect the extended entity through the repository;
> - To extend the service, in order to take that new field in count;
> - To create a validator that will extend and existing one to add the custom field.
> - To create a migration that will add the field in the database.
>
> For the purpose of the example, I will want to be able to register an handler on an entity event that I will implement in
> the extended service. That subscriber will be request scoped, which means a middleware
> will attach the subscriber to the connection for each request (This is only for the purpose of showing some features).

### Step 1: Extend the product entity

The idea here, is that we will import the medusa product entity that we will extend in
order to add our new field. Of course, you can do everything typeorm provides (if you need to add a custom relationships, then follow the typeorm doc.).

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/src-modules-product-product-entity.png?raw=true" alt="Step 1 Extend the product entity" />
     
<details>
<summary>Click to see the raw example!</summary>

```typescript
// src/modules/product/product.entity.ts

import { Column, Entity } from "typeorm"; 
import { Product as MedusaProduct } from '@medusa/medusa/dist';
import { Entity as MedusaEntity } from "medusa-extender";

@MedusaEntity({ override: MedusaProduct })
@Entity()
export class Product extends MedusaProduct {
    @Column()
    customField: string;
}
```

</details>

### Step 2: Extend the product repository

The idea here, is that we will import the medusa product repository that we will extend in
order to reflect our custom entity.

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/src-modules-product-product-repository.png?raw=true" alt="Step 2: Extend the product repository" />
     
<details>
<summary>Click to see the raw example!</summary>

```typescript
// src/modules/product/product.repository.ts

import { ProductRepository as MedusaProductRepository } from '@medusa/medusa/dist/repositories/order'; 
import { EntityRepository } from "typeorm"; 
import { Repository as MedusaRepository, Utils } from "medusa-extender"; 
import { Product } from "./product.entity";

@MedusaRepository({ override: MedusaProductRepository })
@EntityRepository(Product)
export class ProductRepository extends Utils.repositoryMixin<Product, MedusaProductRepository>(MedusaProductRepository) {
    /* You can implement custom repository methods here. */
}
```

</details>

### Step 3: Extend the product service to manage our custom entity field

The idea here, is that we will import the medusa product service that we will extend in
order to override the product creation method of the base class in order to take in count the new field
of our extended product entity.

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/src-modules-product-product-service.png?raw=true" alt="Step 3: Extend the product service" />
     
<details>
<summary>Click to see the raw example!</summary>

```typescript
// src/modules/product/product.service.ts

import { Service, OnMedusaEntityEvent, MedusaEventHandlerParams, EntityEventType } from 'medusa-extender';
import { ProductService as MedusaProductService } from '@medusa/medusa/dist/services';
import { EntityManager } from "typeorm";

type ConstructorParams = /* ... */

@Service({ scope: 'SCOPED', override: MedusaProductService })
export class ProductService extends MedusaProductService {
    readonly #manager: EntityManager;
    
    constructor(private readonly container: ConstructorParams) {
        super(container);
        this.#manager = container.manager;
    }
    
    /**
    * In that example, the customField could represent a static value
    * such as a store_id which depends on the loggedInUser store_id.
    **/
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
    * Here, we are overriding the existing method to add a custom constraint.
    * For example, if you add a store_id on a product, that value
    * will probably depends on the loggedInUser store_id which is a static
    * value.
    **/
    public prepareListQuery_(selector: Record<string, any>, config: FindConfig<Product>): object {
        selector['customField'] = 'custom_value';
        return super.prepareListQuery_(selector, config);
    }
}
```

</details>

### Step 4: Extend the product validator class to reflect the new field

When adding a new field, the class validator of the end point handler is not aware
about it. In order to handle that, it is possible to extend the validator to add
the constraint on the new custom field.

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/src-modules-product-adminPostProductsReq-validator.png?raw=true" alt="Step 4: Extend the product validator class to reflect the new field" />
     
<details>
<summary>Click to see the raw example!</summary>

```typescript
// src/modules/product/adminPostProductsReq.validator.ts

@Validator({ override: AdminPostProductsReq })
class ExtendedClassValidator extends AdminPostProductsReq {
  @IsString()
  customField: string;
}
```

</details>

### Step 5: Create the migration

To persist your custom field, you need to add it to the corresponding table.
As normal, write a new migration, except this time, you decorate it with the `@Migration()` decorator.

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/src-modules-product-customField-migration.png?raw=true" alt="Step 5: Create the migration" />
     
<details>
<summary>Click to see the raw example!</summary>

```typescript
// src/modules/product/customField.migration.ts

import { Migration } from 'medusa-extender';
import { MigrationInterface, QueryRunner } from 'typeorm';

@Migration()
export default class addCustomFieldToProduct1611063162649 implements MigrationInterface {
    name = 'addCustomFieldToProduct1611063162649';
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        /* Write your query there. */
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        /* Write your query there. */
    }
}
```

</details>

### Step 6: Wrapping everything in a module

Now that we have done the job, we will import the entity, repository and service into a module
that will be loaded by Medusa.

<img width='75%' src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/readme/src-modules-product-product-module.png?raw=true" alt="Step 4: Create the product module" />
     
<details>
<summary>Click to see the raw example!</summary>

```typescript
// src/modules/product/product.module.ts

import { Module } from 'medusa-extender';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { ExtendedClassValidator } from './adminPostProductsReq.validator';
import { addCustomFieldToProduct1611063162649 } from './customField.migration';

@Module({
    imports: [
        Product,
        ProductRepository,
        ProductService,
        ExtendedClassValidator,
        addCustomFieldToProduct1611063162649
    ]
})
export class ProductModule {}
```

</details>

## Handling entity subscribers

One of the feature out the box is the ability to emit (sync/async) events from
your entity subscriber and to be able to handle those events easily.

To be able to achieve this, here is an example.

<details>
<summary>Click to see the example!</summary>

```typescript
// src/modules/product/product.subscriber.ts

import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { eventEmitter, Utils, OnMedusaEntityEvent } from 'medusa-extender';
import { Product } from './product.entity';

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
// src/modules/product/product.service.ts

import { Service, OnMedusaEntityEvent } from 'medusa-extender';
/* ... */

interface ConstructorParams { /* ... */ }

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
this. We will see, as an example below, a way to attach a request scoped subscribers.

<details>
<summary>Click to see the example!</summary>

```typescript
// src/modules/product/attachSubscriber.middleware.ts

import { NextFunction, Request, Response } from 'express';
import {
    Middleware,
    MedusaAuthenticatedRequest,
    Utils as MedusaUtils,
    MedusaMiddleware
} from 'medusa-extender';
import UserSubscriber from './product.subscriber';

@Middleware({ requireAuth: true, routes: [{ method: 'post', path: '/admin/products/' }] })
export default class AttachProductSubscribersMiddleware implements MedusaMiddleware {
    public consume(req: MedusaAuthenticatedRequest | Request, res: Response, next: NextFunction): void | Promise<void> {
        MedusaUtils.attachOrReplaceEntitySubscriber(connection, UserSubscriber);
        return next();
    }
}
```

</details>

Now, you only need to add that middleware to the previous module we've created.

<details>
<summary>Click to see the example!</summary>

```typescript
// src/modules/products/product.module.ts

import { Module } from 'medusa-extender';
import { AttachProductSubscribersMiddleware } from './attachSubscriber.middleware'

@Module({
    imports: [
        /* ... */
        AttachProductSubscribersMiddleware
    ]
})
export class ProductModule {}
```

</details>

## Create a custom feature module

This is the same principle as overriding an existing feature. Instead of giving an
`override` options to the decorators, you'll have to use the `resolutionKey` in order
to register them into the container using that key. You'll be then able
to retrieve them using the custom `resolutionKey` to resolve through the container.

## Build a shareable module

Building a shareable module is nothing more that the previous section. to achieve that
you can start using the [plugin-module starter](https://github.com/adrien2p/medusa-extender/tree/main/starters/plugin-module).

## Use custom configuration inside service

Each service is resolve by the container. One of the object that the container holds is,
the `configModule`. Which means that in any service, you are able to retrieve everything
that is in your `medusa-config` file. In other word, all the config you need to access
in a service, can be added to your `medusa-config` file.

## Integration in an existing medusa project

To benefit from all the features that the extender offers you, the usage of typescript is recommended.
If you have already an existing project scaffold with the command `medusa new ...` here is how are the following steps to integrate
the extender in your project.

follow the next steps yo be ready to launch :rocket:

```bash
npm i -D typescript
echo '{
  "compilerOptions": {
    "module": "CommonJS",
    "declaration": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "target": "es2017",
    "sourceMap": true,
    "skipLibCheck": true,
    "allowJs": true,
    "outDir": "dist",
    "rootDir": ".",
    "esModuleInterop": true
  },
  "include": ["src", "medusa-config.js"],
  "exclude": ["dist", "node_modules", "**/*.spec.ts"]
}' > tsconfig.json
```

update the scripts in your `package.json`

```json
{
  "scripts": {
    "build": "rm -rf dist && tsc",
    "start": "npm run build && node dist/src/main.js"
  } 
}
```

add a main file in the `src` directory

```typescript
// src/main.ts

import express = require('express');
import { Medusa } from 'medusa-extender';
import { resolve } from 'path';

async function bootstrap() {
    const expressInstance = express();
    
    const rootDir = resolve(__dirname) + '/../';
    await new Medusa(rootDir, expressInstance).load([]);
    
    expressInstance.listen(9000, () => {
        console.info('Server successfully started on port 9000');
    });
}

bootstrap();
```

And finally update the `develop.sh` script with the following

```bash
# develop.sh

#!/bin/bash

#Run migrations to ensure the database is updated
medusa migrations run

#Start development environment
npm run start
```

## Decorators API

Here is the list of the provided decorators.

| Decorator                            | Description                                                                 | Option               |
| ----------------------               | ----------------------                                                      | ----------------------
| `@Entity(/*...*/)`                   | Decorate an entity                                                          | `{ resolutionKey?: string; override?: Type<TOverride>; };`
| `@Repository(/*...*/)`               | Decorate a repository                                                       | `{ resolutionKey?: string; override?: Type<TOverride>; };`
| `@Service(/*...*/)`                  | Decorate a service                                                          | `{ scope?: LifetimeType; resolutionKey?: string; override?: Type<TOverride>; };`
| `@Middleware(/*...*/)`               | Decorate a middleware                                                       | `{ requireAuth: boolean; string; routes: MedusaRouteOptions[]; };`
| `@Router(/*...*/)`                   | Decorate a router                                                           | `{ router: RoutesInjectionRouterConfiguration[]; };`
| `@Validator(/*...*/)`                | Decorate a validator                                                        | `{ override: Type<TOverride>; };`
| `@Migration(/*...*/)`                | Decorate a migration                                                        | 
| `@OnMedusaEntityEvent.\*.\*(/*...*/)`| Can be used to send the right event type or register the handler to an event|  `(entity: TEntity, { async? boolean; metatype?: Type<unknown> })`

# Contribute :ballot_box:

Contributions are welcome! You can look at the contribution [guidelines](./CONTRIBUTING.md)
