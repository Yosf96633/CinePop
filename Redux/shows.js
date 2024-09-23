import { createSlice } from "@reduxjs/toolkit";

const shows = createSlice({
  name: "shows",
  initialState: [],
  reducers: {
    add_shows: (state, action) => {
      return [action.payload];
    },
  },
});

export default shows.reducer;
export const { add_shows } = shows.actions;
