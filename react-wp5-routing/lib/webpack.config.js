const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    port: 4100,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "libs",
      filename: "remoteEntry.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
        "./react-router-dom": "react-router-dom",
        "./styled-components": "styled-components",
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



// In order for a styled components to work it must be used 
// from the single source (shared lib)
// or listed as a shared dependency (along with react and react-dom)

// shared: {
//   'styled-components': {
//     singleton: true,
//   },
//   'react-dom': {
//     singleton: true,
//   },
//   react: {
//     singleton: true,
//   },
// }

// or it also can be done by including all "deps" + styled components
