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
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
