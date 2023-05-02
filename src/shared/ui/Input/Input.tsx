import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    PropsWithChildren,
} from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
    className?: string;
    value?: string | number,
    label?: string,
    onChange?: (value: string) => void
}

export const Input = memo((props: PropsWithChildren<InputProps>) => {
    const {
        className,
        value,
        label,
        onChange,
        type = 'text',
        ...rest
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...rest}
            />
        </div>
    );
});
