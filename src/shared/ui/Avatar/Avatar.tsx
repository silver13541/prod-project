import { CSSProperties, PropsWithChildren, useMemo } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string
    alt?: string
    size?: number
}

export const Avatar = (props: PropsWithChildren<AvatarProps>) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
