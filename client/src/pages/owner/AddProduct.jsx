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

  const removeSizePrice = (size) => {
    setSizePrices(sizePrices.filter((sp) => sp.size !== size))
  }

  return (
    <div>
      <form>

        <div className='w-full'>
          <h5 className='h5'>Product Name</h5>
          <input type="text" placeholder='Type here...' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 mt-1 w-full' />
        </div>

        <div className='w-full'>
          <h5 className='h5'>Product Description</h5>
          <textarea type="text" placeholder='Type here...' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 mt-1 w-full' />
        </div>

        <div className="flex gap-4 flex-wrap">
          <div>
            <h5 className="h5">Category</h5>
            <select className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 mt-1 w-38'>
              <option value="">Select Category</option>
              {allCategories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <h5 className="h5">Types</h5>
            <select className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 mt-1 w-38'>
              <option value="">Select Type</option>
              {allTypes.map((t, index) => (
                <option key={index} value={t}>{t}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Size and Price Pairs */}
        <div className='w-full mt-4'>
          <h5 className='h5'>Sizes and Prices</h5>
          <div className='flex gap-4 mt-2'>
            <input
              type="text"
              placeholder='Size (e.g. 50ml)'
              className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-32'
            />
            <input
              type="number"
              placeholder='Price'
              className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-32'
            />
          </div>
        </div>




      </form>
    </div>
  )


}

export default AddProduct