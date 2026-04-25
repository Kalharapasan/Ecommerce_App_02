import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import {dummyProducts} from '../../assets/data'
 
 const AppContext =createContext()

export const AppContextProvider = ({children}) =>{

    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [cartItems, setCartItems] = useState({})
    const [method, setMethod] = useState("COD")
    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charges = 10; // 10 Dollars
    
    
    const {user} =  useUser()
    

    const fetchProducts = async () =>{
        setProducts(dummyProducts)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    const value = {navigate, user, products, currency, searchQuery, setSearchQuery, cartItems, setCartItems, method, setMethod, delivery_charges}

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    )
}

export const useAppContext =() => useContext(AppContext)