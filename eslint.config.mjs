import * as mdx from "eslint-plugin-mdx";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    configPrettierRecommended,
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
            "prettier/prettier": [
                "error",
                {
                    semi: true,
                    singleQuote: true,
                    jsxSingleQuote: false,
                    trailingComma: "es5",
                    bracketSpacing: false,
                    jsxBracketSameLine: true,
                    arrowParens: "avoid",
                },
            ],
        },
    },
    {
        plugins: {
            prettier: pluginPrettier,
        },
        ...mdx.flatCodeBlocks,
        rules: {
            ...mdx.flatCodeBlocks.rules,
            "prettier/prettier": [
                "error",
                {
                    semi: true,
                    singleQuote: true,
                    jsxSingleQuote: false,
                    trailingComma: "es5",
                    bracketSpacing: false,
                    jsxBracketSameLine: true,
                    arrowParens: "avoid",
                },
            ],
        },
    },
];
