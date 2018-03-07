# funmi-cli [![npm package](https://img.shields.io/npm/v/funmi-cli.svg)](https://www.npmjs.com/package/funmi-cli)

A simple CLI for scaffolding funmi's Vue.js projects.

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=6.x, 8.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g funmi-cli
```

### Usage

``` bash
$ funmi init <template-name> <project-name>
```

Example:

``` bash
$ funmi init fadmin my-project
```
The above command pulls the template from [funmijs-templates/fadmin](https://github.com/funmijs-templates/fadmin), prompts for some information, and generates the project at `./my-project/`.

### Templates
The purpose of Vue project templates are to provide opinionated, battery-included development tooling setups so that users can get started with actual app code as fast as possible. However, these templates are un-opinionated in terms of how you structure your app code and what libraries you use in addition to Vue.js.

All project templates are repos in the [funmijs-templates organization](https://github.com/funmijs-templates). When a new template is added to the organization, you will be able to run `funmi init <template-name> <project-name>` to use that template. You can also run `funmi list` to see all available official templates.

Current available templates include:

- [fadmin](https://github.com/funmi-templates/fadmin) - A template for funmi's vue.js admin website.

### License

[MIT](http://opensource.org/licenses/MIT)
