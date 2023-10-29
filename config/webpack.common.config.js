// const webpack = require('webpack')
// 引入路径path模块
const path = require("path");
// 引入 HtmlWebpackPlugin 模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
//引入 CleanWebpackPlugin 模块
var { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log("__dirname--", __dirname);

module.exports = {
  /* 入口文件 */
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    main: "./src/main.js",
  },

  /* 出口文件 */
  output: {
    // path: path.resolve(__dirname, PATHS["dist"]),
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
    clean: true,
  },
  module: {
    //文件后缀名的匹配规则 匹配到test指定的文件类型 使用use中对应的loader
    rules: [
      {
        test: /\.css$/, // 匹配CSS文件
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader", // 配置抽离到 postcss.config.js 文件了
        ], // 使用style-loader和css-loader
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader", // 配置抽离到 postcss.config.js 文件了。 必须先 postcss-loader，然后 css-loader，否则会报错
          "less-loader",
        ],
      },
      {
        test: /.s[ac]ss$/i, // 匹配sass  scss 文件
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader", // 将 JS 字符串生成为 style 节点
          "css-loader", // 将 CSS 转化成 CommonJS 模块
          "postcss-loader", // 配置抽离到 postcss.config.js 文件了。 必须先 postcss-loader，然后 css-loader，否则会报错
          "sass-loader", // 将sass 编译成 CSS
        ],
      },
      {
        test: /\.(jsx|js)$/, //已作为js扩展名这样类型的文件
        exclude: /node_modules/, //排除node_modules文件夹
        use: {
          loader: "babel-loader", //转换成es5
          // options:{
          //     presets:['@babel/preset-env'], //设置编译的规则
          // },
          // plugins:[ // 设置编译的插件
          //     ['@babel/plugin-transform-runtime'] //设置编译的规则
          // ],
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/, //排除node_modules文件夹
      },
      {
        //处理图片的
        test: /.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        //处理字体
        test: /.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash][ext][query]",
        },
      },
      {
        //处理视频和音频
        test: /.(ttf|woff2?|map4|map3|avi)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, "src"),
    }),
    // new webpack.ids.NamedModuleIdsPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(), // 先清除，在打包
    new HtmlWebpackPlugin({
      title: "webpack 脚手架", //  生成html的标题
      filename: "index.html", //  生成html的文件名，默认是index.html，可以添加路径比如：src/index.html
      template: "./public/index.html", // 模版的路径
      inject: "body",
      // inject有四个值： true body head false
      // true 默认值，script标签位于html文件的 head中
      // body script标签位于html文件的 body 底部
      // head script标签位于html文件的 head中

      favicon: "./public/react-logo.png", // html的favicon路径
      // minify : '', // 使用minify会对生成的html文件进行压缩
      // hash: '', //  对所有css 和 js文件追加webpack生成的hash值
      // chunks: '', // chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
      chunks: ["index"],

      // meta : '', // 插入的meta标签内容 例如 meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
      // cache: '', // 缓存，只有内容变化的时候生成新文件
      // excludeChunks: '', //  排除掉一些js
      // xhtml: false, //  xhtml 一个布尔值，默认值是 false ，如果为 true ,则以兼容 xhtml 的模式引用文件。
      // chunksSortMode : '', //   script的顺序，默认四个选项： none auto dependency {function}
    }),
    new HtmlWebpackPlugin({
      title: "webpack 脚手架2", //  生成html的标题
      filename: "main.html", //  生成html的文件名，默认是index.html，可以添加路径比如：src/index.html
      template: "./public/index.html", // 模版的路径
      inject: "body",
      favicon: "./public/react-logo.png", // html的favicon路径
      chunks: ["main"],
    }),
  ],
};
