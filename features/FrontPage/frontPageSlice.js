import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../shared/baseURL';

export const fetchFrontPage = createAsyncThunk(
    'frontPage/fetchFrontPage',
    async () => {
        const response = await fetch(baseURL + 'frontPage');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const frontPageSlice = createSlice({
    name: 'frontPage',
    initialState: { isLoading: true, errMess: null, frontPageArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFrontPage.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFrontPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.frontPageArray = action.payload;
            })
            .addCase(fetchFrontPage.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const frontPageReducer = frontPageSlice.reducer;
