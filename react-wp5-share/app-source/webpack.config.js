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
    port: 3001,
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
        resolve: {
          extensions: [".js", ".jsx"]
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
      name: "counter",
      filename: "remoteEntry.js",
      remotes: {
        // libs: "libs@http://localhost:4100/remoteEntry.js",
      },
      exposes: {
        // "./react": "react",
        // "./react-dom": "react-dom",
        // "./react-router-dom": "react-router-dom",
        "./recoil": "recoil",
        "./CharacterCounter": './src/components/CharacterCounter.jsx',
        "./textState": './src/components/CharacterCounter.jsx',
      },
      shared: {
        ...deps,
        react: {singleton: true},
        // 'react-dom': {singleton: true},
      }
    }),
  
  ],
}