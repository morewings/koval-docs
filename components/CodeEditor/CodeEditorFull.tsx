import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles, SandpackOptions} from '@codesandbox/sandpack-react';
import {
    SandpackProvider,
    SandpackLayout,
    SandpackFileExplorer,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackConsole,
} from '@codesandbox/sandpack-react';
import {githubLight} from '@codesandbox/sandpack-themes';

import {appCode, stylesCode} from './indexCode';

export type Props = {
    files?: SandpackFiles;
    template?: 'react' | 'react-ts' | 'nextjs' | 'vite-react' | 'vite-react-ts';
    options?: SandpackOptions;
};

export const CodeEditorFull: FC<Props> = ({
    files: filesProp = {},
    template = 'nextjs' as const,
    options: optionsProp = {},
}) => {
    const files = useMemo<SandpackFiles>(
        () => ({
            'pages/_app.js': {
                code: appCode,
                readOnly: true,
                hidden: true,
            },
            'styles.css': {
                code: stylesCode,
                readOnly: true,
                hidden: true,
            },
            ...filesProp,
        }),
        [filesProp]
    );

    // TODO: check if bundler works
    const options = useMemo(() => ({autorun: false, ...optionsProp}), [optionsProp]);

    return (
        <SandpackProvider
            files={files}
            customSetup={{
                dependencies: {
                    'koval-ui': 'latest',
                },
            }}
            theme={githubLight}
            template={template}
            options={options}>
            <SandpackLayout>
                <SandpackFileExplorer />
                <SandpackCodeEditor closableTabs showTabs />
                <SandpackPreview />
            </SandpackLayout>
            <SandpackConsole />
        </SandpackProvider>
    );
};
