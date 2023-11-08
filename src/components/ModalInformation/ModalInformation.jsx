// import React, { useEffect, useLayoutEffect, useState } from 'react';

import UpcomingContentSection from 'components/UpcomingContentSection/UpcomingContentSection';
import { WrapperModal, ImageWrapper, Img } from './ModalInformation.styled';
// import { getGenre } from 'server/api';

const ModalInformation = ({ movie, genre }) => {
    return (
        <WrapperModal>
            <ImageWrapper>
                <Img
                    src={
                        movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                            : movie.title
                    }
                    alt=""
                />
            </ImageWrapper>

            <UpcomingContentSection
                movie={movie}
                width={'small'}
                genre={genre}
                modal={'modal'}
            />
        </WrapperModal>
    );
};

export default ModalInformation;
