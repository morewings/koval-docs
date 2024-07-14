import * as mdx from 'eslint-plugin-mdx';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import eslintTS from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import configReactRecommended from 'eslint-plugin-react/configs/recommended.js';
import configReactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import {fixupPluginRules} from '@eslint/compat';

export default [
    eslint.configs.recommended,
    ...eslintTS.configs.recommended,
    configReactRecommended,
    configReactJSXRuntime,
    configPrettierRecommended,
    {
        files: ['**/*.{js,ts,tsx,cjs,mjs}'],
        ignores: ['**/*.mdx'],
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {modules: true},
                ecmaVersion: 'latest',
                project: './tsconfig.json',
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            import: pluginImport,
            prettier: pluginPrettier,
            '@typescript-eslint': pluginTypescript,
            'react-hooks': fixupPluginRules(pluginReactHooks),
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            /**
             * Allow empty arrow functions `() => {}`, while keeping other empty functions restricted
             * @see https://eslint.org/docs/latest/rules/no-empty-function#allow-arrowfunctions
             */
            '@typescript-eslint/no-empty-function': ['error', {allow: ['arrowFunctions']}],
            '@typescript-eslint/ban-ts-comment': 1,
            'no-const-assign': 'error',
            /** Restrict imports from devDependencies since they are not included in library build. peerDependencies are ok */
            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                    peerDependencies: true,
                },
            ],
            /**
             * Enforce import order with empty lines between import group
             * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
             */
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                        },
                    ],
                    'newlines-between': 'always',
                },
            ],
            /**
             * Disallow combined module and type imports like this `import React, {FC} from 'react'`.
             * Eslint will try to split into type and module imports instead
             * @see https://typescript-eslint.io/rules/consistent-type-imports/
             */
            '@typescript-eslint/consistent-type-imports': 'error',
            'import/no-cycle': 'error',
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    jsxSingleQuote: false,
                    trailingComma: 'es5',
                    bracketSpacing: false,
                    jsxBracketSameLine: true,
                    arrowParens: 'avoid',
                },
            ],
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            /**
             * Allow unused variables with names stating with '_'
             * @see https://eslint.org/docs/latest/rules/no-unused-vars
             * @see https://typescript-eslint.io/rules/no-unused-vars/
             */
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                    args: 'after-used',
                },
            ],
        },
    },
    {
        plugins: {
            prettier: pluginPrettier,
        },
        ...mdx.flat,
        // optional, if you want to lint code blocks at the same
        processor: mdx.createRemarkProcessor({
            lintCodeBlocks: true,
            // optional, if you want to disable language mapper, set it to `false`
            // if you want to override the default language mapper inside, you can provide your own
            languageMapper: {},
        }),
        rules: {
            ...mdx.flatCodeBlocks.rules,
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    jsxSingleQuote: false,
                    trailingComma: 'es5',
                    bracketSpacing: false,
                    jsxBracketSameLine: true,
                    arrowParens: 'avoid',
                },
            ],
        },
    },
];
