# Getting started :rocket:

Depending on your situation, pick the right getting started section.

## Existing medusa project

In that case, you must already have scaffold a new medusa store project. If that's not the case you can [follow the tutorial here](https://docs.medusajs.com/quickstart/quick-start).

Run the following command in your terminal (The last version is {{ pkg.version }})

```bash
npm install {{ pkg.name }}
```

To benefit from all the features that the extender offers you, the usage of typescript is recommended.

Then let's create the `tsconfig.json` configuration

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
#!/bin/bash

#Run migrations to ensure the database is updated
medusa migrations run

#Start development environment
npm run start
```

That's it, your now ready to run your server :rocket:

## From server starter

You can directly clone the `starters/server` to get started quickly.

Follow the next command to be ready in minutes

```bash
npx degit github:adrien2p/medusa-extender/starters/server#main server
cd server
npm i
npm run build
npm run start
```

That's it, your server is not up and running :rocket:
