module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue-libs/recommended",
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'import/order': 'off',
    'arrow-parens': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always']
  }
};
