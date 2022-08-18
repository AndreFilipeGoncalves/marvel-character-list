module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly'
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
    indent: 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'import/no-duplicates': 'off',
    'no-useless-escape': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
