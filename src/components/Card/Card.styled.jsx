import styled from '@emotion/styled';

export const Li = styled.li`
    position: relative;
`;

export const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 63.48%,
        rgba(0, 0, 0, 0.9) 92.16%
    );
`;

export const InfoCard = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: 355px;
`;

export const Title = styled.h2`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 5px;
`;

export const Genre = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #b7b7b7;
    padding-right: 20px;
`;

export const WrapperInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Img = styled.img`
    width: 395px;
    height: 574px;
    border-radius: 5px;
`;
