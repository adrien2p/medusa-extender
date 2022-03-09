<p align="center">
  <img src="https://github.com/adrien2p/medusa-extender/blob/assets/assets/logo.png?raw=true" alt="Medusa-extender logo" width="500" height="auto" />
</p>
<h1 align="center">medusa-extender</h1>

<h4 align="center">
    <a href="https://adrien2p.github.io/medusa-extender/#/" alt="Full documentation">Full documentation website</a>
</h4>

<p align="center">
		<a href="https://npmcharts.com/compare/medusa-extender?minimal=true"><img alt="Downloads per month" src="https://img.shields.io/npm/dm/medusa-extender.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/medusa-extender"><img alt="NPM Version" src="https://img.shields.io/npm/v/medusa-extender.svg" height="20"/></a>
<a href="https://david-dm.org/adrien2p/medusa-extender"><img alt="Dependencies" src="https://img.shields.io/david/adrien2p/medusa-extender.svg" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/adrien2p/medusa-extender.svg" height="20"/></a>
<a href="https://github.com/adrien2p/awesome-medusajs"><img alt="Awesome medusajs" src="https://awesome.re/badge.svg" height="20"/></a>
<a href="https://adrien2p.github.io/medusa-extender/#/"><img alt="Documentation" src="https://img.shields.io/badge/documentation-online-important" height="20"/></a>
<a href="https://twitter.com/intent/tweet?text=Check%20this%20out!%20The%20new%20medusa%20headless%20e-commerce%20extender&url=https://github.com/adrien2p/medusa-extender"><img alt="Twitter" src="https://badgen.net/badge/icon/twitter?icon=twitter&label=Share%20it%20on" height="20"/></a>
<a href="https://discord.gg/xpCwq3Kfn8"><img alt="Discord" src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" height="20"/></a>
<a href="https://www.npmjs.com/package/medusa-extender"><img alt="Npm download" src="https://img.shields.io/npm/dt/medusa-extender" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/commits/main"><img alt="Activity" src="https://img.shields.io/github/commit-activity/m/adrien2p/medusa-extender?style=flat" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/issues"><img alt="Issues" src="https://img.shields.io/github/issues/adrien2p/medusa-extender?style=flat" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/blob/main/LICENSE"><img alt="Licence" src="https://img.shields.io/github/license/adrien2p/medusa-extender?style=flat" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/blob/main/CONTRIBUTING.md"><img alt="Contributing" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/actions/workflows/action.yml"><img alt="Test pipeline status" src="https://github.com/adrien2p/medusa-extender/actions/workflows/action.yml/badge.svg" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/actions/workflows/pages/pages-build-deployment"><img alt="Page build deployment status" src="https://github.com/adrien2p/medusa-extender/actions/workflows/pages/pages-build-deployment/badge.svg" height="20"/></a>
<a href="https://github.com/adrien2p/medusa-extender/actions/workflows/codeql-analysis.yml"><img alt="CodeQL security analysis status" src="https://github.com/adrien2p/medusa-extender/actions/workflows/codeql-analysis.yml/badge.svg" height="20"/></a>
<a href="https://www.producthunt.com/posts/medusa-extender?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-medusa-extender"><img alt="Product hunt" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=333482&theme=dark" height="20"/></a>
	</p>

<p align="center">
  <b> :syringe: Medusa on steroid. Extends Typeorm entities and repositories, medusa core services and so on. Get the full power of modular architecture. Keep your domains clean. Build shareable modules :rocket:</b></br>
  <sub>Do you want to extend existing entities to add custom fields? Do you want to implement your own feature or extend existing one
        in a module way? Did you ever wanted to build something more than a single store?
        Well, this project has been made to help you reach you goal. It is now possible to customise
        Medusa in a way you will be able to enjoy all the awesome features that Medusa provides you
        but with the possibility to take your e-commerce project to the next level :rocket:<sub>
</p>

<br />


<p align="center">
    <a href="https://www.buymeacoffee.com/adriendeperetti" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#table-of-contents)

## Table of Contents

* [Getting started :rocket:](#getting-started-rocket)
* [Integration within your medusa project](#integration-within-your-medusa-project)
* [Features :monocle_face:](#features-monocle_face)
	* [Non exhaustive list](#non-exhaustive-list)
	* [Architecture](#architecture)
* [Documentation](#documentation)
* [Resources](#tutorials)
* [Discussions](#discussions)
* [Like my work? :heartbeat:](#like-my-work-heartbeat)
* [Contribute](#contribute)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#getting-started-rocket)

# Getting started :rocket:

> IMPORTANT! Using the extender does not break any features from medusa under the hood.
> The only thing it provides are some badass features

Run the following command in your terminal (The last version is 1.4.5)

```bash
npm install medusa-extender
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#integration-within-your-medusa-project)

# Integration within your medusa project

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
#!/bin/bash

#Run migrations to ensure the database is updated
medusa migrations run

#Start development environment
npm run start
```

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#features-monocle_face)

# Features :monocle_face:


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#non-exhaustive-list)

## Non exhaustive list

Here is a list of the features that you can find in that package

- Create or extend an entity
- Create or extend a repository
- Create or extend a service
- Create middleware before or after medusa authentication strategy
- Create new migrations
- Create new router handler
- Extend validators from medusa to includes custom fields
- Emit entity subscribers events
- Listen to entity subscribers and handle them wherever you want

All those features provide you a way to

- Create and manage a market place
- Create a media store to sell nft - video - images - keys - etc.
- And basically create whatever you want on top of `@medusajs`

Share your code

- Build shareable modules/plugins to use across your project or to share with the community


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#architecture)

## Architecture

Using this package also allow you to manage your architecture as you want.
you will not be limited by any constraint as long as the component are decorated
and the modules are referenced into the main file to be loaded, everything is fine.
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

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#documentation)

# Documentation

See our dedicated documentation website for the Medusa-extender package, follow the [link](https://adrien2p.github.io/medusa-extender/)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#discussions)

# Discussions

If you are interesting in participate to any discussions you can follow that [links](https://github.com/adrien2p/medusa-extender/discussions)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#resources)

# Resources

Here are some resources that are using the medusa-extender, more of them
will come in time :rocket:.

## Marketplace tutorial

Here is a tutorial repository that will be followed by a series of article to guide you
through the process of creating your marketplace using `@medusajs` and the `medusa-extender`.

Here is the link to the [Marketplace tutorial repo](https://github.com/shahednasser/medusa-marketplace-tutorial)
and Here is the link to the [Marketplace tutorial plugin](https://github.com/shahednasser/medusa-marketplace)

Here is the first tutorial using the medusa-extender package, [Open source ecommerce platform for multi-vendor marketplaces](https://dev.to/medusajs/create-an-open-source-commerce-marketplace-part-1-3m5k)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#like-my-work-heartbeat)

# Like my work? :heartbeat:

This project needs a :star: from you. Don't forget to leave a star :star:.
If you found the package helpful consider supporting me with a coffee

<a href="https://www.buymeacoffee.com/adriendeperetti" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png)](#contribute)

# Contribute

Contributions are welcome! You can look at the contribution [guidelines](./CONTRIBUTING.md)
