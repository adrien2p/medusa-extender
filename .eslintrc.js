module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.lint.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', "prettier"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
      '.eslintrc.js',
      '**/.prettier*',
      '**/.version*',
      '**/*.md',
      '**/*.js'
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  },
};
