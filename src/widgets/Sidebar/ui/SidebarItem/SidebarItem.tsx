import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import { SidebarItemType } from '../../model/items';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const {
        path,
        text,
        Icon,
        authOnly,
    } = item;

    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.SECONDARY}
            className={cls.item}
        >
            <Icon className={cls.icon} />
            <span className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
                {t(text)}
            </span>
        </AppLink>
    );
});
