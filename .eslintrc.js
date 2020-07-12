module.exports = {
  env: {
    jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  ignorePatterns: ['dist/**/*', 'docs/**/*'], // ignore eslint on build directory
  rules: {
    'comma-dangle': 0,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
    }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
};
