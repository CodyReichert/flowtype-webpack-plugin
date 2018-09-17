# flowtype-webpack-plugin
> Check flow types in your Webpack builds!

**Required Webpack v4**

This plugin runs `flow status` on your project's code before emitting
the compiled bundles.

## Usage

Install the package:
```
npm i -D flowtype-webpack-plugin
```

Use the plugin:
```js
const FlowtypeWebpackPlugin = require('flowtype-webpack-plugin')

{
    ...your webpack config
    plugins: [
        new FlowtypeWebpackPlugin()
    ]
}
```

## License

MIT
