var path = require("path");
var merge = require("webpack-merge");
var commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  // The type of bundling.
  mode: "production",
  output: {
    filename: "bundle-[contentHash].js",
    path: path.resolve(__dirname, "dist")
  }
});

// ./dist - relative
// /Users/sundeep/Desktop/AttainU/Ramanujan/Codes/JavaScript/Webpack/dist - Absolute
