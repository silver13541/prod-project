import type { PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
 className?: string;
}

export const Loader = (props: PropsWithChildren<LoaderProps>) => {
    const { className } = props;

    return (
        <div className={classNames(cls['lds-ring'], {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
