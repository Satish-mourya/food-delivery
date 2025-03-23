import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/placeorder'
import Footer from './components/footer/Footer'

 const App = () => {
   return (
    <>
     <div className='app'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/placeorder" element={<Placeorder/>}/>
       </Routes>
     </div>
     <Footer/>
     </>
   )
 }
 
 export default App
 