<!--lint disable awesome-list-item-->
<div align="center">
  <p align="center">
    <img alt="Medusa" src="https://user-images.githubusercontent.com/7554214/129161578-19b83dc8-fac5-4520-bd48-53cba676edd2.png" width="200" />
  </p>
  <h1>Extend medusa to fit your needs</h1>
    
  <a href="https://github.com/adrien2p/awesome-medusajs">
      <img src="https://awesome.re/badge.svg" alt="Awesome">
  </a>
  <a href="https://badge.fury.io/js/medusa-extender"><img src="https://badge.fury.io/js/medusa-extender.svg" alt="npm version" height="18"></a>
</div>

# Getting started

Installation

```bash
npm i medusa-extender
```

# Introduction

This packages exports the necessary bits and pieces to extend [medusajs](https://github.com/medusajs/medusa)

# Dependency graph

<img src="/assets/medusa-extender.jpeg"
     onerror="if (this.src != './media/medusa-extender.jpeg') this.src = './media/medusa-extender.jpeg';"
     alt="Dependency graph" />

# Api doc

[Read more about it](./docs)

# Usage

## Medusa

> `Medusa` is the entry point from `medusa-extender` and does not correspond to `medusa` itself

This is the main entry point that will allow to start your medusa server, including your custom extensions.

Here is an example of how it works

```typescript
async function bootstrap() {
    const expressInstance = express();
    
    const rootDir = resolve(__dirname);
    await new Medusa(rootDir, expressInstance)
        .consume(
            // Your custom middlewares goes there
        )
        .load();
    
    expressInstance.listen(config.serverConfig.port, () => {
        logger.info('Server successfully started on port ' + config.serverConfig.port);
    });
}

bootstrap();
```

### API

#### consume

This method take an array of `MedusaMiddlewareStatic` and return an instance of `Medusa`.


````typescript
public consume(...middlewares: MedusaMiddlewareStatic[]): Medusa;
````

here is an example of a custom middleware that will be handled by medusa

```typescript
import { NextFunction, Response } from 'express';
import {
	MedusaAuthenticatedRequest,
	MedusaMiddleware,
	MedusaResolverKeys,
	MedusaRouteOptions,
	MedusaUtils,
} from 'medusa-extender';

export default class MyCustomMiddleware
	implements MedusaMiddleware<typeof MyCustomMiddleware>
{
    // Indicate that it is a middleware that will be applied after the authentication
	public static isPostAuth = true;
    // Indicate that it is a middleware that should be handler by medusa. Otherwise it is manage by your project
	public static isHandledByMedusa = true;

	public static get routesOptions(): MedusaRouteOptions {
		return {
			path: '/admin/products/',
			method: 'post',
		};
	}

	public consume(options): (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction) => void | Promise<void> {
		return (req: MedusaAuthenticatedRequest, res: Response, next: NextFunction): void => {
            // Your custom implementation goes here
			return next();
		};
	}
}
```

### load

This basically start the `medusa` engine which comes from `@medusa/medusa` itself.


## MedusaEventEmitter

this module allow you to emit event that will be then handled by your registered services in the medusa container.
The main purpuse of it is to be able to intercept entity event and add custom login to them.

### Usage

For that purpose an utility is provided that allow multiple to attach a new subscriver on the active connection
handled by the medusa container.

Here is an example

```typescript
@EventSubscriber()
export default class StoreSubscriber
	implements EntitySubscriberInterface<Store>, MedusaEntitySubscriber<typeof StoreSubscriber>
{
	static attachTo(connection: Connection): void {
        MedusaUtils.attachOrReplaceEntitySubscriber(connection, StoreSubscriber);
    }

	public listenTo(): typeof Store {
		return Store;
	}

	/**
	 * Relay the event to the handlers.
	 * @param event Event to pass to the event handler
	 */
	public async beforeUpdate(event: UpdateEvent<Store>): Promise<any> {
		return await medusaEventEmitter.emitAsync(OnMedusaEvent.Before.UpdateEvent(Store), {
			event,
			transactionalEntityManager: event.manager,
		});
	}

	/**
	 * Relay the event to the handlers.
	 * @param event Event to pass to the event handler
	 */
	public async beforeRemove(event: RemoveEvent<Store>): Promise<any> {
		return await medusaEventEmitter.emitAsync(OnMedusaEvent.Before.RemoveEvent(Store), {
			event,
			transactionalEntityManager: event.manager,
		});
	}
}
```
Those events will be attached attached/removed for each request to be sure that if any
services are request scoped that you can access the actual cradle.

## Types

[Read more about it](./docs/modules/types.md)

## Repository

When you create a new entity that extends an existing entity, you must create the
appropriate repository that will reflect the new entity type but without breaking the 
original one used by medusa.

### Usage


For that purpose an utility is provided that allow multiple class extension.

Here is an example

```typescript
import { EntityRepository, Repository } from 'typeorm';
import { UserRepository as MedusaUserRepository } from '@medusajs/medusa/dist/repositories/user';
import { MedusaRepository, MedusaUtils } from 'medusa-extender';
import User from '../entities/user.entity';

@EntityRepository(User)
class UserRepository extends Repository<User> implements MedusaRepository<MedusaUserRepository, typeof UserRepository> {
	static overriddenType = MedusaUserRepository;
	static isHandledByMedusa = true;
}

export default MedusaUtils.repositoryMixin<User>(UserRepository, MedusaUserRepository);
```