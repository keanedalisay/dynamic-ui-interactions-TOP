const HTMLWebpackPLugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPLugin({ template: "./src/index.temp.html" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: { filename: "assets/img/[name].[hash][ext]" },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: { filename: "assets/fonts/[name].[hash][ext]" },
      },
      { test: /\.html$/i, use: ["html-loader"] },
    ],
  },
};
