import React, { useState } from 'react';
// import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerStyled } from './SearchMovies.styled';

import { Container } from 'components/Layout/Layout.styled';
import search from '../../images/search3.svg';

import { Form, Input, Button } from './SearchMovies.styled';

import { RxUpdate } from 'react-icons/rx';

import Notiflix from 'notiflix';

const SearchMovies = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState();

    const handleSubmit = evt => {
        evt.preventDefault();
        const movie = evt.target.elements.search.value;

        // console.log(evt.target.elements.search.value);
        if (!evt.target.elements.search.value) {
            return Notiflix.Notify.failure('Please enter the movie title');
        }

        onSubmit({ movie, year: startDate ? startDate.getFullYear() : null });
        setStartDate('');
        evt.target.reset();
    };

    const handleUpdate = () => {
        onSubmit({ movie: '' });
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
                    placeholderText="Year"
                />
                <Button type="submit">
                    <img src={search} alt="" />
                </Button>
                <Button type="button" onClick={handleUpdate}>
                    <RxUpdate size={20} color="#fff" />
                </Button>
            </Form>
        </Container>
    );
};

export default SearchMovies;
