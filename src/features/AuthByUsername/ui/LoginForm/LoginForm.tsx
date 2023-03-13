import { memo, PropsWithChildren, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';

import { loginByUsername } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
 className?: string;
}

export const LoginForm = memo((props: PropsWithChildren<LoginFormProps>) => {
    const { className } = props;

    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);
    const { t } = useTranslation();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onClickLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('auth.form_title')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                value={username}
                onChange={onChangeUsername}
                autoFocus
                placeholder={t('vvedite-username')}
                className={cls.input}
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder={t('vvedite-parol')}
                className={cls.input}
            />
            <Button
                onClick={onClickLogin}
                className={cls.btn}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
