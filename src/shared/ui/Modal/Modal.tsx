import { PropsWithChildren, useCallback, useEffect } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
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

    const { theme } = useTheme();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
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

        if (!isOpen) {
            window.removeEventListener('keydown', onKeyDown);
        }
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        className={classNames(cls.content, {}, [cls[theme]])}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
