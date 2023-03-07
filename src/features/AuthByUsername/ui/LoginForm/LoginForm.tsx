import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = (props: PropsWithChildren<LoginFormProps>) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t('vvedite-username')} className={cls.input} />
            <Input placeholder={t('vvedite-parol')} className={cls.input} />
            <Button className={cls.btn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
