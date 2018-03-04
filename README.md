# react-modern-library-boilerplate

> Boilerplate and [CLI](https://github.com/transitive-bullshit/react-modern-library-cli) for publishing modern React modules with Rollup and example usage via create-react-app.

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

*Note*: Modern means modern as of March, 2018.. I'm sure everything will change in a month... :joy: :joy:

We strongly recommend that you use the accompanying [CLI](https://github.com/transitive-bullshit/react-modern-library-cli) to create new modules based off of this boilerplate.

**The purpose of this boilerplate is to make publishing your own React components as simple as possible.**

## Features

There are some existing React library boilerplates, but none of them fulfilled the following goals which we set out to accomplish:

- Comes with an easy-to-use [CLI](https://github.com/transitive-bullshit/react-modern-library-cli) for creating new modules
- Support all modern JS language features for component development out of the box
- Build process to convert source to `umd` and `es` module formats for publishing to npm
- Comes with an `example` app using a standard [create-react-app](https://github.com/facebookincubator/create-react-app), serving 2 purposes
  - Local, hot-reload server for developing your module
  - Easily publishable to github pages so users can quickly play with your module
- Use [Rollup](https://rollupjs.org/) for build process and [Babel](https://babeljs.io/) for transpilation
  - See the [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) for an explanation of Rollup vs Webpack
- Allow the use of `npm` modules within your library, either as dependencies or peer-dependencies
- Support importing CSS in your components (with css modules enabled by default)
  - Note that CSS support will be a noop if you're using css-in-js
- Testing with [Jest](https://facebook.github.io/jest/), using `react-scripts` from `create-react-app`
- Sourcemap creation enabled by default
- Thorough documentation written by someone who cares :heart_eyes:

## Usage

If you'd prefer to setup a new module manually, check out the introductory [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) and the old [manual guide](https://raw.githubusercontent.com/transitive-bullshit/react-modern-library-boilerplate/master/manual.md).

## Examples

Here is an example react module created from this boilerplate: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages.

### Multiple Named Exports

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/multiple-exports) which demonstrates how to create a module with multiple named exports. The module in this branch exports two components, `Foo` and `Bar`, and shows how to use them from the example app.

### Material-UI

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/material-ui) which demonstrates how to create a module that makes use of a relatively complicated peer dependency, [material-ui](https://github.com/mui-org/material-ui). It shows the power of [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) which makes it a breeze to create reusable modules that include complicated material-ui subcomponents without having them bundled as a part of your module.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
