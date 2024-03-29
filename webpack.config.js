const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");

module.exports = {
  entry: {
    main: "./src/js/main.js",
    styleguide: "./src/js/styleguide.js",
  },
  output: {
    path: path.resolve(__dirname, "build/css"),
    clean: true,
  },
  plugins: [
    new StylelintPlugin({ context: path.resolve(__dirname, "src/css") }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: "es2015",
        css: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "icss",
              },
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
