module.exports = {
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  parserOptions: {
    // 解析选项
    ecmaVersion: 10, // ES 语法版本
    sourceType: "module", // ES 模块化
    ecmaFeatures: {
      // ES 其他特性
      jsx: true, // 如果是 React 项目，就需要开启 jsx 语法
    },
  },
  "plugins": ["html"],
  // 禁用 eslint-plugin-html  插件
  "settings": {
    "html/html-extensions": [".html", ".vue"]
  },
  rules: {
    "no-var": "off",
    "no-console": "off",
    // "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
    // "import/named": 2,
    // "import/namespace": 2,
    // "import/default": 2,
    // "import/export": 1, //  `"off"` 或 `0`  `"warn"` 或 `1`   `"error"` 或 `2`
  },
};
