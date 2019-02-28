module.exports = {
  extends: "airbnb-base",
  env: {
    mocha: true,
  },
  rules: {
    'linebreak-style': ["off", "windows"],
    'no-unused-vars': 0,
    'func-names': 0,
    'consistent-return': 0,
    'no-irregular-whitespace':0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};