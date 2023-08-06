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