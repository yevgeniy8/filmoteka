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

const UpcomingContentSection = ({ movie, genre, width, modal }) => {
    const [favoriteMovie, setFavoriteMovie] = useState(() => {
        return JSON.parse(localStorage.getItem('favoriteMovie')) || [];
    });

    useEffect(() => {
        localStorage.setItem('favoriteMovie', JSON.stringify(favoriteMovie));
    }, [favoriteMovie]);

    const handleAddLibrary = () => {
        if (favoriteMovie.filter(item => item.id === movie.id).length) {
            return;
        }
        setFavoriteMovie(prevState => [...prevState, movie]);
        console.log(favoriteMovie);
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
            <ButtonLibrary onClick={handleAddLibrary}>
                Add to my library
            </ButtonLibrary>
        </WrapperText>
    );
};

export default UpcomingContentSection;
