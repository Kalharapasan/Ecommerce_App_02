import React, { useState } from 'react'
import { assets } from '../../assets/data'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'

const AddProduct = () => {

  const { axios, getToken } = useAppContext()
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

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Check if all inputs are filled
    if (
      !inputs.title ||
      !inputs.description ||
      !inputs.category ||
      !inputs.type
    ) {
      // Handle error or return here
      toast.error("Please fill all required fields")
      return;
    }

    if (sizePrices.length === 0) {
      toast.error("Please add at least one size and price");
      return;
    }

    const hasImage = Object.values(images).some((img) => img !== null);
    if (!hasImage) {
      toast.error("Please upload at least one image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData()

      const prices = {};
      const sizes = []
      sizePrices.forEach((sp) => {
        prices[sp.size] = sp.price
        sizes.push(sp.size)
      })

      const productData = {
        title: inputs.title,
        description: inputs.description,
        category: inputs.category,
        type: inputs.type,
        popular: inputs.popular,
        price: inputs.price,
        sizes: inputs.sizes,
      }

      formData.append("productData", JSON.stringify(productData))

      // Adding images to FormData
      Object.keys(images).forEach((key) => {
        if (images[key]) {
          formData.append("images", images[key])
        }
      })

      const { data } = await axios.post("/api/products", formData, { headers: { Authorization: `Bearer ${await getToken()}` } })

      if (data.success) {
        toast.success(data.message)
        //Reset form after success
        setInputs({
          title: "",
          description: "",
          category: "",
          type: "",
          popular: false,
        })
        setSizePrices([])
        setImages({
          1: null,
          2: null,
          3: null,
          4: null,
        })
      } else {
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-primary shadow rounded-xl'>
      <form className='flex flex-col gap-y-5 px-2 text-sm w-full lg:w-11/12'>

        <div className='w-full'>
          <label className='h5 block mb-2'>Product Name</label>
          <input
            onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
            value={inputs.title}
            type="text" placeholder='Type here...'
            className='px-4 py-2.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-full focus:outline-none focus:ring-2 focus:ring-secondary'
          />
        </div>

        <div className='w-full'>
          <label className='h5 block mb-2'>Product Description</label>
          <textarea
            onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
            value={inputs.description}
            type="text"
            rows={5}
            placeholder='Type here...'
            className='px-4 py-2.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-full min-h-24 focus:outline-none focus:ring-2 focus:ring-secondary'
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="h5 block mb-2">Category</label>
            <select
              onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
              value={inputs.category}
              className='px-4 py-2.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-full focus:outline-none focus:ring-2 focus:ring-secondary'
            >
              <option value="">Select Category</option>
              {allCategories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="h5 block mb-2">Types</label>
            <select className='px-4 py-2.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-full focus:outline-none focus:ring-2 focus:ring-secondary'>
              <option value="">Select Type</option>
              {allTypes.map((t, index) => (
                <option key={index} value={t}>{t}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Size and Price Pairs */}
        <div className='w-full border-t pt-5'>
          <label className='h5 block mb-3'>Sizes and Prices</label>
          <div className='flex gap-3 mb-4'>
            <input
              onChange={(e) => setNewSize(e.target.value)}
              value={newSize}
              type="text"
              placeholder='Size (e.g. 50ml)'
              className='px-4 py-2.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 flex-1 focus:outline-none focus:ring-2 focus:ring-secondary'
            />
            <input
              onChange={(e) => setNewPrice(e.target.value)}
              value={newPrice}
              type="number"
              placeholder='Price'
              className='px-4 py-2.5 ring-1 ring-slate-900/10 rounded-lg bg-white text-gray-600 medium-14 w-28 focus:outline-none focus:ring-2 focus:ring-secondary'
            />
            <button type='button' onClick={addSizePrice} className='btn-secondary font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap'>Add</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {sizePrices.map((sp, index) => (
              <div key={index} className='flexStart justify-between p-3 bg-white ring-1 ring-slate-900/10 rounded-lg'>
                <div>
                  <span className='font-semibold'>{sp.size}</span>
                  <div className='text-secondary text-xs'>${sp.price}</div>
                </div>
                <button
                  type='button'
                  onClick={() => removeSizePrice(sp.size)}
                  className='text-red-500 hover:text-red-700 font-bold'
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className='mt-5 border-t pt-5'>
            <label className='h5 block mb-3'>Product Images</label>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {Object.keys(images).map((key) => (
                <label
                  key={key}
                  htmlFor={`productImage${key}`}
                  className='ring-1 ring-slate-900/10 overflow-hidden rounded-lg cursor-pointer hover:ring-secondary transition-all'
                >
                  <input
                    onChange={(e) => setImages({ ...images, [key]: e.target.files[0] })}
                    type="file"
                    accept='image/*'
                    id={`productImage${key}`}
                    hidden
                  />
                  <div className='h-24 bg-white flexCenter'>
                    <img src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadIcon} alt="" className='w-12 overflow-hidden object-contain' />
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-5 border-t pt-5">
          <input type="checkbox" id="popular" onChange={(e) => setInputs({ ...inputs, propular: e.target.checked })} className='w-4 h-4 cursor-pointer' />
          <label htmlFor="popular" className="h5 cursor-pointer">Add to Popular</label>
        </div>

        <button type="submit" disabled={loading} className='btn-secondary font-semibold mt-6 px-6 py-3 rounded-lg w-full sm:w-auto'>
          {loading ? "Adding..." : "Add Product"}
        </button>

      </form>
    </div>
  )
}

export default AddProduct