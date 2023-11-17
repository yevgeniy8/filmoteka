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
    StyledLink,
    WrapperContent,
    ContentTrailer,
    ImageTrailer,
} from './Hero.styled';

import rating from 'helper/rating';
import Modal from 'components/Modal/Modal';
import ModalInformation from 'components/ModalInformation/ModalInformation';

import photoLayout from '../../images/picture.jpg';
import trailerNotFound from '../../images/trailerNotFound.png';
// import { Link } from 'react-router-dom';

const Hero = () => {
    const [movie, setMovie] = useState({});
    const [isShowModal, setIsShowModal] = useState(false);
    const [genre, setGenre] = useState([]);
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
            // setMovie({});
            // setMovie(data.results[randomMovie]);
        };

        getMovie();
    }, []);

    useEffect(() => {
        const genresArr = movie.genres?.map(item => item.name);
        setGenre(genresArr);
    }, [movie.genres]);

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

        const randomKey = Math.floor(
            Math.random() * (response.results.length - 1 - 1 + 1) + 1
        );

        console.log(response);

        console.log(randomKey);

        setKeyTrailer(response.results[randomKey]?.key);
    };

    return Object.keys(movie).length ? (
        <div>
            <div>
                <Information>
                    <NameFilm>{movie.original_title}</NameFilm>
                    <ImageRating
                        src={rating(movie.vote_average)}
                        alt=""
                        width={136}
                    />
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
                        movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                            : photoLayout
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
                    {keyTrailer ? (
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
                    ) : (
                        <>
                            <WrapperContent>
                                <ContentTrailer>OOPS...</ContentTrailer>
                                <ContentTrailer>
                                    We are very sorry!
                                </ContentTrailer>
                                <ContentTrailer>
                                    But we couldn’t find the trailer.
                                </ContentTrailer>
                            </WrapperContent>
                            <ImageTrailer src={trailerNotFound} alt="" />
                        </>
                    )}
                </Modal>
            )}
        </div>
    ) : (
        <div>
            <Information>
                <NameFilm>Let’s Make Your Own Cinema</NameFilm>
                <p>
                    Is a guide to creating a personalized movie theater
                    experience. You'll need a projector, screen, and speakers.
                    Decorate your space, choose your films, and stock up on
                    snacks for the full experience.
                </p>
                <StyledLink to="/catalog">Get Started</StyledLink>
            </Information>
            <HeroBack src={photoLayout} alt="Background movie" />
        </div>
    );
};

export default Hero;
