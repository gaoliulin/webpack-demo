# webpack 学习使用，搭建脚手架

## 一：初始配置，项目目录

- 1. git init 初始化
- 2. 下载安装 webpack， webpack-cli

```js
npm install  webpack
npm install  webpack-cli
```

- 3. 新增index.html 和新增文件夹src，src文件夹里新建文件index.js
- 4. 打包生成包文件（bundle）。  

```js
执行 ` npx webpack ` 建了 /dist/main.js 文件  
( 或者package.json建scripts 里webpack命令 `"webpack": "webpack"` )
```

- 5. 如果我们要稍微调整下目录结构，比如将根目录下的index.html移到dist文件夹中，就需要将再调整一下index.html中对main.js路径变化，并重新使用npx webpack 或者 `npm run webpack` 打包

### 一般我们会把打包后的静态资源放在服务器即可

## 二：  **使用配置文件 webpack.config.js**
以上是一个很简单的项目，但是现实却是大多数项目需要很复杂的设置，那我们就把这些复杂的配置专门搞个文件来写吧，先来创建这个文件吧

在项目根路径下创建文件 webpack.config.js
你可以把之前例子中的main.js删除，然后在终端执行命令：

`npx webpack --config webpack.config.js` 或者 `npm run webpack-config` （命令快捷方式）




