import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (favorites, action) => {
            if (favorites.includes(action.payload)){
                return favorites.filter((favorite) => favorite !== action.payload);
            }
            else {
                favorites.push(action.payload);
            }
        }
    }
})

export const { toggleFavorite } = favoriteSlice.actions;
export const favoritesReducer = favoriteSlice.reducer;