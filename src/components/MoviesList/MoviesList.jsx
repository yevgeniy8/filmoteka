import React from 'react';
import { Container } from 'components/Layout/Layout.styled';
import { Ul } from './MovieList.styled';
import Card from 'components/Card/Card';

const MoviesList = ({ movies }) => {
    return (
        <Container>
            <Ul>
                {movies.map(item => (
                    // console.log(item)
                    // 5
                    // <li key={item.id}>
                    //     <img
                    //         src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    //         alt=""
                    //         width={395}
                    //     />
                    // </li>
                    <Card key={item.id} item={item} />
                ))}
            </Ul>
        </Container>
    );
};

export default MoviesList;
