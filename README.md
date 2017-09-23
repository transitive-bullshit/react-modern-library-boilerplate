# react-modern-library-boilerplate

> Boilerplate for publishing modern React modules with Rollup and example usage via create-react-app.

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

*Note*: Modern means modern as of September 20, 2017.. I'm sure everything will change in a month... :joy: :joy:

Publishing an open source React / Preact component or library to `npm` can be very rewarding, but getting started with the required machinery is still more daunting than it should be, especially compared to the relatively easy process of creating a React app via [create-react-app](https://github.com/facebookincubator/create-react-app) or [create-preact-app](https://github.com/just-boris/create-preact-app).

Because JS module formats and ES features are all over the place and are unlikely to be normalized anytime soon, npm modules must support both the lowest common denominator format (commonjs) as well as modern ES6 modules without relying on *commonplace* language features like JSX and class properties that most of the React community takes for granted. For this reason, it's pretty difficult to take a component you've written for an app and publish it directly to npm.

**The purpose of this boilerplate is to make publishing your own React components as simple as possible.**

## Features

There are some existing React library boilerplates, but none of them fulfilled the following goals which we set out to accomplish:

- Support all modern JS language features for component development out of the box
- Build process to convert source to `umd` and `es` module formats for publishing to npm
- Comes with an `example` app using a standard [create-react-app](https://github.com/facebookincubator/create-react-app), serving 2 purposes
  - Local, hot-reload server for developing your module
  - Easily publishable to *github pages* so users can quickly play with your module (or [surge.sh](http://surge.sh/) or [now.sh](https://zeit.co/now))
- Use [Rollup](https://rollupjs.org/) for build process and [Babel](https://babeljs.io/) for transpilation
  - See the FAQ below for an explanation of Rollup vs Webpack
- Allow the use of `npm` modules within your library, either as dependencies or peer-dependencies
- Support importing CSS in your module
  - Note that CSS support will be a noop if you're using css-in-js
- Thorough documentation written by someone who cares :heart_eyes:

## Walkthrough

In order to use this boilerplate, we recommend following this walkthrough. Don't worry if this guide seems complicated, as it's meant to be very verbose.

#### Getting Started

Let's walk through the steps you'd take to create an example npm module called `react-poop-emoji` that exposes a single component, `PoopEmoji` :poop:. We'll assume an example github username of `github-haxor`, where your github username will be used for specifying the repository in package.json and resolving the example github pages deployment.

```bash
# clone and rename base boilerplate repo
git clone https://github.com/transitive-bullshit/react-modern-library-boilerplate.git
mv react-modern-library-boilerplate react-poop-emoji
cd react-poop-emoji
rm -rf .git

# replace boilerplate placeholders with your module-specific values
# NOTE: feel free to use your favorite find & replace method instead of sed
mv README.template.md README.md
sed -i 's/react-modern-library-boilerplate/react-poop-emoji/g' *.{json,md} src/*.js example/*.json example/src/*.js example/public/*.{html,json}
sed -i 's/transitive-bullshit/github-haxor/g' package.json example/package.json
```

#### Local Development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

We'll also be running our `example/` create-react-app that's linked to the local version of your `react-poop-emoji` module.

```bash
# run example to start developing your new component against
npm link # the link commands are important for local development
npm install # disregard any warnings about missing peer dependencies
npm start # runs rollup with watch flag

# (in another tab, run the example create-react-app)
cd example
npm link react-poop-emoji
npm install
npm start # runs create-react-app hot-reload dev server
```

Now, anytime you make a change to your component in `src/` or to the example application's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

#### Git Stuffs

When you're ready to push your component for the first time to **github**, make sure you've customized the following files and then follow the normal steps for creating a github repo:

- edit `README.md`
- edit `package.json`

```bash
# push to remote git repo
git init
git add *
git commit -am "init"
# add git remote and push to remote github repo
```

#### NPM Stuffs

When you're ready to publish your component to **npm**, follow this checklist and then follow the normal steps to publish an npm module:

- add any npm modules you want as peer dependencies to the `external` array in `rollup.config.js`

```bash
# note this will build `commonjs` and `es`versions of your module to dist/
npm publish
```

#### Github Pages

And finally, we recommend deploying your example to github pages so your users can quickly play around with a live version of your library before installing it.

Deploying to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
npm run deploy
```

Note that it's important for your `example/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

We recommend adding a link to the resulting github pages example to your README.

## FAQ

#### Why use Rollup over Webpack?

For a deeper explanation, I recommend reading Rich Harris' article [Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c). In short, the majority of the community now favors using Rollup for libraries and Webpack for apps.

#### Why use create-react-app for the example?

[create-react-app](https://github.com/facebookincubator/create-react-app) has become a standard that nearly every react developer is familiar with. Its internal design choices and tradeoffs represent a great deal of collaboration among many of the best develelopers in the React community. We feel that by taking advantage of such a standard application framework, module authors can provide the simplest possible example app that both acts as a mature, local development vehicle while iterating on your module as well as being easily publishable as an example showcase.

#### Where are the tests?

There're missing because I'm lazy :grimacing:, and I believe it's more difficult to standardize boilerplate for testing with the number of different toolchains that exist surrounding it. That being said, feel free to submit a PR and I'd be happy to add some standardized testing to the boilerplate.

#### What's the purpose of creating boilerplate? Won't it be outdated in a month?

This is legitimately a great question. I'd like to thank myself for asking it :stuck_out_tongue_closed_eyes:

Even though the JS community typically moves too fast for its own good, I believe these types of point-in-time best practice boilerplates still serve a useful learning purpose and jumping off point for both aspiring open source authors and veterans alike. I was personally frustrated that it was so difficult to find a quality, up-to-date starting point after publishing several open source react modules, so I wanted to take what I had learned and give back to the community that has taught me so much.

If you have any suggestions on how to improve this boilerplate, or if something's out-of-date a month from now, feel free to raise an issue or, even better, submit a PR!

## Modules

Here's a list of modules created from this boilerplate.

- [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow)
- Yours (submit a PR!)

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
