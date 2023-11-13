import styled from '@emotion/styled';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 20, 23, 0.5);
    z-index: 1200;
`;

export const ModalWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 846px;
    height: 598px;

    border-radius: 20px;
    background: #111;
    box-shadow: 1px 1px 14px 4px rgba(255, 107, 8, 0.42);
`;

export const ModalClose = styled.img`
    position: absolute;
    top: 40px;
    right: 40px;

    cursor: pointer;
`;
