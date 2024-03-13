/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['simple-import-sort'],
  rules: {
    curly: ['error', 'all'],

    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    'simple-import-sort/imports': [
      'error',
      { groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']] }
    ],
    'simple-import-sort/exports': 'error'
  }
}
