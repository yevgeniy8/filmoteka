import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero/Hero';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendWeekMovies, getMoviesForName } from 'server/api';

import ReactPaginate from 'react-paginate';
import './Catalog.css';

const Catalog = () => {
    const [movies, setMovies] = useState([]);
    // const [totalItems, setTotalItems] = useState('');
    const [totalPages, setTotalPages] = useState(500);
    const [search, setSearch] = useState('trend');
    const [dataSearch, setDataSearch] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePageClick = async event => {
        if (search === 'trend') {
            const data = await getTrendWeekMovies(event.selected + 1);
            setMovies(data.results);
        }

        if (search === 'name') {
            const result = await getMoviesForName(
                dataSearch,
                event.selected + 1
            );
            setSearch('name');
            setMovies(result.results);
            setTotalPages(result.total_pages);
        }
    };

    const searchSumbit = ({ movie, year }) => {
        const getMovie = async () => {
            const result = await getMoviesForName(movie, 1, year);
            setDataSearch(movie);
            setSearch('name');
            setMovies(result.results);
            setTotalPages(result.total_pages);
        };

        getMovie();
    };

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendWeekMovies(1);
            setMovies(data.results);
        };

        getMovies();
    }, []);

    return (
        <div>
            <Hero />
            <SearchMovies onSubmit={searchSumbit} />
            <MoviesList movies={movies} />
            {movies.length ? (
                <div className="App">
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        previousLabel="<"
                        breakLabel="..."
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Catalog;
