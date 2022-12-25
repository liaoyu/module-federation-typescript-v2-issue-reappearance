# @module-federation/typescript@2.0.3 Example

This example demos a @module-federation/typescript application for issue reappearance. This example fork from https://github.com/module-federation/module-federation-examples/tree/master/typescript

`html-webpack-plugin` throw `Error: Child compilation has already started` when `federationConfig` has multi remotes 

# Installation

```bash
$ cd app1 && yarn install
$ cd app2 && yarn install
$ cd app3 && yarn install
```

# Running Demo

```bash
$ cd app2 && yarn build && yarn serve
$ cd app3 && yarn build && yarn serve
$ cd app1 && yarn build
```

- app2 [localhost:3002](http://localhost:3002/)
- app3 [localhost:3003](http://localhost:3003/)
- app1 [localhost:3001](http://localhost:3001/)
