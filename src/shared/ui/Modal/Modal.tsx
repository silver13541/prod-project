import { PropsWithChildren, useCallback, useEffect } from 'react';

import { classNames, Mods } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
 className?: string;
 isOpen: boolean;
 onClose: () => void
}

export const Modal = (props: PropsWithChildren<ModalProps>) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        onClose();
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={cls.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
