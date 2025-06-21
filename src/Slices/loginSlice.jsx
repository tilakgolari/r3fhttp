import axios from "axios";
import {jwtDecode} from "jwt-decode"
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";




const initialState={

    token: localStorage.getItem("token"),
    userName:"",
    id:"",
    registerStatus:"",
    registerError:"",
    loginStatus:"",
    loginError:"",
    userLoaded: false,

}


export const loginUser=createAsyncThunk(
 
"auth/loginuser",

async(userCredential,{rejectWithValue}) =>{

    try{
       
        const token=await axios.post('http://r3f-env.eba-62zuape2.us-east-1.elasticbeanstalk.com/identity/token',userCredential);
        localStorage.setItem("token",token.data);
        return token.data;

         } catch(error){
        return rejectWithValue(error.response.data);
    }


    }

)





const authSlice=createSlice({

name:"auth",
initialState,
reducers:{

loadUser(state,action){

    const token=state.token;

    if(token)
    {

        const user=jwtDecode(token);

        return{
            ...state,
            token,
            userName:user.sub,
            userLoaded:false,
        }

    }
    else return{
        ...state,userLoaded:true
    }
  }
},

extraReducers:(builder) =>{

 builder.addCase(loginUser.pending,(state,action) =>{
    return{ ...state,loginStatus:"pending"};
 }),

 builder.addCase(loginUser.fulfilled,(state,action) =>{
    if(action.payload){

       const user=jwtDecode(action.payload);
       
       return{

        ...state,
        token: action.payload,
        userName:user.sub,
        loginStatus:"success",


       }
    } else return state;

 })


}



})

export const {loadUser} =authSlice.actions;
export default authSlice.reducer;