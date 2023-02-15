module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': [
            'warn',
            {
                devDependencies: [
                    'test.{ts,tsx}',
                    'test-*.{ts,tsx}',
                    '**/*{.,_}{test,spec}.{ts,tsx}',
                    '**/jest.config.ts',
                    '**/setupTests.ts',
                ],
                optionalDependencies: false,
            },
        ],
        'no-undef': 'warn',
        'no-unused-vars': 'off',
        'no-underscore-dangle': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
        ],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        indent: [2, 4],
        quotes: [1, 'single'],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
