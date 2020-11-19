const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  name: "server",
  target: "node",
  entry: "./src/index.js",
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
    },
],
},
output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist/"),
    filename: "server.bundle.js",
    libraryTarget: "commonjs2",
  },
};


