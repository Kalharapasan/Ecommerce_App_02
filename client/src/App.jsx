import React from 'react'
import Header from "./components/Header"
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import ProductDetails from './pages/Productdetails'

const App = () => {
  return (
    <main className='overflow-hidden text-tertiary'>
      <Header />
      <Routes>

        <Route path='/'  element={<Home />}/>
        <Route path='/collection' element={<Collection />} />
        <Route path='/collection/:productId' element={<ProductDetails />} />

      </Routes>
      <Footer/>
    </main>
  )
}

export default App
