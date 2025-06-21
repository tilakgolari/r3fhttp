import { combineReducers,configureStore } from "@reduxjs/toolkit";
import colorReducer  from "../Slices/ColorSlice";
import authReducer from "../Slices/loginSlice";
import cartItemreducer from "../Slices/CartItmeSlice"

import modelReducer from "../Slices/ModelSlice"
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
  };

  const reducer=combineReducers({
    color: colorReducer,
    model:modelReducer,
    auth: authReducer,
    cart: cartItemreducer,
    
})


 const persistedReducer = persistReducer(persistConfig, reducer);



const store=configureStore({


        
        reducer:persistedReducer,
        
    
});

const persistor = persistStore(store);
export { store, persistor };