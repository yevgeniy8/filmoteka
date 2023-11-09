import React, { useState } from 'react';

import Hero from 'components/Hero/Hero';
import MoviesList from 'components/MoviesList/MoviesList';
import GenreSelect from 'components/GenreSelect/GenreSelect';
import { useSelector } from 'react-redux';

const Library = () => {
    const [selectedGenre, setSelectedGenre] = useState('');

    const favoriteMovies = useSelector(state => state.favorite.favoriteMovies);
    console.log(favoriteMovies);

    const changeSelectedGenre = genre => {
        setSelectedGenre(genre);
    };

    return (
        <div>
            <Hero />
            <GenreSelect changeSelectedGenre={changeSelectedGenre} />
            <MoviesList movies={favoriteMovies} selectedGenre={selectedGenre} />
        </div>
    );
};

export default Library;
