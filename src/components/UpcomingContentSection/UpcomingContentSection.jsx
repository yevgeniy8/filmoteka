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

import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
import { useSelector, useDispatch } from 'react-redux';

const UpcomingContentSection = ({ movie, genre, width, modal }) => {
    const [inFavorite, setInFavorite] = useState(false);

    const dispatch = useDispatch();

    const favoriteMovies = useSelector(state => state.favorite.favoriteMovies);

    useEffect(() => {
        if (favoriteMovies.filter(item => movie.id === item.id).length) {
            setInFavorite(true);
        }
    }, [favoriteMovies, movie.id]);

    const handleClickLibrary = () => {
        if (favoriteMovies.filter(item => item.id === movie.id).length) {
            dispatch(removeFavorite(movie.id));
            setInFavorite(false);
        } else {
            dispatch(addFavorite(movie));
            setInFavorite(true);
        }
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
                Genre <Genre>{genre.join(', ')}</Genre>
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
