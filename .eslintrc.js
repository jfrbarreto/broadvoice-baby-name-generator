module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'promise'],
  rules: {
    indent: 'off',
    semi: 'off',
    camelcase: 'off',
    'multiline-ternary': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off'
  },
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    JSX: true
  },
  ignorePatterns: ['*.json', 'node_modules', 'build']
};
