import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        isRentant:true,
        isAuthenticated:false,
        
    },
    reducers:{
        updateIsAuthenticated:(state)=>{state.isAuthenticated=true},

        updateIsRentant:(state)=>{state.isRentant=!state.isRentant},

        
    }
});

export const {updateIsAuthenticated,updateIsRentant} = userSlice.actions;
export default userSlice.reducer;

