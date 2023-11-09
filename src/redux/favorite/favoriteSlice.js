import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favoriteMovies: [],
};

const favoriteMoviesSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => {
            console.log(action);
            state.favoriteMovies.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(
                item => item.id !== action.payload
            );
        },
    },
});

export const { addFavorite, removeFavorite } = favoriteMoviesSlice.actions;
export const favoriteReducer = favoriteMoviesSlice.reducer;
