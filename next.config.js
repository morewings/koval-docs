// eslint-disable-next-line no-undef,@typescript-eslint/no-require-imports
const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    transpilePackages: ['@piwikpro/next-piwik-pro'],
});

// eslint-disable-next-line no-undef
module.exports = withNextra();
