import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import moviesApi from "../../common/api/moviesApi";
import { APIKey } from "../../common/api/MoviesApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    const response = await moviesApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async () => {
    const showText = "friends";
    const response = await moviesApi.get(
      `?apikey=${APIKey}&s=${showText}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMoviesOrShows = createAsyncThunk(
  "ShowsOrMovies/fetchAsyncShows",
  async (id) => {
    const response = await moviesApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMoviesOrShows: {},
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectedMoviesOrShows: (state) => {
      state.selectedMoviesOrShows = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("movie pending..");
    },
    [fetchAsyncShows.pending]: () => {
      console.log("show pending..");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("movies fetched successfully..");
      return {
        ...state,
        movies: payload,
      };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("series fetched successfully..");
      return {
        ...state,
        shows: payload,
      };
    },
    [fetchAsyncMoviesOrShows.fulfilled]: (state, { payload }) => {
      console.log("selected series or movies fetched successfully..");
      return {
        ...state,
        selectedMoviesOrShows: payload,
      };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("movie rejected..");
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("show rejected..");
    },
  },
});

export const { removeSelectedMoviesOrShows } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMoviesOrShows = (state) =>
  state.movies.selectedMoviesOrShows;
export default moviesSlice.reducer;
