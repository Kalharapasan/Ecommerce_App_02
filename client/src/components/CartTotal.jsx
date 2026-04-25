import React, {useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'
import { dummyAddress } from '../assets/data'

const CartTotal = () => {

  const {navigate, user, products, currency, cartItems, setCartItems, method, setMethod, delivery_charges, getCartCount, getCartAmount} = useAppContext()

  const [addresses, setAddresses] = useState(dummyAddress)
  const [showAddress, setShowAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0])

  return (
    <div>CartTotal</div>
  )
}

export default CartTotal