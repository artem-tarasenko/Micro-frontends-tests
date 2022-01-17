const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  //Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    historyApiFallback: true,
    port: 4000,
    watchContentBase: true
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), 
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "root",
      filename: "remoteEntry.js",
      remotes: {
        libs: "libs@http://localhost:4100/remoteEntry.js",
        mealplan: 'mealplan@http://localhost:4001/remoteEntry.js',
        workouts: 'workouts@http://localhost:4002/remoteEntry.js',
        userinfo: 'userinfo@http://localhost:4003/remoteEntry.js',
      },
      shared: {
        ...deps,
        'styled-components': {
          singleton: true,
        },
      }
    }),
  ],
}

// mealplan: 'mealplan@http://localhost:4001/remoteEntry.js',
// userinfo: 'userinfo@http://localhost:4003/remoteEntry.js',
// workouts: 'workouts@http://localhost:4002/remoteEntry.js',

