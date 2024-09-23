import { createSlice } from "@reduxjs/toolkit";



const sidebar = createSlice({
    name:"Side Bar",
    initialState:false,
    reducers:{
        toggle:(state , action)=>{
             return action.payload
        }
    }
})


export default sidebar.reducer;
export const {
    toggle,
} = sidebar.actions;