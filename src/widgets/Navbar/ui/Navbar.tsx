/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { useTranslation } from 'react-i18next';
import { useToggle } from 'shared/hooks';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const {
        isOpen,
        open,
        close,
    } = useToggle(false);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={open}
                className={cls.links}
            >
                {t('Войти')}

            </Button>
            <LoginModal
                isOpen={isOpen}
                onClose={close}
            />
        </div>
    );
};
