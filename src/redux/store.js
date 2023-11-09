import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { favoriteReducer } from './favorite/favoriteSlice';

const favoritePersistConfig = {
    key: 'favorite',
    storage,
    whitelist: ['favoriteMovies'],
};

export const store = configureStore({
    reducer: {
        favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
