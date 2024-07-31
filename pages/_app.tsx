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
            <Component {...pageProps} />
            <GoogleTagManager gtmId="GTM-KNHK53R3" />
            <Analytics />
        </Fragment>
    );
}
