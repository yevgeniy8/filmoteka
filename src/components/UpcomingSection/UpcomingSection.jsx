import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from 'server/api';
import { getGenre } from 'server/api';

import { Container } from 'components/Layout/Layout.styled';

import UpcomingContentSection from 'components/UpcomingContentSection/UpcomingContentSection';

import {
    WrapperContent,
    Section,
    H2,
    WrapperImage,
    Image,
    Gradient,
    // Title,
    // P,
    // PLast,
    // DateSpan,
    // Votu,
    // WrapperVotu,
    // Popularity,
    // Genre,
    // About,
    // OverviewAbout,
    // ButtonLibrary,
    // WrapperText,
} from './UpcomingSection.styles';

const UpcomingSection = () => {
    const [movie, setMovie] = useState({});
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const data = await getUpcomingMovies();
            const randomMovie = Math.round(Math.random() * (20 - 1) + 1);
            // console.log(data.results[randomMovie]);
            setMovie(data.results[randomMovie]);

            const genresIds = data.results[randomMovie].genre_ids;

            const { genres } = await getGenre();
            const genreee = [];

            for (let i = 0; i < genres.length; i++) {
                for (let j = 0; j < genresIds.length; j++) {
                    // console.log(genres[i].id === genresIds[j]);
                    if (genres[i].id === genresIds[j]) {
                        // console.log(genres[i].name);
                        genreee.push(genres[i].name);
                    }
                }
            }

            setGenre(genreee);
        };

        getMovie();
    }, []);

    return (
        <Section>
            <Container>
                <H2>Upcoming this month</H2>
                <WrapperContent>
                    <WrapperImage>
                        <Image
                            src={
                                movie.backdrop_path &&
                                `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                                // : movie.title
                            }
                            alt=""
                            width={805}
                        />
                        <Gradient></Gradient>
                    </WrapperImage>

                    <UpcomingContentSection movie={movie} genre={genre} />

                    {/* <WrapperText>
                        <Title>{movie.title}</Title>
                        <P>
                            Release date{' '}
                            <DateSpan>
                                {movie.release_date &&
                                    movie.release_date
                                        .split('-')
                                        .reverse()
                                        .join('.')}
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
                            <Popularity>
                                {Number(movie.popularity).toFixed(2)}
                            </Popularity>
                        </P>
                        <PLast>
                            Genre{' '}
                            <Genre>
                                {genre.join(', ').length > 25
                                    ? genre.join(', ').slice(0, 25) + '...'
                                    : genre.join(', ')}
                            </Genre>
                        </PLast>
                        <About>About</About>
                        <OverviewAbout>{movie.overview}</OverviewAbout>
                        <ButtonLibrary>Add to my library</ButtonLibrary>
                    </WrapperText> */}
                </WrapperContent>
            </Container>
        </Section>
    );
};

export default UpcomingSection;
