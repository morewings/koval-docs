import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles} from '@codesandbox/sandpack-react';
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview,
} from '@codesandbox/sandpack-react';

import {appCode, stylesCode} from './indexCode';
import classes from './Editor.module.css';
import type {Props} from './types';

export const CodeEditorBig: FC<Props & {previewHeight: number}> = ({
    files: filesProp = {},
    template = 'nextjs' as const,
    options: optionsProp = {},
    dependencies = {},
    previewHeight,
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
            <SandpackProvider
                files={files}
                customSetup={{
                    dependencies: {
                        ...dependencies,
                        'koval-ui': 'latest',
                    },
                }}
                theme="auto"
                template={template}
                options={options}>
                <SandpackCodeEditor className={classes.editor} showLineNumbers />
                <SandpackLayout>
                    <SandpackPreview showNavigator style={{height: previewHeight}} />
                </SandpackLayout>
            </SandpackProvider>
        </div>
    );
};
