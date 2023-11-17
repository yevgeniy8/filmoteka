import React from 'react';
import { Container } from 'components/Layout/Layout.styled';
import { Ul, ContentNotFound } from './MovieList.styled';
import Card from 'components/Card/Card';
import { useLocation } from 'react-router-dom';
import { StyledLink } from 'components/Hero/Hero.styled';

const MoviesList = ({ movies, selectedGenre }) => {
    const location = useLocation();

    return (
        <Container>
            {movies.length ? (
                <Ul>
                    {movies.map(item => (
                        <Card
                            key={item.id}
                            item={item}
                            selectedGenre={selectedGenre}
                        />
                    ))}
                </Ul>
            ) : (
                <ContentNotFound>
                    <p>OOPS...</p>
                    <p>We are very sorry!</p>
                    <p>
                        {' '}
                        {location.pathname === '/catalog'
                            ? 'We don’t have any results matching your search.'
                            : 'You don’t have any movies at your library.'}
                    </p>
                    {location.pathname === '/library' && (
                        <StyledLink to="/catalog">Search movie</StyledLink>
                    )}
                </ContentNotFound>
            )}
        </Container>
    );
};

export default MoviesList;
