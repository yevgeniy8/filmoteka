import axios from 'axios';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg2NjM4OTY3NWNmMzZhZmY2ODRhZjU5ZGMzOGFkNCIsInN1YiI6IjY0YTZiMWExYzNiZmZlMDBhZTc5OWRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_1sw5qXcrHMQHgqFBZg1uNM0S3Xq0grh2X0uJDSrMk',
    },
};

export const getTrendDayMovies = async () => {
    const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
    );
    return response.data;
};

export const getDetaliesInfMovie = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
    );
    return response.data;
};

export const getTrendWeekMovies = async () => {
    const response = await axios(
        'https://api.themoviedb.org/3/trending/movie/week?language=en-US',
        options
    );
    return response.data;
};

export const getUpcomingMovies = async () => {
    const response = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        options
    );
    return response.data;
};

export const getGenre = async () => {
    const response = await axios.get(
        'https://api.themoviedb.org/3/genre/movie/list?language=en',
        options
    );
    return response.data;
};

export const getMoviesForName = async movie => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        options
    );
    return response.data;
};

export const getMovieTrailer = async id => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        // `https://api.themoviedb.org/3/movie/${id}/videos?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDg2NjM4OTY3NWNmMzZhZmY2ODRhZjU5ZGMzOGFkNCIsInN1YiI6IjY0YTZiMWExYzNiZmZlMDBhZTc5OWRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A_1sw5qXcrHMQHgqFBZg1uNM0S3Xq0grh2X0uJDSrMk&language=en-US`,
        options
    );

    return response.data;
};
