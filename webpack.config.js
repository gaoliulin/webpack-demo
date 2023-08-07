// 引入路径path模块
const path = require('path');
// 引入 HtmlWebpackPlugin 模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入 CleanWebpackPlugin 模块
var { CleanWebpackPlugin } = require('clean-webpack-plugin');

 
module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出文件的文件名
        filename: 'main.js',
        // 输出文件的路径，__dirname 总是指向被执行js文件的绝对路径
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/'
    },
    mode:'development' , //production
    plugins:[
        new CleanWebpackPlugin(), // 先清除，在打包
        new HtmlWebpackPlugin({
            title: '2 webpack 脚手架', //  生成html的标题
            filename:'index.html', //  生成html的文件名，默认是index.html，可以添加路径比如：src/index.html
            template:'./public/index.html', // 模版的路径
            inject:'body', 
            // inject有四个值： true body head false 
            // true 默认值，script标签位于html文件的 head中
            // body script标签位于html文件的 body 底部 
            // head script标签位于html文件的 head中

            favicon: './public/react-logo.png', // html的favicon路径
            // minify : '', // 使用minify会对生成的html文件进行压缩
            // hash: '', //  对所有css 和 js文件追加webpack生成的hash值
            // chunks: '', // chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件

            // meta : '', // 插入的meta标签内容 例如 meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
            // cache: '', // 缓存，只有内容变化的时候生成新文件
            // excludeChunks: '', //  排除掉一些js
            // xhtml: false, //  xhtml 一个布尔值，默认值是 false ，如果为 true ,则以兼容 xhtml 的模式引用文件。
            // chunksSortMode : '', //   script的顺序，默认四个选项： none auto dependency {function}
        }),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true,
    },

    // devServer: {
    //     contentBase: resolve('./'), // 对外提供的访问内容的路径，只有在提供静态文件访问的情况下才需要使用该配置。
    //     compress: true, // 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
    //     host: 'localhost' || baseDevServer.host,
    //     inline: true, // 切换dev-server的两种模式，默认情况server使用inline mode(live reload及构建信息的相关代码会被插入到bundle中。)。
    //     // false:切换到iframe mode(使用iframe mode会在通知栏下方显示构建信息)
    //     port: baseDevServer.port || 9000,
    //     quiet: true, // 当启用该配置，除了初始化信息会被写到console中，其他任何信息都不会被写进去。
    //                 // errors和warnings也不会被写到console中。
    //     useLocalIp: baseDevServer.useLocalIp || false,
    //     overlay: { // 在编译过程中有任何错误，可以显示在网页上,在浏览器上全屏显示编译的errors或warnings。默认是关闭的
    //     warnings: false,
    //     errors: true
    //     },
    //     headers: { // 向所有的请求添加headers
    //     "X-Custom-Foo": "bar"
    //     },
    //     historyApiFallback: true, // 当使用html5 history api,将会在响应404时返回index.html。
    //     historyApiFallback: { 
    //     rewrites: [ // 通过传递一个object来对该共呢个做更多的定
    //         { from: /^\/$/, to: '/views/landing.html' },
    //         { from: /^\/subpage/, to: '/views/subpage.html' },
    //         { from: /./, to: '/views/404.html' }
    //     ],
    //     disableDotRule: true // 当在路径中使用.符号，需要使用disableDotRule配置。
    //     },
    //     https: true, // 默认情况下dev-server使用http协议，通过配置可以支持https
    //     https: {
    //     key: fs.readFileSync("/path/to/server.key"),
    //     cert: fs.readFileSync("/path/to/server.crt"),
    //     ca: fs.readFileSync("/path/to/ca.pem"),
    //     },
    //     open: false, // 第一次构建是否自动用浏览器打开网页，默认是true
    //     openPage: '/different/page', // 配置项用于打开指定 URL 的网页
    //     hot: true, // 开启热更新HMR，只能跟新css。js和图片需要手动更新
    //     hotOnly:true, // 启用HMR，当编译失败时，不刷新页面。
    //     proxy: {
    //         '/api': {
    //             target: 'https://api.github.com', // 代理地址
    //             pathRewrite: {
    //             '^/api': ''
    //             },
    //             // 默认代理服务器，会以我们实际在浏览器请求的主机名【localhost:8080】，作为代理服务器的主机名，
    //             // 然后代理服务器会带上这个主机名，去请求github，然而 github是不认识 【localhost:8080】
    //             //  changeOrigin: true 就是以实际代理请求发生过程中的主机名去请求，如：代理服务器的主机名
    //             changeOrigin: true
    //         }
    //     }
    // }
};
