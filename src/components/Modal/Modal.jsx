import React, { useEffect } from 'react';
import { Backdrop, ModalWrapper, ModalClose } from './Modal.styled';

import { createPortal } from 'react-dom';

import modalClose from '../../images/close-modal.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal, modal }) => {
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

    const handleCloseModal = () => {
        toggleModal();
    };

    return createPortal(
        <Backdrop onClick={handleClickBackdrop}>
            <ModalWrapper>
                {children}
                {!modal && (
                    <ModalClose
                        src={modalClose}
                        alt=""
                        onClick={handleCloseModal}
                    />
                )}
            </ModalWrapper>
            {modal && (
                <ModalClose
                    src={modalClose}
                    alt=""
                    onClick={handleCloseModal}
                />
            )}
        </Backdrop>,
        modalRoot
    );
};

export default Modal;
