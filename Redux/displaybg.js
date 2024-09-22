import { createSlice } from "@reduxjs/toolkit";



const displayBG = createSlice({
    name:"displayBG",
    initialState:[],
    reducers:{
        addBG:(state , action)=>{
            return [action.payload]
        }
    }
})

export default displayBG.reducer;
export const  { addBG } = displayBG.actions;
