import { configureStore } from '@reduxjs/toolkit';
import { frontPageReducer } from '../features/FrontPage/frontPageSlice'
import { newsandupdatesReducer } from '../features/NewsAndUpdates/newsSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';

export const store = configureStore({
    reducer: {
        frontPage: frontPageReducer,
        newandUpdates: newsandupdatesReducer,
        favorites: favoritesReducer
    }
});