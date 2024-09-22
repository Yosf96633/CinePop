import { createSlice } from "@reduxjs/toolkit";



const trendingtvShow= createSlice({
    name:"Trending Tv Show",
    initialState:[],
    reducers:{
        addTrendingTvShow:(state , action)=>{
          return [action.payload];
        }
    }
})


export default trendingtvShow.reducer;
export const  { addTrendingTvShow } = trendingtvShow.actions;