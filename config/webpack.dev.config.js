const { merge } = require("webpack-merge")

const common = require("./webpack.common.config")
module.exports = merge(common, {
  mode: "development",
  devServer: {
    hot: true,
    // host:"127.0.0.1",
    // open:true,
    port: 8000,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.(vue|js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: "pre" //vue-loader处理之前，进行预处理
    }]
  }
})
