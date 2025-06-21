
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import {Provider} from "react-redux"
import {store} from './Store/Store'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Login from './components/Login'
import {persistor} from './Store/Store'
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react'
import PaymentSuccess from './components/PaymentSuccess'
function App() {
 

  // let persistor=persistStore(store);


  return (
    <>

        
          
        <Provider store={store}>
          <PersistGate persistor={persistor}>

          

        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/" element={<Home/>}/>
           <Route path="/success" element={<PaymentSuccess/>}/>
           
          </Routes>
          </BrowserRouter>
          </PersistGate>
        </Provider>
        
      
        
     
      
    </>
  )
}

export default App
