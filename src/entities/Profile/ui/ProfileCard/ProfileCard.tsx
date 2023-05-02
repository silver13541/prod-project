import type { PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { Input } from 'shared/ui/Input';
import { Avatar } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/Profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    error?: string;
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeCurrency?: (value?: Currency) => void
    onChangeCountry?: (value?: Country) => void

}

export const ProfileCard = (props: PropsWithChildren<ProfileCardProps>) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [className])}>
            <div>
                {data?.avatar
                    && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data.avatar} />
                        </div>
                    )}
                <Input
                    value={data?.first}
                    label={t('vashe-imya')}
                    className={cls.text}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.lastname}
                    label={t('vasha-familiya')}
                    className={cls.text}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                />
                <Input
                    value={data?.age}
                    label={t('vasha-familiya')}
                    className={cls.text}
                    onChange={onChangeAge}
                    type="number"
                    readOnly={readonly}
                />
                <Input
                    value={data?.city}
                    label={t('vasha-familiya')}
                    className={cls.text}
                    onChange={onChangeCity}
                    readOnly={readonly}
                />
                <Input
                    value={data?.username}
                    label={t('imya-polzovatelya')}
                    className={cls.text}
                    onChange={onChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    value={data?.avatar}
                    label={t('avatar')}
                    className={cls.text}
                    onChange={onChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} />
                <CountrySelect value={data?.country} onChange={onChangeCountry} />
            </div>
        </div>
    );
};
