module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/typescript',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'import/order': 'off',
    'arrow-parens': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'no-unused-vars-experimental': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always']
  }
};
