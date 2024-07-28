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
};

export default config;
