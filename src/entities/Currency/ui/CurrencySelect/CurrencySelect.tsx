import { PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency
    onChange?: (value: Currency) => void
}

const options = Object.entries(Currency).map(([key, value]) => ({
    value: key,
    content: value,
}));

export const CurrencySelect = (props: PropsWithChildren<CurrencySelectProps>) => {
    const {
        className,
        value,
        onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('ukazhite-valyutu')}
            value={value}
            onChange={onChangeHandler}
            options={options}
        />
    );
};
