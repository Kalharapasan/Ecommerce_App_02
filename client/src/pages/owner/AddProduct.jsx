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

  return (
    <div>AddProduct</div>
  )


}

export default AddProduct