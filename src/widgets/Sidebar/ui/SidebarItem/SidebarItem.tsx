import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import { SidebarItemType } from '../../model/items';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { path, text, Icon } = item;

    const { t } = useTranslation();

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
