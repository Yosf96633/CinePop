import { createSlice } from "@reduxjs/toolkit";



const genre = createSlice({
    name:"Genre",
    initialState:[],
    reducers:{
        add_genre:(state , action)=>{
            return [action.payload];
        }
    }
})

export default genre.reducer;
export const {
add_genre,
} = genre.actions