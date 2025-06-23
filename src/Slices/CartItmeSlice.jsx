import { createSlice } from "@reduxjs/toolkit";



const cartItemSlice=createSlice(
    {

        name:'cart',
        initialState:{
            name:"",
            price:"",
            quantity:"",
            cartItems:localStorage.getItem("cartItems")
            ? (localStorage.getItem("cartItems"))
            :[]

        },

        reducers:{

            addtoCart:(state,action) =>{

                const tempProduct={...action.payload};
                state.cartItems.push(tempProduct)
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))


            },

            clearCart:(state)=>{
                state.cartItems=[];
                localStorage.removeItem("cartItems");

            }




        }


    }
)


export default cartItemSlice.reducer;
export const {addtoCart,clearCart}=cartItemSlice.actions;