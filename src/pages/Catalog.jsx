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

    // const [totalPageWeek, setTotalPageWeek] = useState('');
    // const [totalPageName, setTotalPageName] = useState('');

    // We start with an empty list of items.
    // const [currentItems, setCurrentItems] = useState(null);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    // const [itemOffset, setItemOffset] = useState(0);

    // useEffect(() => {
    //     // Fetch items from another resources.
    //     const endOffset = itemOffset + 20;
    //     // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //     // setCurrentItems(totalItems.slice(itemOffset, endOffset));
    //     // setTotalItems(Math.ceil(totalItems.length / 20));
    // }, [itemOffset]);

    // Invoke when user click to request another page.
    const handlePageClick = async event => {
        // const newOffset = (event.selected * 20) % totalItems.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);

        if (search === 'trend') {
            const data = await getTrendWeekMovies(event.selected + 1);
            // console.log(data);
            setMovies(data.results);
        }

        if (search === 'name') {
            const result = await getMoviesForName(
                dataSearch,
                event.selected + 1
            );
            // console.log(result);
            setSearch('name');
            setMovies(result.results);
            setTotalPages(result.total_pages);
            // setTotalItems(result.total_results);
        }
    };

    const searchSumbit = ({ movie, year }) => {
        const getMovie = async () => {
            const result = await getMoviesForName(movie, 1, year);
            // console.log(result);
            setDataSearch(movie);
            setSearch('name');
            setMovies(result.results);
            setTotalPages(result.total_pages);
            // setTotalItems(result.total_results);
        };

        getMovie();
    };

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendWeekMovies(1);
            // console.log(data);

            setMovies(data.results);
            // setTotalPages(data.total_pages);
            // setTotalItems(data.total_results);
        };

        getMovies();
    }, []);

    return (
        <div>
            <Hero />
            <SearchMovies onSubmit={searchSumbit} />
            <MoviesList movies={movies} />
            <div className="App">
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={totalPages}
                    previousLabel="<"
                    // pageClassName="page-item"
                    // pageLinkClassName="page-link"
                    // previousClassName="page-item"
                    // previousLinkClassName="page-link"
                    // nextClassName="page-item"
                    // nextLinkClassName="page-link"
                    breakLabel="..."
                    // breakClassName="page-item"
                    // breakLinkClassName="page-link"
                    // containerClassName="pagination"
                    // activeClassName="active"
                    // renderOnZeroPageCount={null}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </div>
    );
};

export default Catalog;
