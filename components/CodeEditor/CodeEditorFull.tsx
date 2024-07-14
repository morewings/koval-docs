import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles, SandpackOptions} from '@codesandbox/sandpack-react';
import {
    SandpackProvider,
    SandpackLayout,
    SandpackFileExplorer,
    SandpackCodeEditor,
    SandpackPreview,
} from '@codesandbox/sandpack-react';
import {githubLight} from '@codesandbox/sandpack-themes';

import {indexCode} from './indexCode';

export type Props = {
    files?: SandpackFiles;
    template?: 'react' | 'react-ts' | 'nextjs' | 'vite-react' | 'vite-react-ts';
    options?: SandpackOptions;
};

export const CodeEditorFull: FC<Props> = ({
    files: filesProp = {},
    template = 'react-ts' as const,
    options = {},
}) => {
    const files = useMemo<SandpackFiles>(
        () => ({
            'index.tsx': {
                code: indexCode,
                readOnly: true,
                hidden: true,
            },
            ...filesProp,
        }),
        [filesProp]
    );
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
        </SandpackProvider>
    );
};
