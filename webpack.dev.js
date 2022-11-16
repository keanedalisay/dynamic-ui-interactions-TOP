const HTMLWebpackPLugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: [path.resolve(__dirname, "src/index.js")],
  },
  output: {
    path: [path.resolve(__dirname, "dist")],
    filename: "[name].bundle.js",
  },
  plugins: [new HTMLWebpackPLugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
      { test: /\.html$/i, use: ["html-loader"], options: { minimize: false } },
    ],
  },
};
