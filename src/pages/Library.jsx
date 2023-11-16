import React, { useEffect, useState } from 'react';

import Hero from 'components/Hero/Hero';
import MoviesList from 'components/MoviesList/MoviesList';
import GenreSelect from 'components/GenreSelect/GenreSelect';
import { useSelector } from 'react-redux';
import { getGenre } from 'server/api';

const Library = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [allGenres, setAllGenres] = useState([]);

    const favoriteMovies = useSelector(state => state.favorite.favoriteMovies);

    const changeSelectedGenre = genre => {
        setSelectedGenre(genre);
    };

    useEffect(() => {
        const getGenres = async () => {
            const { genres } = await getGenre();
            setAllGenres(genres);
        };

        getGenres();
    }, []);

    // const visibleMovies = () => {
    //     if (selectedGenre === '') {
    //         return favoriteMovies;
    //     }

    //     const visMovies = favoriteMovies.filter(item => {
    //         if (item.genres) {
    //             const sel = item.genres.filter(
    //                 genre => genre.name === selectedGenre
    //             );

    //             if (sel.length) {
    //                 return item;
    //             } else {
    //                 return false;
    //             }
    //         } else {
    //             const genreee = [];

    //             for (let i = 0; i < allGenres.length; i++) {
    //                 for (let j = 0; j < item.genre_ids.length; j++) {
    //                     if (allGenres[i].id === item.genre_ids[j]) {
    //                         genreee.push(allGenres[i].name);
    //                     }
    //                 }
    //             }

    //             const sel = genreee.filter(genre => genre === selectedGenre);

    //             if (sel.length) {
    //                 return item;
    //             } else {
    //                 return false;
    //             }
    //         }
    //     });

    //     return visMovies;
    // };

    // console.log(visibleMovies());

    const visibleMovies = () => {
        if (selectedGenre === '') {
            return favoriteMovies;
        }

        const visMovies = favoriteMovies.filter(item => {
            const genres = item.genres
                ? item.genres.map(genre => genre.name)
                : [];

            const hasSelectedGenre =
                genres.includes(selectedGenre) ||
                (item.genre_ids &&
                    item.genre_ids.some(id =>
                        allGenres.some(
                            genre =>
                                genre.id === id && genre.name === selectedGenre
                        )
                    ));

            return hasSelectedGenre;
        });

        return visMovies;
    };

    return (
        <div>
            <Hero />
            <GenreSelect
                changeSelectedGenre={changeSelectedGenre}
                selectedGenre={selectedGenre}
            />
            <MoviesList
                movies={visibleMovies()}
                selectedGenre={selectedGenre}
            />
        </div>
    );
};

export default Library;
