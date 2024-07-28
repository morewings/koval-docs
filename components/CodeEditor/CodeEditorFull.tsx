import type {FC} from 'react';
import {useMemo} from 'react';
import type {SandpackFiles} from '@codesandbox/sandpack-react';
import {
    SandpackProvider,
    SandpackLayout,
    SandpackFileExplorer,
    SandpackCodeEditor,
    SandpackPreview,
    SandpackConsole,
} from '@codesandbox/sandpack-react';
// import {githubLight} from '@codesandbox/sandpack-themes';

import {appCode, stylesCode} from './indexCode';
import type {Props} from './types';
import classes from './Editor.module.css';

export const CodeEditorFull: FC<Props> = ({
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
            <SandpackProvider
                className={classes.wrapper}
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
                <SandpackLayout>
                    <SandpackFileExplorer />
                    <SandpackCodeEditor closableTabs showTabs />
                    <SandpackPreview />
                </SandpackLayout>
                <SandpackConsole />
            </SandpackProvider>
        </div>
    );
};
