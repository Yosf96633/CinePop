import { configureStore } from "@reduxjs/toolkit";
import displaybgReducer from "./displaybg";
import trendingmoviesReducer from "./trendingmovies";

import trendingTvShowReducer from "./trendingtvShow";
export const store = configureStore({
  reducer: {
    displaybg: displaybgReducer,
    trendingmovies: trendingmoviesReducer,
    trendingTvShow: trendingTvShowReducer,
  },
});
