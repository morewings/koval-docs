import type {ComponentProps, FC} from 'react';
import {Fragment} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {GoogleAnalytics} from '@next/third-parties/google';

export default function MyApp({Component, pageProps}: {Component: FC; pageProps: unknown}) {
    return (
        <Fragment>
            <Component {...(pageProps as ComponentProps<typeof Component>)} />
            <GoogleAnalytics gaId="G-EGZMC25BG3" />
            <Analytics />
        </Fragment>
    );
}
