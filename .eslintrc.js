module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-no-undef': 'error',
    'no-console': 0,
    'no-underscore-dangle': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-magic-numbers': ['error', { ignore: ['1n'], ignoreDefaultValues: true, ignoreArrayIndexes: true }]
  }
};
