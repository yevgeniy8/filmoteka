import styled from '@emotion/styled';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    /* gap: 16px; */
    margin-top: 80px;
    margin-bottom: 48px;
`;

export const Input = styled.input`
    width: 334px;
    height: 48px;
    border-radius: 8px;
    border: none;
    outline: none;

    /* padding: 12px 260px 12px 24px; */
    border: 1px solid #fff;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;

    color: #b7b7b7;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    margin-right: 16px;
    background-color: #111;

    &::placeholder {
        color: #b7b7b7;
    }
`;

export const Button = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);

    margin-left: 16px;
    cursor: pointer;
`;

export const DatePickerStyled = styled(ReactDatePicker)`
    width: 95px;
    height: 48px;
    padding: 12px 0 12px 0;
    border-radius: 8px;
    border: 1px solid #fff;
    background-color: transparent;
    outline: none;

    color: #b7b7b7;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */

    .react-datepicker__year--container {
        width: 95px;
    }

    .react-datepicker__year-dropdown.react-datepicker__year-dropdown {
        width: 95px;
        background-color: transparent;
        border: 1px solid #fff;
        outline: none;
    }
`;
