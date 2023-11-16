import React, { useEffect, useState } from 'react';
import { getTrendWeekMovies } from 'server/api';

import { Container } from 'components/Layout/Layout.styled';

import Card from 'components/Card/Card';

import {
    Ul,
    H2,
    WrapperWeeklyTrends,
    ButtonSeeAll,
} from './WeeklyTrendSection.styled';

const WeeklyTrendSection = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendWeekMovies(1);
            setMovies([data.results[0], data.results[1], data.results[2]]);
            // console.log(data.results);
        };

        getMovies();
    }, []);

    return (
        <Container>
            <WrapperWeeklyTrends>
                <H2>Weekly trends</H2>
                <ButtonSeeAll to="/catalog">See all</ButtonSeeAll>
            </WrapperWeeklyTrends>
            <Ul>
                {movies.map(item => (
                    <Card key={item.id} item={item} />
                    // <li key={item.id}>
                    //     <img
                    //         src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    //         alt=""
                    //         // width={395}
                    //         // height={574}
                    //     />
                    //     <img src={rating(item.vote_average)} alt="" />
                    // </li>
                ))}
            </Ul>
        </Container>
    );
};

export default WeeklyTrendSection;
