import { configureStore } from "@reduxjs/toolkit";
import displaybgReducer from "./displaybg";
import trendingmoviesReducer from "./trendingmovies";
import moviesReducer from "./movies"
import showsReducer from "./shows"
import trendingTvShowReducer from "./trendingtvShow";
import genreReducer from "./genre";
import sidebarReducer from "./sidebar";
export const store = configureStore({
  reducer: {
    displaybg: displaybgReducer,
    trendingmovies: trendingmoviesReducer,
    trendingTvShow: trendingTvShowReducer,
    movies: moviesReducer,
    shows: showsReducer,
    genre:genreReducer,
    sidebar:sidebarReducer,
    
  },
});
