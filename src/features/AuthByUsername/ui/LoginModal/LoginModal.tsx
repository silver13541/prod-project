import type { PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';

import { LoginForm } from '../LoginForm';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: () => void
}

export const LoginModal = (props: PropsWithChildren<LoginModalProps>) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};
