# Troubleshooting

- [Typings across libs](https://adrien2p.github.io/medusa-extender/#/?id=typings-across-libs)
- [Override method that use `buildQuery`](https://adrien2p.github.io/medusa-extender/#/?id=override-method-that-use-buildquery)
- [Fixing the error when creating a new region](https://adrien2p.github.io/medusa-extender/#/?id=fixing-the-error-when-creating-a-new-region)
- [Loosing dependencies when using withTransaction (coming soon)]()

In this section you will retrieve the information regarding common issues that other users can encounter and how to tackle them.

> NOTE: You are more than welcome to update or improve this section if you think that you have something that
> can be useful for other users.
> You can update the following file: documentation/12-troubleshooting.md

## Typings across libs

### Problem

When you are able to extends an object from an external lib (medusa here), typescript can't be aware of the fact that the object
type has changed for the inner external lib as well.

### Solution

In that case, we have to use the approach providing by `declaration merging` and `module augmentation` (you can read more about
it [here](https://www.typescriptlang.org/docs/handbook/declaration-merging.html))

some example can be found in the [starter server](https://github.com/adrien2p/medusa-extender/blob/main/starters/server/src/modules/user/index.d.ts) as well
as in the [starter module](https://github.com/adrien2p/medusa-extender/blob/main/starters/plugin-module/src/modules/user/index.d.ts)

Case example: 

you are extending an Entity that we will call `Foo`, the core typed everywhere using `Foo` which is of type `Foo`.
in your project, you want to then extend a service related to `Foo`, the typings from the core can't be aware of the new 
properties that you might have added to extend `Foo`.

Therefore, when you want to consume a core method from medusa that return `Foo`
it means that it return the original one, but only has the type, but in reality the returned result represent your extended `Foo`.
In that case, we have to let typescript know that `Foo` has been extended and that the type must be merged everywhere it is used.

this is what the following code will do with a user extension example:

```ts
export declare module '@medusajs/medusa/dist/models/user' {
    declare interface User {
        store_id: string;
    }
}
```

As you can see, in order to tell typescript that the `user` as been extended, you have to specify which properties have been added.
From there, typescript will be able to match and merge the types as you can see in that [example](https://github.com/adrien2p/medusa-extender/blob/main/starters/plugin-module/src/modules/user/user.service.ts)

## Override method that use `buildQuery`

### Problem

In previous version, medusa was using a class method that you was able to override so that it can take into account
your update when querying.

### Solution

In order to get the same behaviour, you have to override the concerned method and manipulate the arguments to pass
down to the original method. This approach allow you to have a no impact on the core logic and therefore not being
impacted by any future update.

Let see an example with the order service:

```ts
@Service({ scope: 'SCOPED', override: MedusaOrderService })
export class OrderService extends MedusaOrderService {
  // 
  // ... Here is your constructor and all the rest of your code for example ...
  //
  
  // This method will prepare the different config to be pass down to the original method
  prepareSelectorAndConfig(
    selector: Selector<Order> | QuerySelector<Order>,
    config: FindConfig<Order> = {
      skip: 0,
      take: 50,
      order: { created_at: "DESC" },
    }
  ) {
    if (this.container.loggedInUser?.store_id) {
      selector['store_id'] = this.container.loggedInUser.store_id;
    }
    config.select.push('store_id')
    cconfig.relations = config.relations ?? []
    cconfig.relations.push("children", "parent", "store")
  }

  // In the following method we are mutating the arguments before passing them to the original method
  async list(
    selector: Selector<Order>,
    config: FindConfig<Order> = {
      skip: 0,
      take: 50,
      order: { created_at: "DESC" },
    }
  ): Promise<Order[]> {
    prepareSelectorAndConfig(selector, config)
    return await super.list(sector, config)
  }

  // In the following method we are mutating the arguments before passing them to the original method
  async listAndCount(
    selector: QuerySelector<Order>,
    config: FindConfig<Order> = {
      skip: 0,
      take: 50,
      order: { created_at: "DESC" },
    }
  ): Promise<Order[]> {
    prepareSelectorAndConfig(selector, config)
    return await super.listAndCount(sector, config)
  }
}
```

## Fixing the error when creating a new region

### Problem

When working with Medusa Extender to build your marketplace, you might face a an error when creating a new region due to the undefined `loggedInUser` variable.

### Solution

The solution is to create a new module that will import an extended version of the `RegionService`.
This `RegionService` will have a scope set to `SCOPED`.
This will allow you to pass the `loggedInUser` variable to the RegionService.

Here is an example of code that you can use:

```ts
import { RegionService as MedusaRegionService } from '@medusajs/medusa';
import { Service } from 'medusa-extender';

@Service({ override: MedusaRegionService, scope: 'SCOPED' })
export default class RegionService extends MedusaRegionService {}
```

Once the new module is loaded by Medusa Extender, the error should no longer appear when creating a new region.
