import React, { useReducer } from 'react'
import NavBar from './components/NavBar'
import Product from './components/Product'
import Cart from './components/Cart'
import Context, { CartReducer,CartInit } from './stroe'



const App = () => {
  const reducer = useReducer(CartReducer, CartInit);

  return (
  <Context.Provider value={reducer}>
      <NavBar/>
      <div className='container mt-4'>
        <div className='row'>
          {/*  Product  */}
          <div className='col-md-7'>
           <Product/>
          </div>
          {/*  Cart  */}
          <div className='col-md-5'>
           <Cart/>
          </div>
        </div>
      </div>
  </Context.Provider>
  )
}

export default App
