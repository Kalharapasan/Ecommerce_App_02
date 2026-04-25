import React, { useContext, useEffect, useState } from 'react'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'

const AddressForm = () => {

  const { navigate, user, method, setMethod } = useAppContext()
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  })

  return (
    <div>
      {/* Container */}
      <div>
        {/* Left Side */}
        <form>
          <Title title1={"Delivery"} title2={"Information"} titleStyles={"pb-5"} />
          <div className='flex gap-3'>
            <input value={address.firstName} name='firstName' type='text' placeholder='First Name' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
            <input value={address.lastName} name='lastName' type='text' placeholder='Last Name' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
          </div>
          <input value={address.email} name='email' type='email' placeholder='Email' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none' />
          <input value={address.phone} name='phone' type='text' placeholder='Phone Number' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none' />
          <input value={address.street} name='street' type='text' placeholder='Street' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none' />
          <div className='flex gap-3'>
            <input value={address.city} name='city' type='text' placeholder='City' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
            <input value={address.state} name='state' type='text' placeholder='State' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
          </div>
          <div className='flex gap-3'>
            <input value={address.zipcode} name='zipcode' type='text' placeholder='Zip Code' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
            <input value={address.country} name='country' type='text' placeholder='Country' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
          </div>
          <button type='submit' className='btn-dark rounded-md w-1/2 mt-2'>Add Address</button>
        </form>
        {/* Right Side */}
        
      </div>
    </div>
  )
}

export default AddressForm