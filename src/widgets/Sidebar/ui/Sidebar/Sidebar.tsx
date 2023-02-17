import { PropsWithChildren, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: PropsWithChildren<SidebarProps>) => {
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => setCollapsed((prev) => !prev);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={toggle}
            >
                {t('Переключение')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
