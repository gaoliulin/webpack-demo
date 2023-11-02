# webpack 学习使用，搭建脚手架

## 文档1： webpack 一基础配置： 学习使用，搭建脚手架  https://juejin.cn/post/7264503091122569231

## 文档2： webpack 二基础配置：配置loader  https://juejin.cn/post/7267107941651496960

## 文档3： webpack 三基础配置：配置plugins  https://juejin.cn/post/7293125177322897448

## 文档4： webpack5 配置babel  https://juejin.cn/post/7293738741398585378

## 文档5： webpack5 配置 eslint  https://juejin.cn/post/7294954501576065039

## 一：初始配置，项目目录

- 1.1 git init 初始化
- 1.2 下载安装 webpack， webpack-cli

```js
npm install  webpack
npm install  webpack-cli
```



- 1.3 新增index.html 和新增文件夹src，src文件夹里新建文件index.js
- 1.4 打包生成包文件（bundle）。  

```js
执行 ` npx webpack ` 建了 /dist/main.js 文件  
( 或者package.json建scripts 里webpack命令 `"webpack": "webpack"` )
```

- 1.5 如果我们要稍微调整下目录结构，比如将根目录下的index.html移到dist文件夹中，就需要将再调整一下index.html中对main.js路径变化，并重新使用npx webpack 或者 `npm run webpack` 打包

## 一般我们会把打包后的静态资源放在服务器即可

## 二：  **使用配置文件 webpack.config.js**

以上是一个很简单的项目，但是现实却是大多数项目需要很复杂的设置，那我们就把这些复杂的配置专门搞个文件来写吧，先来创建这个文件吧

 - 2.1 在项目根路径下创建文件 webpack.config.js

webpack.config.js代码：

```js
// 引入路径path模块
const path = require('path');
 
module.exports = {
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出文件的文件名
        filename: 'main.js',
        // 输出文件的路径，__dirname 总是指向被执行js文件的绝对路径
        path: path.resolve(__dirname, 'dist')
    }
};

```

上面output属性表示目标输出是 根路径下的dist文件下的main.js

你可以把之前例子中的main.js删除，然后在终端执行命令：

`npx webpack --config webpack.config.js` 或者 `npm run webpack-config` 

删除main.js后你再去执行npx webpack --config ，会发现有重新根据webpack.config.js配置文件生成新的目标输出文件main.js

一般默认输出到dist文件，现在有了配置文件，通过当然可以通过配置文件改为其他出口啦

## 三 配置 plugin:

 - 3.1 在上面 需要我们手动建 html 页面，然后引入静态资源。如果多spa 项目想下是不是很麻烦？那么我们可以**使用HtmlWebpackPlugin插件，它能自动生成一个html文件，并帮你在body中使用 `script` 标签引入所有 webpack 生成的 bundle**。

```js
// 安装
npm install html-webpack-plugin -D

然后再 webpack.config.js 
// 引入 HtmlWebpackPlugin 模块
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 并配置
plugins:[
    new HtmlWebpackPlugin(),
]
且是可以传参数的，例如模板地址 **`template`** ， **`filename`**， **`title`**，详细可以参考： https://www.npmjs.com/package/html-webpack-plugin  
或者： https://blog.csdn.net/qq_40305844/article/details/128204599

// 例如：
plugins:[
    new HtmlWebpackPlugin({
        title： 'title',
        filename:'index.html',
        template:'./public/index.html'
    }),
]

```

再次执行 ` npm run webpack-config `

- 3.2 多spa 项目，一般打包资源文件会带哈希， 每次打包都会新增资源文件， 因此需要把老的资源文件给删除。打包输出请先使用 **clean-webpack-plugin** 插件清空目录

```js
// 安装
npm install clean-webpack-plugin -D



```
