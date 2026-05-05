import React from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'

const ListProduct = () => {

  const { products, currency, fetchProducts } = useAppContext()

  
  return (
    <div>ListProduct</div>
  )
}

export default ListProduct