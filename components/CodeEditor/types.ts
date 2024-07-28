import type {SandpackFiles, SandpackOptions} from '@codesandbox/sandpack-react';

export type Props = {
    files?: SandpackFiles;
    template?: 'react' | 'react-ts' | 'nextjs' | 'vite-react' | 'vite-react-ts';
    options?: SandpackOptions;
    dependencies?: Record<string, string>;
};
