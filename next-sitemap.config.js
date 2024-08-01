/** @type {import('next-sitemap').IConfig} */
// eslint-disable-next-line no-undef
module.exports = {
    // eslint-disable-next-line no-undef
    siteUrl: process.env.SITE_URL || 'https://koval.support',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
};
