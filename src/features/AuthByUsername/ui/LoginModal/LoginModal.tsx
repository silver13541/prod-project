import { PropsWithChildren, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';

import { LoginFormLazy } from '../LoginForm';

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
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    );
};
