module.exports = {
  parser: 'babel-eslint',

  ecmaFeatures: {},

  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],

  env: {
    browser: true,
    chai: true,
    es6: true,
    mocha: true,
    node: true
  },

  rules: {
    'block-spacing': [2, 'always'],
    'comma-dangle': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eqeqeq': 2,
    'indent': [2, 2],
    'object-curly-spacing': [2, 'always'],
    'no-console': 1,
    'no-debugger': 1,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-shadow': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'never']
  },

  plugins: ['react'],

  globals: {
    React: true,
    sinon: true,
    shallow: true,
    mount: true
  }
}
