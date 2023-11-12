import React, { useState } from 'react';
// import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerStyled } from './SearchMovies.styled';

import { Container } from 'components/Layout/Layout.styled';
import search from '../../images/search3.svg';

import { Form, Input, Button } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = evt => {
        evt.preventDefault();
        // console.log(evt.target.elements.search.value);
        const movie = evt.target.elements.search.value;
        // console.log(onSubmit);
        onSubmit(movie);
        evt.target.reset();
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="search" placeholder="Search" />
                <DatePickerStyled
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showYearPicker
                    dateFormat="yyyy"
                    yearDropdownItemNumber={1}
                />
                <Button type="submit">
                    <img src={search} alt="" />
                </Button>
            </Form>
        </Container>
    );
};

export default SearchMovies;
