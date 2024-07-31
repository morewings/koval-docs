import type {FC} from 'react';
import {Fragment} from 'react';
import {Analytics} from '@vercel/analytics/react';
import {GoogleTagManager} from '@next/third-parties/google';

export default function MyApp<TProps>({
    Component,
    pageProps,
}: {
    Component: FC<TProps>;
    pageProps: TProps;
}) {
    return (
        <Fragment>
            <GoogleTagManager gtmId="G-EGZMC25BG3" />
            <Component {...pageProps} />
            <Analytics />
        </Fragment>
    );
}
