import {FC} from 'react';
import classes from './Iframe.module.css';

export type Props = {
    src: string;
    width: number;
    height: number;
}

export const Iframe: FC<Props> = ({src, height, width}) => {
    return <iframe className={classes.iframe} src={src} width={width} height={height} />
}
