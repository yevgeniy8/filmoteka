import React, { useEffect, useState } from 'react';

import Hero from 'components/Hero/Hero';
import MoviesList from 'components/MoviesList/MoviesList';

const Library = () => {
    const [favoriteMovie, setFavoriteMovie] = useState(() => {
        return JSON.parse(localStorage.getItem('favoriteMovie')) || [];
    });

    useEffect(() => {
        const favorite = JSON.parse(localStorage.getItem('favoriteMovie'));
        setFavoriteMovie(favorite);
    }, []);

    return (
        <div>
            <Hero />
            <MoviesList
                movies={favoriteMovie}
                setFavoriteMovie={setFavoriteMovie}
            />
        </div>
    );
};

export default Library;
