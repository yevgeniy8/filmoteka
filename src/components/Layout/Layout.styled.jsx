import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Background = styled.div`
    background-color: #000000;
`;

export const LinkLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const Container = styled.div`
    width: 1216px;
    margin: 0 auto;
    padding-left: 8px;
    padding-right: 8px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoName = styled.span`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: center;
    margin-left: 8px;
    color: black;
    color: #ffffff;
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding-top: 18px;
    padding-bottom: 18px;
`;

export const NavigationLink = styled(NavLink)`
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    text-transform: uppercase;
    color: #f87719;
`;
