import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { frontPageReducer } from '../features/FrontPage/frontPageSlice'
import { newsandupdatesReducer } from '../features/NewsAndUpdates/newsSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const store = configureStore({
    reducer: persistCombineReducers(config, {
        frontPage: frontPageReducer,
        newandUpdates: newsandupdatesReducer,
        favorites: favoritesReducer
    }),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
});

export const persistor = persistStore(store);