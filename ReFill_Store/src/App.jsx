import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/collections' element={<Collections/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/product/:productId' element={<Product/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/place-order' element={<PlaceOrder/>}/>
      <Route  path='/orders' element={<Orders/>}/>

    </Routes>
    <Footer/>
    </div>
  )
}

export default App