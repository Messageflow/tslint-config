module.exports = {
  extends: [
    'tslint-config-airbnb',
    'tslint-immutable',
    'tslint:recommended',
  ],
  rules: {
    align: [true, 'members', 'parameters', 'statements'],
    'array-type': false,
    'import-name': false,
    'interface-name': [true, 'never-prefix'],
    'no-console': false,
    'no-debugger': false,
    'no-duplicate-imports': false,
    'no-object-literal-type-assertion': false,
    'object-literal-sort-keys': false,
    'ordered-imports': [
      true,
      {
        'grouped-imports': false,
        'import-sources-order': 'case-insensitive',
        'module-source-path': 'full',
        'named-imports-order': 'case-insensitive',
      }
    ],
    'strict-boolean-expressions': false,
    'trailing-comma': [
      true,
      {
        multiline: {
          arrays: 'always',
          functions: 'never',
          objects: 'always',
          typeLiterals: 'ignore'
        },
        esSpecCompliant: true,
      },
    ],
  },
};
