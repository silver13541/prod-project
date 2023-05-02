import { PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country
    onChange?: (value: Country) => void
}

const options = Object.entries(Country).map(([key, value]) => ({
    value: key,
    content: value,
}));

export const CountrySelect = (props: PropsWithChildren<CountrySelectProps>) => {
    const {
        className,
        value,
        onChange,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('ukazhite-stranu')}
            value={value}
            onChange={onChangeHandler}
            options={options}
        />
    );
};
