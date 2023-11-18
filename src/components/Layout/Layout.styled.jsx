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
    width: 1233px;
    margin: 0 auto;
    padding-left: 8px;
    padding-right: 8px;
`;

export const Header = styled.header`
    height: 60px;
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
    color: #b7b7b7;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        color: #f87719;
    }

    &.active {
        color: #f87719;
    }
`;

export const Footer = styled.footer`
    margin-top: 100px;
    margin-bottom: 80px;
    text-align: center;
    font-size: 18px;
    color: #b7b7b7;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const GitHubRef = styled.a`
    /* text-decoration: none; */
    color: inherit;
    margin-left: 5px;

    &:hover {
        color: #f87719;
    }
`;

export const ScrollUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #f87719;
    box-shadow: 1px 1px 14px 2px #ff6b086b;
`;
