import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeroBack = styled.div`
    color: white;
    /* justify-content: space-between; */
    max-width: 1280px;
    height: 720px;
    /* background-image: url(https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_1280.jpg); */
    background-image: linear-gradient(
            83.16deg,
            #111111 36.85%,
            rgba(17, 17, 17, 0) 60.05%
        ),
        url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Information = styled.div`
    max-width: 464px;
    position: absolute;
    padding-top: 118px;
    margin-left: 135px;
`;

export const NameFilm = styled.h1`
    font-family: Roboto;
    font-size: 64px;
    font-weight: 700;
    line-height: 75px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 16px;
`;
export const ImageRating = styled.img`
    margin-bottom: 28px;
`;

export const Description = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 36px;
`;

export const WrapperButton = styled.div`
    display: flex;
    gap: 14px;
`;

export const Button = styled.button`
    width: 139px;
    height: 48px;
    /* padding: 12px 24px 12px 24px; */
    /* padding: 12px 0 12px 0; */

    border-radius: 74px;
    gap: 10px;

    outline: none;
    border: none;

    background: var(
        --linear,
        linear-gradient(141deg, #ffc226 9.4%, #f84119 91.91%)
    );

    color: #111;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */

    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 139px;
    height: 48px;
    border-radius: 74px;
    gap: 10px;
    outline: none;
    border: none;
    text-decoration: none;

    margin-top: 32px;

    background: var(
        --linear,
        linear-gradient(141deg, #ffc226 9.4%, #f84119 91.91%)
    );

    color: #111;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */

    cursor: pointer;
`;

export const ButtonSecond = styled(Button)`
    border: 1px solid #fff;
    background: #111;

    color: #fff;
`;

export const WrapperContent = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding-left: 100px;
`;

export const ContentTrailer = styled.p`
    margin-bottom: 10px;
    color: #fff;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const ImageTrailer = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;

    width: 400px;
    height: 330px;
`;
