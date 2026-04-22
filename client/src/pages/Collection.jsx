import React, { useEffect, useMemo, useState } from 'react'
import Item from '../components/Item'
import { useAppContext } from '../components/context/AppContext'
import SearchInput from '../components/SearchInput'


const Collection = () => {

  const { products, searchQuery } = useAppContext()
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])
  const [selectedSort, setSelectedSort] = useState("relevant")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [availableTypes, setAvailableTypes] = useState([])
  const itemsPerPage = 8

  // Predefined Categories list
  const allCategories = useMemo(() => ["Hair Care", "Body Care", "Face Care"], [])

  // Reusable Function to toggle filter values
  const toggleFilter = (value, setState) => {
    setState((prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value])
  }

  // Dynamically update types based on selected categories
  useEffect(() => {
    const selectedCats = category.length > 0 ? category : allCategories;
    const filteredProds = products.filter((p) => selectedCats.includes(p.category))
    const typesSet = new Set(filteredProds.map((p)=>p.type))
  })

  return (
    <div className='max-padd-container !px-0 mt-20'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16'>
        <div className='min-w-72 bg-primary p-4 pl-6 lg:pl-12 rounded-r-xl'>
          {/* Filters Option */}
          <div className='px-4 py-3 mt-4 bg-white rounded-xl'>
            <SearchInput />
            <div className='mt-4 bg-white rounded-xl'>
              <h5 className='h5 mb-4'>Sort By Price</h5>
              <select className='border border-slate-900/10 outline-none text-gray-30 medium-14 h-8 w-full px-2 rounded-md'>
                <option value="relevant">Relevant</option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className='pl-5 py-3 mt-4 bg-white rounded-xl'>
            <h5 className='h5 mb-4'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>

              {allCategories.map((cat) => (
                <label key={cat} className='flex gap-2 medium-14 text-gray-30'>
                  <input type="checkbox" value={cat} className='w-3' />
                  {cat}
                </label>
              ))}

            </div>
          </div>
          <div className='pl-5 mt-6 bg-white rounded-xl'>

            <h5 className='h5 mb-4'>Types</h5>
            <div>


            </div>

          </div>
        </div>

        {/* Right Side - Filtered Products */}
        <div className='max-sm:px-10 sm:pr-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {products.length > 0 ? (
              products.map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) : (
              <p className="capitalize">No products found for selected filters.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Collection
