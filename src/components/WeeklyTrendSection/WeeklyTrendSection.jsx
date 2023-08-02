import React, { useEffect, useState } from 'react';
import { getTrendWeekMovies } from 'server/api';

import { Ul } from './WeeklyTrendSection.styled';

const WeeklyTrendSection = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await getTrendWeekMovies();
            setMovies([data.results[0], data.results[1], data.results[2]]);
            console.log(data.results);
        };

        getMovies();
    }, []);

    return (
        <div>
            <Ul>
                {movies.map(item => (
                    <li key={item.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                            alt=""
                            // width={395}
                            // height={574}
                        />
                    </li>
                ))}
            </Ul>
        </div>
    );
};

export default WeeklyTrendSection;
