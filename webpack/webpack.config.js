const { merge } = require("webpack-merge");

const envConfig =
  process.env.NODE_ENV === "production"
    ? require("./webpack.config.prod.js")
    : require("./webpack.config.dev.js");

module.exports = merge(require("./webpack.config.common.js"), envConfig);
