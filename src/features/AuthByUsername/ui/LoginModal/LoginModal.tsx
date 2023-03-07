import type { PropsWithChildren } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';

import { LoginForm } from '../LoginForm';

interface LoginModalProps {
 className?: string;
 isOpen: boolean;
 onClose: () => void
}

export const LoginModal = (props: PropsWithChildren<LoginModalProps>) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
        >
            <LoginForm />
        </Modal>
    );
};
