# flowtype-webpack-plugin
> Check flow types in your Webpack builds!

**Requires Webpack v4**

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

### Plugin options

#### `warning`: _boolean_
> Throw warnings instead of errors.
```js
new FlowtypeWebpackPlugin({ warning: true })
```

#### `forceFail`: _boolean_
> Immediately kill the compilation process.
```js
new FlowtypeWebpackPlugin({ forceFail: true })
```

## License

MIT
