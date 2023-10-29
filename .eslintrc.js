module.exports = {
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  // 继承 Eslint 规则
  extends: [
    "eslint:recommended", 
    "plugin:node/recommended", // eslint-plugin-node
    "plugin:react/recommended"
  ],
  parserOptions: {
    // 解析选项
    ecmaVersion: 10, // ES 语法版本
    sourceType: "module", // ES 模块化
    ecmaFeatures: {
      // ES 其他特性
      jsx: true, // 如果是 React 项目，就需要开启 jsx 语法
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "html", // eslint-plugin-html
    "node", // eslint-plugin-node
    "promise", // eslint-plugin-promise
    "@typescript-eslint",  // @typescript-eslint/eslint-plugin
    "react" // eslint-plugin-react 的简写
  ],
  // 禁用 eslint-plugin-html  插件
  "settings": {
    "html/html-extensions": [".html", ".vue"]
  },
  rules: {
    "no-var": "off",
    "no-console": "off",

    // 及下面几个配置为  eslint-plugin-import 
    // "import/no-unresolved": [2, { "commonjs": true, "amd": true }], 
    // "import/named": 2,
    // "import/namespace": 2,
    // "import/default": 2,
    // "import/export": 1, //  `"off"` 或 `0`  `"warn"` 或 `1`   `"error"` 或 `2`

    // 及下面几个配置为  eslint-plugin-promise 
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": "warn",
    "promise/no-return-in-finally": "warn",

    // 及下面几个配置为  eslint-plugin-standard 
    'standard/object-curly-even-spacing': [2, "either"],
    'standard/array-bracket-even-spacing': [2, "either"],
    'standard/computed-property-even-spacing': [2, "even"],
    'standard/no-callback-literal': [2, ["cb", "callback"]],

    // 及下面几个配置为  @typescript-eslint/eslint-plugin
    "@typescript-eslint/no-unused-vars": "error",

    // eslint-plugin-react
    'react/display-name': 2,
    'react/jsx-key': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-children-prop': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-render-return-value': 2,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 0,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,

  },
};
