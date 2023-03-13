import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize
  square?: boolean;
  disabled?: boolean
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        theme,
        square = false,
        size = ButtonSize.M,
        children,
        className,
        disabled,
        ...rest
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };

    const additional = [className, cls[theme], cls[size]];

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, additional)}
            {...rest}
        >
            {children}
        </button>
    );
};
