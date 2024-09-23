import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
  name: "Movies",
  initialState: [],
  reducers: {
    add_movies: (state, action) => {
      return [action.payload];
    },
  },
});

export default movies.reducer;
export const { add_movies } = movies.actions;
