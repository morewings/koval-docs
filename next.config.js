// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
});

// eslint-disable-next-line no-undef
module.exports = withNextra();
