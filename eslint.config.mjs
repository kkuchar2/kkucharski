import nextPlugin from '@next/eslint-plugin-next';
import hooksPlugin from 'eslint-plugin-react-hooks';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import functional from 'eslint-plugin-functional';
import imprt from 'eslint-plugin-import';
import tailwindcss from "eslint-plugin-tailwindcss";

const myRules = {
    'object-curly-spacing': ["error", "always"],
    'quotes': [2, "single", { "avoidEscape": true }]
};

export default [
    {
        rules: myRules,
    },
    {
        plugins: {
            'react-hooks': hooksPlugin,
        },
        rules: hooksPlugin.configs.recommended.rules,
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            tailwindcss,
        },
        rules: {
            'tailwindcss/classnames-order': 'error',
            'tailwindcss/no-custom-classname': 'off'
        }
    },
    {
        plugins: {
            '@next/next': nextPlugin,
        },
        rules: {
            // ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
        },
    },
    {
        ignores: ['.next/*'],
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {modules: true},
                ecmaVersion: 'latest',
                project: './tsconfig.json',
            },
        },
        plugins: {
            functional,
            import: imprt,
            '@typescript-eslint': ts,
            ts,
        },
        rules: {
            ...ts.configs['eslint-recommended'].rules,
            ...ts.configs['recommended'].rules,
            ...myRules,
            'ts/return-await': 2,
        },
    },
];