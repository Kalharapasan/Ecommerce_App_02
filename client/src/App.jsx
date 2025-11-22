import React from 'react'
import Header from "./components/Header"
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'

const App = () => {
  return (
    <main>
      <Header />
      <Routes>

        <Route path='/'  element={<Home />}/>
        <Route path='/collection' element={<Collection />} />

      </Routes>
    </main>
  )
}

export default App
