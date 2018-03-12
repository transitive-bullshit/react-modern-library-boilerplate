# react-modern-library-boilerplate

> Boilerplate and CLI [create-react-library](https://github.com/transitive-bullshit/create-react-library) for publishing modern React modules with Rollup and example usage via create-react-app.

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

*Note*: Modern means modern as of March, 2018.. I'm sure everything will change in a month... :joy: :joy:

We strongly recommend that you use the accompanying CLI [create-react-library](https://github.com/transitive-bullshit/create-react-library) to create new modules based off of this boilerplate.

**The purpose of this boilerplate is to make publishing your own React components as simple as possible.**

## Features

- Easy-to-use CLI [create-react-library](https://github.com/transitive-bullshit/create-react-library)
- Transpiles all modern JS features
- Bundles `umd` and `es` module formats
- [create-react-app](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [Rollup](https://rollupjs.org/) for build process
- [Babel](https://babeljs.io/) for transpilation
- [Jest](https://facebook.github.io/jest/) for testing
- Supports complicated peer-dependencies
- Supports CSS modules
- Sourcemap creation
- Thorough documentation :heart_eyes:

## Manual Setup

If you'd prefer to setup a new module manually, check out the introductory [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) and the old [manual guide](https://github.com/transitive-bullshit/react-modern-library-boilerplate/blob/master/manual.md).

## Examples

Here is an example react module created from this boilerplate: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages.

### Multiple Named Exports

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/multiple-exports) which demonstrates how to create a module with multiple named exports. The module in this branch exports two components, `Foo` and `Bar`, and shows how to use them from the example app.

### Material-UI

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/material-ui) which demonstrates how to create a module that makes use of a relatively complicated peer dependency, [material-ui](https://github.com/mui-org/material-ui). It shows the power of [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) which makes it a breeze to create reusable modules that include complicated material-ui subcomponents without having them bundled as a part of your module.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
