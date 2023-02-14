import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
 className?: string;
}

export const PageError = (props: PropsWithChildren<PageErrorProps>) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = () => window.location.reload();

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
