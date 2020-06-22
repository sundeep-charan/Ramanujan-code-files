var path = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry file to check
  entry: "./src/index.js",
  // The output folder representation

  module: {
    rules: [
      {
        // Check for the extension name as css.
        // If its so, apply the following loaders.
        test: /\.css$/,
        // Firstly, css-loader
        use: ["style-loader", "css-loader"]
      },
      {
        // Check for the extension name as css.
        // If its so, apply the following loaders.
        test: /\.scss$/,
        // Firstly, we are converting to css
        // Secondly injecting inside bundle.js
        // Thirdly, injecting inside DOM
        // remember the flow is form right to left
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

// ./dist - relative
// /Users/sundeep/Desktop/AttainU/Ramanujan/Codes/JavaScript/Webpack/dist - Absolute
