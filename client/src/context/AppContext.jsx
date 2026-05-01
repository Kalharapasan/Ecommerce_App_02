import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/react'
import toast from 'react-hot-toast'
import { dummyProducts } from '../assets/data'
import axios from "axios"

const AppContext = createContext()
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

export const AppContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [cartItems, setCartItems] = useState({})
    const [method, setMethod] = useState("COD")
    const navigate = useNavigate()
    const currency = import.meta.env.VITE_CURRENCY
    const delivery_charges = 10; // 10 Dollars


    // Clerk
    const { user } = useUser()
    const { getToken } = useAuth()

    // Get the user Profile
    const getUser = async () => {
        try {
            const { data } = await axios.get('/api/user', {
                headers: {
                    Authorization: `Bearer ${await getToken}`
                }
            })
        } catch (error) {

        }
    }


    const syncedUserIdRef = useRef(null)

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

    // Update Cart Quantity
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
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

    useEffect(() => {
        const syncUser = async () => {
            if (!user?.id || syncedUserIdRef.current === user.id) return

            const backendUrl = import.meta.env.VITE_BACKEND_URL || ""
            const response = await fetch(`${backendUrl}/api/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: user.id,
                    email: user.primaryEmailAddress?.emailAddress,
                    username: user.fullName || user.firstName || user.username || "User",
                    image: user.imageUrl,
                }),
            })

            if (!response.ok) {
                throw new Error(`Failed to sync user: ${response.status}`)
            }

            syncedUserIdRef.current = user.id
        }

        syncUser().catch((error) => {
            syncedUserIdRef.current = null
            console.error(error)
        })
    }, [user])

    const value = { navigate, user, products, currency, searchQuery, setSearchQuery, cartItems, setCartItems, method, setMethod, delivery_charges, addToCart, getCartCount, getCartAmount, updateQuantity }

    return (
        <AppContext.Provider value={value} >{children}</AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)