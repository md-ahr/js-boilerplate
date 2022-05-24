const path = require("path");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
          publicPath: "/",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({}),
      new CssMinimizerPlugin({
        minimizerOptions: {
          level: {
            1: {
              roundingPrecision: "all=3,px=5",
            },
          },
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
    ],
  },
  plugins: [
    new ImageminPlugin({
      pngquant: { quality: "95-100" },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "public/index.html",
    }),
  ],
};
