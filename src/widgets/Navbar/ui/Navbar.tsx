/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from 'shared/hooks';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const {
        isOpen,
        open,
        close,
    } = useToggle(false);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                    className={cls.links}
                >
                    {t('logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={open}
                className={cls.links}
            >
                {t('Войти')}

            </Button>
            {isOpen && (
                <LoginModal
                    isOpen={isOpen}
                    onClose={close}
                />
            )}
        </div>
    );
};
