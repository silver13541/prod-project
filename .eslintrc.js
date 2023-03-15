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
        'react-hooks',

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
                    '**/*{.,_}{test,spec,stories}.{ts,tsx}',
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
        'react/jsx-props-no-spreading': ['warn', {
            html: 'enforce',
            custom: 'ignore',
            explicitSpread: 'ignore',
        }],
        'react/function-component-definition': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        indent: [2, 4],
        quotes: [1, 'single'],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-param-reassign': 0,
        'react/jsx-no-useless-fragment': 0,
        'linebreak-style': 0,
        'class-methods-use-this': 0,
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            files: ['src/**/*Slice.ts'],
            rules: { 'no-param-reassign': ['error', { props: false }] },
        },
    ],
};
