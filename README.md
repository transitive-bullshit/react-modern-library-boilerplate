# react-modern-library-boilerplate

> Boilerplate for publishing modern React modules with Rollup.

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

Publishing an open source React (or Preact) component or library to `npm` can be very rewarding, but getting started with the required machinery remains much more daunting than the relatively easy process of creating a React app via [create-react-app](https://github.com/facebookincubator/create-react-app) or [create-preact-app](https://github.com/just-boris/create-preact-app).

Because JS module formats and ES features are in a constant state of limbo, npm modules must support both the lowest common denominator format (commonjs) as well as modern ES6 modules without relying on commonplace language features like JSX and class properties most of the React community takes for granted. For this reason, it's pretty difficult to take a component you've written for an app and publish it directly to npm.

**The purpose of this boilerplate is to make the process of publishing your own React library or component modules as simple as possible.**

There are some existing React library boilerplates, but none of them fulfilled the following goals which we set out to accomplish:

- Support all modern JS language features for component development out of the box
- Build process to transpile component to `umd` and `es` module formats for publishing to npm
- Comes with an `example` app using a standard [create-react-app](https://github.com/facebookincubator/create-react-app), serving 2 purposes
  - A local, hot-reload dev project while developing and iterating on your component
  - Easily publishable to github pages so users can play with the example up front (same goes for any alternative static hosting providers such as [surge.sh](http://surge.sh/) or [now.sh](https://zeit.co/now))
- Use [Rollup](https://rollupjs.org/) for build process and [Babel](https://babeljs.io/) for transpilation.
  - See the FAQ below for an explanation of Rollup vs Webpack
- Easily allow the use of `npm` modules within your library, either as hard dependencies or external, peer dependencies
- Thorough documentation written by someone who cares :heart_eyes:

## Walkthrough

In order to use this boilerplate, you'll want to customize a cloned version. Don't worry if this walkthrough seems complicated, as it's meant to be very verbose.

Let's walk through an example by creating an npm module called `react-poop-emoji` that exposes a single component, `PoopEmoji` :poop:. We'll assume an example github username of `github-haxor`, where your github username is used for specifying the repository and github pages-hosted example.

```bash
# clone and rename base boilerplate repo
git clone https://github.com/transitive-bullshit/react-modern-library-boilerplate.git
mv react-modern-library-boilerplate react-poop-emoji
cd react-poop-emoji
rm -rf .git

# replace boilerplate placeholers with your module-specific values
# NOTE: feel free to use your favorite find & replace method instead of sed
mv README.template.md README.md
sed -i 's/react-modern-library-boilerplate/react-poop-emoji/g' *.{json,md} src/*.js example/*.json example/src/*.js example/public/*.{html,json}
sed -i 's/transitive-bullshit/github-haxor/g' package.json example/package.json
```

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

We'll also be running our `example/` create-react-app that's linked to the local version of your `react-poop-emoji` module.

```bash
# run example to start developing your new component against
npm link
npm install
npm start # runs rollup with watch flag

# (in another tab, run the example create-react-app)
cd example
npm link react-poop-emoji
npm install
npm start # runs create-react-app hot-reload dev server
```

Now, anytime you make a change to your component in `src/` or to the demo application's `demo/src`, `create-react-app` will live-reload your local dev server so you can iterate on your comnponent in real-time.

When you're ready to push your component for the first time to **github**, make sure you've customized the following files and then follow the normal steps for creating a github repo:

- edit `README.md`
- edit `package.json`

```bash
# prerequisites

# push to remote git repo
git init
git add *
git commit -am "init"
# add git remote and push to remote gitub repo
```

When you're ready to publish your component to **npm**, follow this checklist and then follow the normal steps to publish an npm module:

- add any npm modules you want as peer dependencies to the `external` array in `rollup.config.js`

```bash
# note this will also build `commonjs` and `es`versions of your 
npm publish
```

And finally, we recommend deploying your example to github pages so your users can quickly play around with a live version of your library before installing it.

Deploying to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
npm run deploy
```

Note that it's important for your `example/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

We recommend adding a link to the resulting github pages example to your README.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
