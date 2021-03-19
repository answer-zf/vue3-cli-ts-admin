module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off', // 忽略 函数圆括号之前需要有一个空格的 格式化限制
    '@typescript-eslint/member-delimiter-style': 'off', // ts 接口省略 ；做分隔
    '@typescript-eslint/no-explicit-any': ['off'], //关闭any类型警告
    eqeqeq: ['off'], // 允许使用 == 做判断
    'no-duplicate-imports': 0, // 忽略多次引入同一模块导致的错误
    'comma-dangle': 0, // 忽略对象、数组 以逗号结尾
    'no-duplicate-imports': 0, // 忽略 重复引用的错误
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/class-name-casing': 0,
    'import/no-duplicates': 0,
    '@typescript-eslint/no-use-before-define': 0,
    indent: ['off', 2],
    'dot-notation': 0, // 对象 允许使用 []
    'no-useless-escape': 0,
    'prefer-promise-reject-errors': 0,
  },
}
