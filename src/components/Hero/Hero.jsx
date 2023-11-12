import React, { useEffect, useState } from 'react';
import { getTrendDayMovies, getDetaliesInfMovie, getGenre } from 'server/api';
import {
    HeroBack,
    ImageRating,
    Information,
    NameFilm,
    Description,
    WrapperButton,
    Button,
    ButtonSecond,
} from './Hero.styled';

import rating from 'helper/rating';
import Modal from 'components/Modal/Modal';
import ModalInformation from 'components/ModalInformation/ModalInformation';

const Hero = () => {
    const [movie, setMovie] = useState({});
    const [isShowModal, setIsShowModal] = useState(false);
    const [genre, setGenre] = useState([]);

    console.log(movie);

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

    // useEffect(() => {
    //     const getGen = async () => {
    //         const { genres } = await getGenre();

    //         console.log(movie);

    //         const genreee = [];

    //         for (let i = 0; i < genres.length; i++) {
    //             for (let j = 0; j < movie.genre_ids.length; j++) {
    //                 if (genres[i].id === movie.genre_ids[j]) {
    //                     genreee.push(genres[i].name);
    //                 }
    //             }
    //         }

    //         setGenre(genreee);
    //     };

    //     getGen();
    // }, [movie, movie.genre_ids]);

    useEffect(() => {
        const genresArr = movie.genres?.map(item => item.name);
        setGenre(genresArr);
    }, [movie.genres]);

    const toggleModal = () => {
        setIsShowModal(prevState => !prevState);
    };

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
                        <ButtonSecond onClick={toggleModal}>
                            More details
                        </ButtonSecond>
                    </WrapperButton>
                </Information>
                <HeroBack
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                ></HeroBack>
            </div>
            {isShowModal && (
                <Modal toggleModal={toggleModal}>
                    <ModalInformation
                        movie={movie}
                        toggleModal={toggleModal}
                        genre={genre}
                    />
                </Modal>
            )}
        </div>
    );
};

export default Hero;
