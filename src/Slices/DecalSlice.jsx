import { createSlice } from "@reduxjs/toolkit";

const initialState={
    decal:0,
};

const decalSlice=createSlice({

    name:"decal",
    initialState,
    reducers:{

        setDecal:(state,{payload})=>{
              state.decal=payload;  
        }


    }




})
export const {setDecal}=decalSlice.actions;
export default decalSlice.reducer;