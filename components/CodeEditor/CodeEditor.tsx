import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles, SandpackOptions} from '@codesandbox/sandpack-react';
import {Sandpack} from '@codesandbox/sandpack-react';
import {githubLight} from '@codesandbox/sandpack-themes';

import {appCode, stylesCode} from './indexCode';

export type Props = {
    files?: SandpackFiles;
    template?: 'react' | 'react-ts' | 'nextjs' | 'vite-react' | 'vite-react-ts';
    options?: SandpackOptions;
};

export const CodeEditor: FC<Props> = ({
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
