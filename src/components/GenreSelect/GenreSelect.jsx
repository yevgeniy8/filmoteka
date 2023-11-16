import React, { useEffect, useState } from 'react';
import { Container } from 'components/Layout/Layout.styled';
import { getGenre } from 'server/api';
import { Form, SelectGenre, Option, ButtonClear } from './GenreSelect.styled';

import clearSelect from '../../images/close-modal.svg';

const GenreSelect = ({ changeSelectedGenre, selectedGenre }) => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const genre = async () => {
            try {
                const genre = await getGenre();
                // console.log(genre);
                setGenre(genre.genres);
            } catch (error) {
                return console.log(error);
            }
        };

        genre();
    }, []);

    const handleChangeGenre = e => {
        // console.log(e.target.value);
        changeSelectedGenre(e.target.value);
    };

    const hangleClear = () => {
        changeSelectedGenre('');
    };

    return (
        <Container>
            <Form>
                <SelectGenre
                    name="genre"
                    id=""
                    onChange={handleChangeGenre}
                    value={selectedGenre}
                >
                    <option key="0" value="Genre">
                        Genre
                    </option>
                    {genre.map(item => (
                        <Option key={item.id} value={item.name}>
                            {item.name}
                        </Option>
                    ))}
                </SelectGenre>

                <ButtonClear type="button" onClick={hangleClear}>
                    <img src={clearSelect} alt="" />
                </ButtonClear>
            </Form>
        </Container>
    );
};

export default GenreSelect;
