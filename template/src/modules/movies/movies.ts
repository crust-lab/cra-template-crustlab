import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchMovies} from '../../api/movies';
import {RootState} from '../../store';

export type Movie = {
    title: string,
    director: string,
    release_date: string,
    episode_id: number
};

type MoviesState = {
    loading: boolean,
    selected: number | null,
    movies: Array<Movie>
}

const initialState: MoviesState = {
    loading: true,
    selected: null,
    movies: []
};

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async () => {
        const response = await fetchMovies();
        return response.data.results;
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        select: (state, action: PayloadAction<number>) => {
            state.selected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })

    }
});

export const { select } = moviesSlice.actions;
export const getSelectedMovie = (state: RootState) => state.movies.selected;
export const selectMovies = (state: RootState) => state.movies.movies;
export const isLoading = (state: RootState) => state.movies.loading;

export default moviesSlice.reducer;
