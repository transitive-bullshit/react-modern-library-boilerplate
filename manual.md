## Walkthrough

This guide is for people who don't want to use the accompanying CLI [create-react-library](https://github.com/transitive-bullshit/create-react-library).

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
mv readme.template.md readme.md
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

![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

#### NPM Stuffs

The only difference when publishing your component to **npm** is to make sure you add any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peer dependencies and not try to bundle them in your module.

Then publish as per usual.

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

## Examples

Here is an example react module created from this guide: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages and should give you a good idea of the type of module you’ll be able to create starting from this boilerplate.

### Multiple Named Exports

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/multiple-exports) which demonstrates how to create a module with multiple named exports. The module in this branch exports two components, `Foo` and `Bar`, and shows how to use them from the example app.

### Material-UI

Here is a [branch](https://github.com/transitive-bullshit/react-modern-library-boilerplate/tree/feature/material-ui) which demonstrates how to create a module that makes use of a relatively complicated peer dependency, [material-ui](https://github.com/mui-org/material-ui). It shows the power of [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external) which makes it a breeze to create reusable modules that include complicated material-ui subcomponents without having them bundled as a part of your module.
