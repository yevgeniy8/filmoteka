import styled from '@emotion/styled';

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
    max-width: 385px;
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
    padding: 12px 24px 12px 24px;
    border-radius: 74px;
    gap: 10px;
`;
