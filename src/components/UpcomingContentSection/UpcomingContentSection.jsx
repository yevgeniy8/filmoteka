import React, { useEffect, useState } from 'react';

import {
    Title,
    P,
    PLast,
    DateSpan,
    Votu,
    WrapperVotu,
    Popularity,
    Genre,
    About,
    OverviewAbout,
    ButtonLibrary,
    WrapperText,
} from './UpcomingContentSection.styled';

const UpcomingContentSection = ({
    movie,
    genre,
    width,
    modal,
    setFavoriteMovies,
}) => {
    const [inFavorite, setInFavorite] = useState(false);

    const [favoriteMovie, setFavoriteMovie] = useState(() => {
        return JSON.parse(localStorage.getItem('favoriteMovie')) || [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteMovie', JSON.stringify(favoriteMovie));
    }, [favoriteMovie]);

    useEffect(() => {
        if (
            favoriteMovie.filter(favoriteMovie => movie.id === favoriteMovie.id)
                .length
        ) {
            setInFavorite(true);
        }
    }, [favoriteMovie, movie.id]);

    const handleClickLibrary = () => {
        if (favoriteMovie.filter(item => item.id === movie.id).length) {
            setInFavorite(false);

            setFavoriteMovie(prevState => {
                return prevState.filter(item => item.id !== movie.id);
            });

            setFavoriteMovies(prevState => {
                return prevState.filter(item => item.id !== movie.id);
            });

            return;
        }
        setInFavorite(true);
        setFavoriteMovie(prevState => [...prevState, movie]);
    };

    return (
        <WrapperText width={width}>
            <Title modal={modal}>{movie.title}</Title>
            <P>
                Release date{' '}
                <DateSpan>
                    {movie.release_date &&
                        movie.release_date.split('-').reverse().join('.')}
                </DateSpan>
            </P>
            <P>
                Vote / Votes{' '}
                <WrapperVotu>
                    <Votu>{movie.vote_average}</Votu> /{' '}
                    <Votu> {movie.vote_count}</Votu>
                </WrapperVotu>
            </P>
            <P>
                Popularity{' '}
                <Popularity>{Number(movie.popularity).toFixed(2)}</Popularity>
            </P>
            <PLast>
                Genre{' '}
                {/* <Genre>
                    {genre.join(', ').length > 25
                        ? genre.join(', ').slice(0, 25) + '...'
                        : genre.join(', ')}
                </Genre> */}
                <Genre>{genre.join(', ')}</Genre>
            </PLast>
            <About>About</About>
            <OverviewAbout width={width} modal={modal}>
                {movie.overview}
            </OverviewAbout>

            <ButtonLibrary onClick={handleClickLibrary}>
                {inFavorite ? 'Delete from library' : ' Add to my library'}
            </ButtonLibrary>
        </WrapperText>
    );
};

export default UpcomingContentSection;
