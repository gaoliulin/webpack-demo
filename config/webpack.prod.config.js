const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: "all",    // 只对异步引入代码起作用，设置all时并同时配置vendors才对两者起作用
      minSize: 30000,   // 引入的库大于30kb时才会做代码分割
      minChunks: 1,     // 一个模块至少被用了1次才会被分割
      maxAsyncRequests: 5,     // 同时异步加载的模块数最多是5个，如果超过5个则不做代码分割
      maxInitialRequests: 3,   // 入口文件进行加载时，引入的库最多分割出3个js文件
      automaticNameDelimiter: '~',  // 生成文件名的文件链接符
      name: true,   // 开启自定义名称效果
      cacheGroups: {  // 判断分割出的代码放到那里去
        vendors: {   // 配合chunks： ‘all’使用，表示如果引入的库是在node-modules中，那就会把这个库分割出来并起名为vendors.js
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            filename: 'vendors.js'
        },
        default: {  // 为非node-modules库中分割出的代码设置默认存放名称
            priority: -20,
            reuseExistingChunk: true, // 避免被重复打包分割
            filename: 'common.js'
        }
      }
    },
    optimization: {
      minimizer: [
        // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
        // `...`,
        new CssMinimizerPlugin(),
      ],
    },
  }

});
