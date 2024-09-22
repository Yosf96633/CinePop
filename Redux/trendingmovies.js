import { createSlice } from "@reduxjs/toolkit";



const trendingMovies = createSlice({
    name:"Trending Movies",
    initialState:[],
    reducers:{
        addTrendingMovies:(state , action)=>{
          return [action.payload];
        }
    }
})


export default trendingMovies.reducer;
export const  { addTrendingMovies } = trendingMovies.actions;