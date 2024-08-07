import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles} from '@codesandbox/sandpack-react';
import {Sandpack} from '@codesandbox/sandpack-react';
// import {githubLight} from '@codesandbox/sandpack-themes';

import classes from '@/components/CodeEditor/Editor.module.css';

import type {Props} from './types';
import {appCode, stylesCode} from './indexCode';

export const CodeEditor: FC<Props> = ({
    files: filesProp = {},
    template = 'nextjs' as const,
    options: optionsProp = {},
    dependencies = {},
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
        <div className={classes.wrapper}>
            <Sandpack
                customSetup={{
                    dependencies: {
                        'koval-ui': 'latest',
                        ...dependencies,
                    },
                }}
                files={files}
                theme="auto"
                template={template}
                options={options}
            />
        </div>
    );
};
