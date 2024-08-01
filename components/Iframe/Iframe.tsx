import type {FC} from 'react';
import {useMemo} from 'react';
import {useLocalTheme} from 'css-vars-hook';

import classes from './Iframe.module.css';

export type Props = {
    src: string;
    width: number;
    height: number;
    caption?: string;
};

const getPercentage = (width: number, height: number) => (height / width) * 100;

export const Iframe: FC<Props> = ({src, height, width, caption}) => {
    const {LocalRoot} = useLocalTheme();
    const theme = useMemo(() => {
        return {size: `${getPercentage(width, height)}%`};
    }, [width, height]);
    return (
        <LocalRoot theme={theme}>
            <div className={classes.wrapper}>
                <iframe
                    className={classes.iframe}
                    src={src}
                    width={width}
                    height={height}
                    loading="lazy"
                />
            </div>
            {caption && <div className={classes.caption}>{caption}</div>}
        </LocalRoot>
    );
};
