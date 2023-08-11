import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero/Hero';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendWeekMovies, getMoviesForName } from 'server/api';

const Catalog = () => {
    const [movies, setMovies] = useState([]);

    const searchSumbit = data => {
        // console.log(data);
        const getMovie = async () => {
            const result = await getMoviesForName(data);
            console.log(result);
            setMovies(result.results);
        };

        getMovie();

        // getMoviesForName(data).then(res => console.log(res));
    };

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendWeekMovies();
            // console.log(data.results);

            setMovies(data.results);
        };

        getMovies();
    }, []);

    return (
        <div>
            <Hero />
            <SearchMovies onSubmit={searchSumbit} />
            <MoviesList movies={movies} />
        </div>
    );
};

export default Catalog;
