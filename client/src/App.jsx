import React from 'react'
import Header from "./components/Header"
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import ProductDetails from './pages/Productdetails'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import AddressForm from './pages/AddressForm'
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Toaster position='bottom-right' />
      <Routes>

        <Route path='/'  element={<Home />}/>
        <Route path='/collection' element={<Collection />} />
        <Route path='/collection/:productId' element={<ProductDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/address-form' element={<AddressForm />} />
        <Route path="/owner" element={<Sidebar />} />

      </Routes>
      <Footer/>
    </main>
  )
}

export default App
