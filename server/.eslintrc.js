module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // Allows the use of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: ['plugin:@typescript-eslint/recommended'], // Uses the linting rules from @typescript-eslint/eslint-plugin
  env: {
    node: true, // Enable Node.js global variables
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.js', '.json'],
      },
    },
  },
  overrides: [
    {
      files: ['dist', '**/*.js'],
      rules: {
        'no-console': 'off',
        'import/no-anonymous-default-export': 'off',
        'no-void': 0,
      },
    },
  ],
}
