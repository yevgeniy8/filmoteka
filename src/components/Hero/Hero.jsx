import React, { useEffect, useState } from 'react';
import {
    getTrendDayMovies,
    getDetaliesInfMovie,
    getMovieTrailer,
} from 'server/api';
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
    // const [trailer, setTrailer] = useState('');
    const [keyTrailer, setKeyTrailer] = useState('');
    const [isShowTrailer, setIsShowTrailer] = useState(false);

    useEffect(() => {
        const getMovie = async () => {
            const data = await getTrendDayMovies();
            const randomMovie = Math.round(Math.random() * (20 - 1) + 1);

            const details = await getDetaliesInfMovie(
                data.results[randomMovie].id
            );
            setMovie(details);
            // console.log(details);

            // const response = await getMovieTrailer(details.id);
            // console.log(response);

            // rating(7.2);
        };

        getMovie();
    }, []);

    useEffect(() => {
        const genresArr = movie.genres?.map(item => item.name);
        setGenre(genresArr);
    }, [movie.genres]);

    // useEffect(() => {
    //     const getTrailer = async () => {
    //         const response = await getMovieTrailer(movie.id);
    //         console.log(response);
    //         console.log(movie);
    //     };

    //     getTrailer();
    // });

    const toggleModal = () => {
        setIsShowModal(prevState => !prevState);
    };

    const handleGetTrailer = async () => {
        if (isShowTrailer === true) {
            setIsShowTrailer(false);
            return;
        }
        setIsShowTrailer(true);
        const response = await getMovieTrailer(movie.id);
        // console.log(response.results);

        const randomKey = Math.floor(
            Math.random() * (response.results.length - 1 - 1 + 1) + 1
        );

        // console.log(response.results[randomKey].key);

        setKeyTrailer(response.results[randomKey].key);
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
                        <Button onClick={handleGetTrailer}>
                            Watch trailer
                        </Button>
                        <ButtonSecond onClick={toggleModal}>
                            More details
                        </ButtonSecond>
                    </WrapperButton>
                </Information>
                <HeroBack
                    src={
                        movie.backdrop_path &&
                        `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                    }
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
            {isShowTrailer && (
                <Modal toggleModal={handleGetTrailer} modal={'trailer'}>
                    {/* <ModalInformation
                        movie={movie}
                        toggleModal={toggleModal}
                        genre={genre}
                    /> */}
                    <iframe
                        width="100%"
                        height="100%"
                        className="iframe_video_player"
                        src={`https://www.youtube.com/embed/${keyTrailer}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay;
              clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
                        allowFullScreen
                    ></iframe>
                    `
                </Modal>
            )}
        </div>
    );
};

export default Hero;
