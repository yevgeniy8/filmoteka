import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
    display: flex;
    gap: 16px;
`;

export const Li = styled.li`
    width: 395px;
`;

export const WrapperWeeklyTrends = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
    margin-top: 80px;
`;

export const H2 = styled.h2`
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
`;

export const ButtonSeeAll = styled(NavLink)`
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0em;
    text-decoration: none;
    /* outline: none;
    border: none; */
    background-color: black;
    color: #f87719;
    cursor: pointer;
    
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        color: #fff;
    }
`;
