# react-modern-library-boilerplate

> Boilerplate for publishing modern React modules with Rollup and example usage via create-react-app.

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

*Note*: Modern means modern as of November, 2017.. I'm sure everything will change in a month... :joy: :joy:

Introductory [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7).

**The purpose of this boilerplate is to make publishing your own React components as simple as possible.**

## Features

There are some existing React library boilerplates, but none of them fulfilled the following goals which we set out to accomplish:

- Support all modern JS language features for component development out of the box
- Build process to convert source to `umd` and `es` module formats for publishing to npm
- Comes with an `example` app using a standard [create-react-app](https://github.com/facebookincubator/create-react-app), serving 2 purposes
  - Local, hot-reload server for developing your module
  - Easily publishable to *github pages* so users can quickly play with your module (or [surge.sh](http://surge.sh/) or [now.sh](https://zeit.co/now))
- Use [Rollup](https://rollupjs.org/) for build process and [Babel](https://babeljs.io/) for transpilation
  - See the [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) for an explanation of Rollup vs Webpack
- Allow the use of `npm` modules within your library, either as dependencies or peer-dependencies
- Support importing CSS in your module
  - Note that CSS support will be a noop if you're using css-in-js
- Testing with [Jest](https://facebook.github.io/jest/), using `react-scripts` from `create-react-app`
- Thorough documentation written by someone who cares :heart_eyes:

## Walkthrough

Check out the accompanying [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) which gives more in-depth explanations on how to create an example component using this boilerplate.

On this page, we'll give a quick rundown of the essential steps.

#### Getting Started

The first step is to clone this repo and rename / replace all boilerplate names to match your custom module. In this example, we'll be creating a module named `react-poop-emoji`.

```bash
# clone and rename base boilerplate repo
git clone https://github.com/transitive-bullshit/react-modern-library-boilerplate.git
mv react-modern-library-boilerplate react-poop-emoji
cd react-poop-emoji
rm -rf .git
```

```bash
# replace boilerplate placeholders with your module-specific values
# NOTE: feel free to use your favorite find & replace method instead of sed
mv README.template.md README.md
sed -i 's/react-modern-library-boilerplate/react-poop-emoji/g' *.{json,md} src/*.js example/*.json example/src/*.js example/public/*.{html,json}
sed -i 's/transitive-bullshit/your-github-username/g' package.json example/package.json
```

#### Local Development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

```bash
# run example to start developing your new component against
npm link # the link commands are important for local development
npm install # disregard any warnings about missing peer dependencies
npm start # runs rollup with watch flag
```

We'll also be running our `example/` create-react-app that's linked to the local version of your `react-poop-emoji` module.

```bash
# (in another tab)
cd example
npm link react-poop-emoji
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your component in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

#### NPM Stuffs

The only difference when publishing your component to **npm** is to make sure you add any npm modules you want as peer dependencies to the `external` array in `rollup.config.js`. Then publish as per usual.

```bash
# note this will build `commonjs` and `es`versions of your module to dist/
npm publish
```

#### Github Pages

Deploying the example to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
npm run deploy
```

Note that it's important for your `example/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

## Example Module

Here is an example react module created from this guide: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages and should give you a good idea of the type of module you’ll be able to create starting from this boilerplate.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
