# Troubleshooting

In this section you will retrieve the information regarding problem that other user can encounter and how to tackle them.

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
import { default as ExtendedUserRepository } from './user.repository';

declare module '@medusajs/medusa/dist/models/user' {
    declare interface User {
        store_id: string;
    }
}
```

As you can see, in order to tell typescript that the `user` as been extended, you have to specify which properties have been added.
From there, typescript will be able to match and merge the types as you can see in that [example](https://github.com/adrien2p/medusa-extender/blob/main/starters/plugin-module/src/modules/user/user.service.ts)