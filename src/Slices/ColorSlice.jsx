import { createSlice } from "@reduxjs/toolkit";





const initialState={
    current: "red",
    color:[],
    colorArray:[],
    material:{
        color:'#ff0000'
    }
};


const colorSlice=createSlice({

    name:"color",
    initialState,
    reducers:{
       

        clearColor:(state)=>{
            state.color=null;
        },
      
        setColor1:(state,action)=>{
            
            state.color=action.payload;
        },
    }


})

export const {clearColor,setColor1}=colorSlice.actions;
export default colorSlice.reducer;