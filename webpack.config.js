var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "dist");
var APP_DIR = path.resolve(__dirname, "src");

var config = {
  mode: "development",
  // devtool: 'cheap-module-eval-source-map',
  devtool: "source-map",
  entry: {
    main: APP_DIR + "/index.jsx"
    // D1: APP_DIR + '/execload.js'
  },
  devServer: {
    inline: false
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js",
    library: "main",
    libraryTarget: "window"
  },
  externals: {
    "./vendor": "vendor",
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      window: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      window: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader"
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};

module.exports = config;
