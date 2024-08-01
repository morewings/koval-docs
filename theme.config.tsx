import type {DocsThemeConfig} from 'nextra-theme-docs';

import {Logo} from '@/components/Logo';
import classes from '@/components/Logo/Logo.module.css';

const config: DocsThemeConfig = {
    logo: (
        <div className={classes.wrapper}>
            <Logo />
            <div className={classes.text}>Koval UI: Developer Guide</div>
        </div>
    ),
    project: {
        link: 'https://github.com/morewings/koval-ui',
    },
    docsRepositoryBase: 'https://github.com/morewings/koval-docs/blob/master',
    footer: {
        text: 'React components collection: Koval UI',
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Koval UI',
        };
    },
    head: (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#61483a" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffdea6" />
            <meta property="og:image" content="/social.png" />
            <meta property="og:site_name" content="Koval UI: Developer Documentation" />
        </>
    ),
};

export default config;
