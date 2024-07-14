import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles, SandpackOptions} from '@codesandbox/sandpack-react';
import {Sandpack} from '@codesandbox/sandpack-react';
import {githubLight} from '@codesandbox/sandpack-themes';

import {indexCode} from './indexCode';

export type Props = {
    files?: SandpackFiles;
    template?: 'react' | 'react-ts' | 'nextjs' | 'vite-react' | 'vite-react-ts';
    options?: SandpackOptions;
};

export const CodeEditor: FC<Props> = ({
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
        <Sandpack
            customSetup={{
                dependencies: {
                    'koval-ui': 'latest',
                },
            }}
            files={files}
            theme={githubLight}
            template={template}
            options={options}
        />
    );
};
