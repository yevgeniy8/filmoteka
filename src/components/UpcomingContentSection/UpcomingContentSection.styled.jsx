import styled from '@emotion/styled';

export const Title = styled.h2`
    font-family: Roboto;
    font-size: ${({ modal }) => (modal ? '24px' : '32px')};
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 28px;
    color: #ffffff;
`;

export const P = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 12px;
    color: #b7b7b7;
`;

export const PLast = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 20px;
    color: #b7b7b7;

    display: flex;
`;

export const DateSpan = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 58px;
    color: #f87719;
`;

export const Votu = styled.span`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    background-color: white;
    padding: 1px 8px;
    border-radius: 5px;
    color: #111111;
`;

export const WrapperVotu = styled.span`
    padding-left: 62px;
`;

export const Popularity = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding-left: 78px;
`;

export const Genre = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    padding-left: 108px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const About = styled.h3`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #b7b7b7;
    margin-bottom: 16px;
    text-transform: uppercase;
`;

export const OverviewAbout = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #f8f8f8;
    width: ${({ width }) => (width === 'small' ? '331px' : '390px')};
    /* width: 390px; */
    margin-bottom: 20px;

    height: 160px;

    height: ${({ modal }) => modal && '160px'};

    overflow: auto;
    /* white-space: nowrap;
    text-overflow: ellipsis; */

    /* scroll-behavior: auto; */
`;

export const WrapperText = styled.div`
    position: relative;
    width: ${({ width }) => (width === 'small' ? '331px' : '390px')};
`;

export const ButtonLibrary = styled.button`
    position: absolute;
    bottom: 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #111111;
    background-image: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
    border-radius: 74px;
    padding: 12px 24px 12px 24px;
    border: none;
    outline: none;
`;
