// eslint-disable-next-line no-undef,@typescript-eslint/no-require-imports
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

// eslint-disable-next-line no-undef
module.exports = withNextra();
