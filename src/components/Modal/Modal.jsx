import React, { useEffect } from 'react';
import { Backdrop, ModalWrapper } from './Modal.styled';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            toggleModal();
        }
    };

    const handleClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            toggleModal();
        }
    };

    return createPortal(
        <Backdrop onClick={handleClickBackdrop}>
            <ModalWrapper>{children}</ModalWrapper>
        </Backdrop>,
        modalRoot
    );
};

export default Modal;
