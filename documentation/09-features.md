# Application Architecture

Using this package help you organise your code in a module approach.
That means that you can go for a modular architecture and decoupled
your code depending on your domains.

Here is the proposed folder structure that you can add to your medusa project

```text
.
├── ...
├── src                                 # Here are located all the files that make your application
│   ├── modules                         # Where you can put all your modules using the medusa-extender
|       ├── Module1
|           ├── module1.entity.ts
|           ├── module1.migration.ts
|           ├── module1.service.ts
|           ├── module1.repository.ts
|           ├── module1.middleware.ts
|           ├── module1.module.ts       # This is where the above components are referenced
|           ├── ...
|       ├── Module2
|           ├── ...
|       ├── Module3
|           ├── ...
│   ├── main.ts                         # this is where the magic happen and your modules will be passed to the load method
└── ...
```