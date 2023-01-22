module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks', 'react'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['node_modules/', '*.js', '*.mjs'],
  settings: {
    /* 기존 ESLint parser가 아닌 다른 parser를 사용할때 설정 */
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },

    /* 디폴트인 Node가 아닌 다른 모듈을 resolve 해야할때 설정 */
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/function-component-definition': [0],
    'import/extensions': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/typedef': [
      'error',
      {
        // "arrayDestructuring": true,
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: true,
        // "objectDestructuring": true,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        // "variableDeclaration": true
        variableDeclaration: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-interface': 0,

    '@typescript-eslint/no-use-before-define': 'off',

    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-no-bind': 1,
    'react/no-array-index-key': 1,
    'react/button-has-type': 1,
    'react/state-in-constructor': 0,
    'react/no-did-update-set-state': 0,
    'react/no-did-mount-set-state': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
    'jsx-quotes': ['error', 'prefer-single'],

    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,

    'import/extensions': 2,
    'no-underscore-dangle': 'off',

    curly: 'error',
    'consistent-return': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'max-classes-per-file': 0,
    'no-shadow': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-alert': 0,
    'no-undef': 0,
    'no-nested-ternary': 0,

    'prettier/prettier': 'error',

    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useFocusUpdateEffect|useUpdateEffect)',
      },
    ],

    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],

    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal'],
        pathGroups: [
          {
            pattern: 'react+(|-native)',
            group: 'external',
            position: 'before',
          },
          { pattern: 'generated/**', group: 'internal', position: 'after' },
          { pattern: 'assets/**', group: 'internal', position: 'after' },
          { pattern: 'pages', group: 'internal', position: 'after' },
          { pattern: 'pages/**', group: 'internal', position: 'after' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
};
