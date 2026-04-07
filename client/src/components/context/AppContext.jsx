import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import {dummyProducts} from '../../assets/data'
 
 const AppContext =createContext()

export const AppContextProvider = ({children}) =>{

    const [products,setProducts] =useState([])
    const navigater =useNavigate()
    const {user} =  useUser()
    

    const fetchProducts = async () =>{
        setProducts(dummyProducts)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    const value = {navigater,user,products}

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    )
}

export const useAppContext =() => useContext(AppContext)