import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from '../../shared/baseURL';

export const fetchNews = createAsyncThunk(
    'newsandUpdates/fetchNews',
    async () => {
        const response = await fetch(baseURL + 'newsandUpdates');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const newsSlice = createSlice({
    name: 'newsandUpdates',
    initialState: { isLoading: true, errMess: null, newsArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.newsArray = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const newsandupdatesReducer = newsSlice.reducer;
