module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'no-void': 0,
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
}
