import React, { useEffect, useState } from 'react';
import { getTrendDayMovies, getDetaliesInfMovie } from 'server/api';
import {
    HeroBack,
    ImageRating,
    Information,
    NameFilm,
    Description,
    WrapperButton,
    Button,
} from './Hero.styled';

import rating from 'helper/rating';

const Hero = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const data = await getTrendDayMovies();
            const randomMovie = Math.round(Math.random() * (20 - 1) + 1);

            const details = await getDetaliesInfMovie(
                data.results[randomMovie].id
            );
            setMovie(details);

            rating(7.2);
        };

        getMovie();
    }, []);

    return (
        <div>
            <div>
                <Information>
                    <NameFilm>{movie.original_title}</NameFilm>
                    <ImageRating
                        src={rating(movie.vote_average)}
                        alt=""
                        width={136}
                    />
                    {/* рейтинг */}
                    <Description>
                        {movie.overview?.length > 200
                            ? movie.overview.slice(0, 200) + '...'
                            : movie.overview}
                    </Description>
                    <WrapperButton>
                        <Button>Watch trailer</Button>
                        <Button>More details</Button>
                    </WrapperButton>
                </Information>
                <HeroBack
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                ></HeroBack>
            </div>
        </div>
    );
};

export default Hero;
