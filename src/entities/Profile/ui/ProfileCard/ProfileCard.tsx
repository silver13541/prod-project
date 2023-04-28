import type { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileData } from '../../model/selectors/getProfileData';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: PropsWithChildren<ProfileCardProps>) => {
    const { className } = props;

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('profil')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('redaktirovat')}
                </Button>
            </div>
            <div className={cls.data}>
                <Text text={data?.first} title={t('vashe-imya')} className={cls.text} />
                <Text text={data?.lastname} title={t('vasha-familiya')} className={cls.text} />
            </div>
        </div>
    );
};
