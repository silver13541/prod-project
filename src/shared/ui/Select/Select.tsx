import { ChangeEvent, PropsWithChildren, useMemo } from 'react';

import { classNames, Mods } from 'shared/lib/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string
}

interface SelectProps {
    className?: string;
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
}

export const Select = (props: PropsWithChildren<SelectProps>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option value={opt.value} key={opt.value}>{opt.content}</option>
    )), [options]);

    const mods: Mods = {};

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
};
