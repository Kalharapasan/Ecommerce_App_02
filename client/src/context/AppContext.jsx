import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import toast from 'react-hot-toast'
import { dummyProducts } from '../assets/data'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [cartItems, setCartItems] = useState({})
    const [method, setMethod] = useState("COD")
    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charges = 10; // 10 Dollars


    const { user } = useUser()

    // Add Product to the cart
    const addToCart = (itemId, size) => {
        if (!size) return toast.error("Please select a size first")
        let cartData = structuredClone(cartItems)
        cartData[itemId] = cartData[itemId] || {}
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1
        setCartItems(cartData)
    }

    // Get Cart Count
    const getCartCount = () => {
        let count = 0
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                count += cartItems[itemId][size]
            }
        }
        return count
    }

    // Get Cart Amount
    const getCartAmount = () => {
        let total = 0
        for (const itemId in cartItems) {
            const product = products.find(p => p._id === itemId)
            if (!product) continue
            for (const size in cartItems[itemId]) {
                total += product.price[size] * cartItems[itemId][size]
            }
        }
        return total
    }

    const fetchProducts = async () => {
        setProducts(dummyProducts)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const value = { navigate, user, products, currency, searchQuery, setSearchQuery, cartItems, setCartItems, method, setMethod, delivery_charges, addToCart, getCartCount }

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)