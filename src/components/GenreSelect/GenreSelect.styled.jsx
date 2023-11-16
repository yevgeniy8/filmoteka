import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    padding-top: 80px;
    padding-bottom: 47px;
`;

export const SelectGenre = styled.select`
    width: 144px;
    height: 44px;
    padding: 12px 60px 12px 20px;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: #111;

    outline: none;

    color: #b7b7b7;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    /* -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    // Приховати стрілку Firefox 
    text-indent: 1px;
    text-overflow: '';

    &::after {
        content: '▼';
        font-size: 1em;
        color: #333;
        pointer-events: none;
        position: absolute;
        top: 0.7em;
        right: 0.75em;
    } */
`;

export const Option = styled.option`
    color: #f8f8f8;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */

    border-radius: 8px 8px 0px 0px;
    border: 1px solid #fff;

    background: #1c1c1c;
`;

export const ButtonClear = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: var(
        --linear,
        linear-gradient(141deg, #ffc226 9.4%, #f84119 91.91%)
    );
    outline: none;

    cursor: pointer;
`;
