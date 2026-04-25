import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'
import { dummyAddress } from '../assets/data'

const CartTotal = () => {

    const { navigate, user, products, currency, cartItems, setCartItems, method, setMethod, delivery_charges, getCartCount, getCartAmount } = useAppContext()

    const [addresses, setAddresses] = useState(dummyAddress)
    const [showAddress, setShowAddress] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0])

    return (
        <div>
            <h3 className='bold-22'>Order Details <span className="bold-14 text-secondary">({getCartCount()}) Items</span></h3>
            <hr className='border-gray-300 my-5' />
            {/* Payment & Addresses */}
            <div>
                <div>
                    <div>Where to ship your order?</div>
                    <div>
                        <p>
                            {selectedAddress
                                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, ${selectedAddress.country}`
                                : "No address found"}
                        </p>
                        <button onClick={() => setShowAddress(!showAddress)} className=''>Change</button>
                        {showAddress && (
                            <div>
                                {addresses.map((address, index) => (
                                    <p key={index} onClick={() => { setSelectedAddress(address); setShowAddress(false) }}>
                                        {address.street}, {address.city}, {address.state}, {" "}
                                        {address.country}
                                    </p>
                                ))}
                                <p onClick={() => { navigate('/address-form'); scrollTo(0, 0) }}>Add Address</p>
                            </div>
                        )}
                    </div>
                </div>
                <hr className='border-gray-300 mt-5' />
                <div>
                    <h4 className='h4 mb-5'>Payment Method</h4>
                    <div>
                        <div onClick={() => setMethod("COD")}>
                            Cash On Delivery
                        </div>
                        <div onClick={() => setMethod("stripe")}>
                            Stripe
                        </div>
                    </div>
                </div>
                <hr className='border-gray-300 mt-5' />
            </div>
        </div>
    )
}

export default CartTotal