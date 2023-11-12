import React, { useEffect, useState } from 'react';
import { Container } from 'components/Layout/Layout.styled';
import { getGenre } from 'server/api';
import { SelectGenre, Option } from './GenreSelect.styled';

const GenreSelect = ({ changeSelectedGenre }) => {
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
            <form action="">
                <SelectGenre name="genre" id="" onChange={handleChangeGenre}>
                    <option key="0" value="Genre">
                        Genre
                    </option>
                    {genre.map(item => (
                        <Option key={item.id} value={item.name}>
                            {item.name}
                        </Option>
                    ))}
                </SelectGenre>

                <button type="button" onClick={hangleClear}>
                    Clear
                </button>
            </form>
        </Container>
    );
};

export default GenreSelect;
