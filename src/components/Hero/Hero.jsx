import React, { useEffect, useState } from 'react';
import { getTrendDayMovies, getDetaliesInfMovie } from 'server/api';
import { HeroBack, Image, Information } from './Hero.styled';

const Hero = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const data = await getTrendDayMovies();
            const randomMovie = Math.round(Math.random() * (20 - 1) + 1);
            // console.log(data.results);
            // console.log(randomMovie);
            // console.log(data.results[randomMovie]);

            // setMovie(data.results[randomMovie].id);

            const details = await getDetaliesInfMovie(
                data.results[randomMovie].id
            );
            // console.log(details);
            setMovie(details);
        };

        getMovie();
    }, []);

    const href = 'https://image.tmdb.org/t/p/original/';

    return (
        <div>
            <HeroBack>
                <Information>
                    <h1>{movie.original_title}</h1>
                    <img src="" alt="" />
                    <p>{movie.overview}</p>
                    <button>Watch trailer</button>
                    <button>More details</button>
                </Information>
                <div>
                    {movie?.backdrop_path && (
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt=""
                            width={1280}
                            // style={{
                            //     backgroundImage: `linear-gradient(83.16deg, #111111 36.85%,rgba(17, 17, 17, 0) 60.05%), url('${
                            //         href + movie.backdrop_path
                            //     }')`,
                            // }}
                        />
                    )}
                </div>
            </HeroBack>
        </div>
    );
};

export default Hero;
