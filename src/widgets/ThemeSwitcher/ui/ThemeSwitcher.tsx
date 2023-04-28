import { useTheme } from 'app/providers/ThemeProvider';
import { memo, PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';

import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: PropsWithChildren<ThemeSwitcherProps>) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            <ThemeIcon className={cls[theme]} />
        </Button>
    );
});
