module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 0表示不处理 1表示警告 2表示错误并退出
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-dangle': 0,
    "semi": 0,
    "quotes": [0, "double"],
    // 禁止给参数重新赋值
    'no-param-reassign': 0,
    // 换行风格检查
    "linebreak-style": [0, "windows"],
    "global-require": 0,
    "max-len" : ["error", {code : 200}],
    "no-underscore-dangle": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
