import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
                    {t('Главная')}
                </AppLink>
                <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    );
};
