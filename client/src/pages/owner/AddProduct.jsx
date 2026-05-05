import React, { useState } from 'react'
import { assets } from '../../assets/data'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'

const AddProduct = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    popular: false,
  })

  const [sizePrices, setSizePrices] = useState([])
  const [newSize, setNewSize] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [loading, setLoading] = useState(false)

  const allCategories = ["Hair Care", "Body Care", "Face Care"]
  const allTypes = [
    "Body-Spray",
    "Cleanser",
    "Hand-Wash",
    "Lip-Product",
    "Lotion",
    "Oil",
    "Perfume",
    "Serum",
    "Shampoo",
  ]

  const addSizePrice = () => {
    if (!newSize || !newPrice) {
      toast.error("Please enter size and price")
      return
    }
    if (sizePrices.some((sp) => sp.size === newSize)) {
      toast.error("Size already exists")
      return
    }
    setSizePrices([...sizePrices, { size: newSize, price: parseFloat(newPrice) }])
    setNewSize("")
    setNewPrice("")

  }

  return (
    <div>AddProduct</div>
  )


}

export default AddProduct