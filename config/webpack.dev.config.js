// 引入路径path模块
const path = require('path');
// 引入webpack-merge
const { merge } = require('webpack-merge');
// 引入公共配置
 const common = require('./webpack.common.config.js');

// 第一个参数是公共配置 第二个参数是环境里的配置
 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
    static: { // 服务器加载文件路径， 5.x 版本已改为  static 配置
      directory: path.join(__dirname, 'dist'),
    },
    // contentBase: path.join(__dirname, "dist"), // 服务器加载文件路径 ， 4.X版本的配置项， 5.x 版本已改为  static 配置
    compress: true,
    port: 9000,
    open: true,
    proxy: {
        '/api': {
            target: 'https://api.github.com', // 代理地址
            pathRewrite: {
            '^/api': ''
            },
            // 默认代理服务器，会以我们实际在浏览器请求的主机名【localhost:8080】，作为代理服务器的主机名，
            // 然后代理服务器会带上这个主机名，去请求github，然而 github是不认识 【localhost:8080】
            //  changeOrigin: true 就是以实际代理请求发生过程中的主机名去请求，如：代理服务器的主机名
            changeOrigin: true
        }
    }
},
 });
