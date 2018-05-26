module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/prettier',
    'plugin:vue/essential',
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "semi": true,

    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
