medusa-extender / [Exports](modules.md)

# Introduction

This packages exports the necessary bits and pieces to extend [medusajs](https://github.com/medusajs/medusa)

# Dependency graph

![[Dependency graph](./assets/medusa-extender.jpeg)](./assets/medusa-extender.jpeg)

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

This method will
