import React from 'react'
import Header from "./components/Header"
import { Route, Routes, useLocation } from 'react-router-dom'
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
import Sidebar from './components/owner/Sidebar'
import { Dashbord } from './pages/owner/Dashbord'
import AddProduct from './pages/owner/AddProduct'
import ListProduct from './pages/owner/ListProduct'

const App = () => {

  const location = useLocation()
  const isOwnerPath = location.pathname.includes('owner')

  return (
    <main className='overflow-hidden text-tertiary'>
      {!isOwnerPath && <Header />}
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
        
        <Route path="/owner" element={<Sidebar />}> 
             <Route index element={<Dashbord />} />
             <Route path='/owner/add-product' element={<AddProduct />} />
             <Route path='/owner/list-product' element={<ListProduct />} />
        </Route>

      </Routes>
      {!isOwnerPath && <Footer />}
      
    </main >
  )
}

export default App
