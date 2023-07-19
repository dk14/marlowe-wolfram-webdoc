const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./app.ts",
    output: {
      filename: "bundle.js",
      path: __dirname + '/docs-src/js'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"],
      // Add support for TypeScripts fully qualified ESM imports.
      extensionAlias: {
       ".js": [".js", ".ts"],
       ".cjs": [".cjs", ".cts"],
       ".mjs": [".mjs", ".mts"]
      },
      fallback: { "assert": require.resolve("assert/") }
    },
    module: {
      rules: [
        // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
      ]
    }, 
    plugins: [
      new NodePolyfillPlugin()
    ],
    experiments: {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      topLevelAwait: true,
    }
  };