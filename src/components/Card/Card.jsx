import React, { useEffect, useState } from 'react';
import rating from 'helper/rating';
import { getGenre } from 'server/api';

import {
    Li,
    InfoCard,
    Title,
    Gradient,
    WrapperInfo,
    Genre,
} from './Card.styled';

const Card = ({ item }) => {
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const getGen = async () => {
            const { genres } = await getGenre();

            const genreee = [];

            for (let i = 0; i < genres.length; i++) {
                for (let j = 0; j < item.genre_ids.length; j++) {
                    if (genres[i].id === item.genre_ids[j]) {
                        genreee.push(genres[i].name);
                    }
                }
            }

            setGenre(genreee);
        };

        getGen();
    }, [item.genre_ids]);

    console.log(item);

    return (
        <Li>
            <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt=""
                width={395}
                height={574}
            />
            <Gradient></Gradient>
            <InfoCard>
                <Title>{item.title}</Title>
                <WrapperInfo>
                    <Genre>
                        {/* {genre &&
                            `${genre[1]}, ${genre[2]} | ${
                                item.release_date.split('-')[0]
                            }`} */}

                        {genre.join(' ').length > 15
                            ? genre.join(' ').slice(0, 15) +
                              '...' +
                              ` | ${item.release_date?.split('-')[0]}`
                            : genre.join(' ') +
                              ` | ${item.release_date?.split('-')[0]}`}
                    </Genre>
                    <img src={rating(item.vote_average)} alt="" width={106} />
                </WrapperInfo>
            </InfoCard>
        </Li>
    );
};

export default Card;
