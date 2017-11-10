# react-modern-library-boilerplate

> Boilerplate for publishing modern React modules with Rollup and example usage via create-react-app.

[![NPM](https://img.shields.io/npm/v/react-modern-library-boilerplate.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

*Note*: Modern means modern as of November, 2017.. I'm sure everything will change in a month... :joy: :joy:

Check out the accompany [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) for background and a usage guide on this boilerplate.

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
- Thorough documentation written by someone who cares :heart_eyes:

## Walkthrough

Check out the accompanying [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) which walks through an in-depth example of how to create an example component using this boilerplate.

## FAQ

#### Why use Rollup over Webpack?

For a deeper explanation, I recommend reading Rich Harris' article [Webpack and Rollup: the same but different](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c). In short, the majority of the community now favors using Rollup for libraries and Webpack for apps.

#### Why use create-react-app for the example?

[create-react-app](https://github.com/facebookincubator/create-react-app) has become a standard that nearly every react developer is familiar with. Its internal design choices and tradeoffs represent a great deal of collaboration among many of the best developers in the React community. We feel that by taking advantage of such a standard application framework, module authors can provide the simplest possible example app that both acts as a mature, local development vehicle while iterating on your module as well as being easily publishable as an example showcase.

#### Where are the tests?

I recommend that you piggyback off of create-react-app’s built-in test harness setup for testing your library. That being said, feel free to submit a PR and I’d be happy to add some separate, standardized testing to the boilerplate.

#### What's the purpose of creating boilerplate? Won't it be outdated in a month?

This is legitimately a great question. I'd like to thank myself for asking it :stuck_out_tongue_closed_eyes:

Even though the JS community typically moves too fast for its own good, I believe these types of point-in-time best practice boilerplates still serve a useful learning purpose and jumping off point for both aspiring open source authors and veterans alike. I was personally frustrated that it was so difficult to find a quality, up-to-date starting point after publishing several open source react modules, so I wanted to take what I had learned and give back to the community that has taught me so much.

If you have any suggestions on how to improve this boilerplate, or if something's out-of-date a month from now, feel free to raise an issue or, even better, submit a PR!

#### How can I use use Typescript in my components?

Rollup has excellent Typescript support. For details on how to integrate Typescript with this boilerplate, see this [issue](https://github.com/transitive-bullshit/react-modern-library-boilerplate/issues/1).

#### What does a published module look like?

Here is an example react module created from this guide: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages and should give you a good idea of the type of module you’ll be able to create starting from this boilerplate.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
