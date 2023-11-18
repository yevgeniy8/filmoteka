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
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendWeekMovies(1);
            setMovies(data.results);
        };

        getMovies();
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
        setUpdate(false);
        if (!movie) {
            const getMovies = async () => {
                const data = await getTrendWeekMovies(1);
                setMovies(data.results);
                setTotalPages(500);
                setSearch('trend');
                setUpdate(true);
                // setInitialPage(0);
            };

            getMovies();
            return;
        }
        const getMovie = async () => {
            const result = await getMoviesForName(movie, 1, year);
            // setInitialPage(0);
            setDataSearch(movie);
            setSearch('name');
            setMovies(result.results);
            setTotalPages(result.total_pages);
        };

        getMovie();
    };

    return (
        <div>
            <Hero />
            <SearchMovies onSubmit={searchSumbit} />
            <MoviesList movies={movies} />
            {movies.length ? (
                !update ? (
                    <div className="App">
                        <ReactPaginate
                            // initialPage={0}
                            // forcePage={initialPage}
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
                    <div className="App">
                        <ReactPaginate
                            forcePage={0}
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
                )
            ) : (
                ''
            )}
        </div>
    );
};

export default Catalog;
