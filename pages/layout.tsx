import type {ReactNode} from 'react';
import PiwikProProvider from '@piwikpro/next-piwik-pro';

type Props = {
    readonly children: ReactNode;
};

export default function RootLayout({children}: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <PiwikProProvider
                    containerId="ef6913b4-7d2d-4c45-b644-a940009072fe"
                    containerUrl="https://koval.piwik.pro">
                    {children}
                </PiwikProProvider>
            </body>
        </html>
    );
}
