const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const { ModuleFederationPlugin } = require('webpack').container;
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "macro",
    projectName: "workouts-page",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [

      new ModuleFederationPlugin({
        name: 'rootApp',
        library: { type: 'var', name: 'rootApp' },
        remotes: {
          app3010: 'app3010',
          app2: 'app2',
        },
        shared: { react: { singleton: true }, "react-dom": { singleton: true } }
      })
    ]
  });
};