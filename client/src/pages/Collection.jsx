import React, { useEffect, useMemo, useState } from 'react'
import Item from '../components/Item'
import { useAppContext } from '../context/AppContext'
import SearchInput from '../components/SearchInput'

const Collection = () => {
  const { products, searchQuery } = useAppContext()
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])
  const [selectedSort, setSelectedSort] = useState('relevant')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const allCategories = useMemo(() => ['Hair Care', 'Body Care', 'Face Care'], [])

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const filteredByCategory = useMemo(() => {
    if (category.length === 0) return products
    return products.filter((product) => category.includes(product.category))
  }, [products, category])

  const availableTypes = useMemo(() => {
    return [...new Set(filteredByCategory.map((product) => product.type))].sort()
  }, [filteredByCategory])

  useEffect(() => {
    setType((prev) => prev.filter((item) => availableTypes.includes(item)))
  }, [availableTypes])

  const filteredProducts = useMemo(() => {
    const search = searchQuery.trim().toLowerCase()

    let filtered = products.filter((product) => product.inStock)

    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search)
      )
    }

    if (category.length) {
      filtered = filtered.filter((product) => category.includes(product.category))
    }

    if (type.length) {
      filtered = filtered.filter((product) => type.includes(product.type))
    }

    if (selectedSort === 'low') {
      filtered = [...filtered].sort(
        (a, b) => Math.min(...Object.values(a.price)) - Math.min(...Object.values(b.price))
      )
    }

    if (selectedSort === 'high') {
      filtered = [...filtered].sort(
        (a, b) => Math.min(...Object.values(b.price)) - Math.min(...Object.values(a.price))
      )
    }

    return filtered
  }, [products, searchQuery, category, type, selectedSort])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, category, type, selectedSort])

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage))
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredProducts, currentPage])


  return (
    <div className='max-padd-container !px-0 mt-20'>
      <div className='flex flex-col sm:flex-row gap-8 mb-16'>
        <div className='min-w-72 bg-primary p-4 pl-6 lg:pl-12 rounded-r-xl'>
          <div className='px-4 py-3 mt-4 bg-white rounded-xl'>
            <SearchInput />
            <div className='mt-4 bg-white rounded-xl'>
              <h5 className='h5 mb-4'>Sort By Price</h5>
              <select
                value={selectedSort}
                onChange={(event) => setSelectedSort(event.target.value)}
                className='border border-slate-900/10 outline-none text-gray-30 medium-14 h-8 w-full px-2 rounded-md'
              >
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
                  <input
                    onChange={(event) => toggleFilter(event.target.value, setCategory)}
                    type='checkbox'
                    value={cat}
                    checked={category.includes(cat)}
                    className='w-3'
                  />
                  {cat}
                </label>
              ))}

            </div>
          </div>
          <div className='pl-5 py-3 mt-6 bg-white rounded-xl'>

            <h5 className='h5 mb-4'>Types</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {availableTypes.map((typ) => (
                <label key={typ} className='flex gap-2 medium-14 text-gray-30'>
                  <input 
                    onChange={(event) => toggleFilter(event.target.value, setType)} 
                    type='checkbox' 
                    value={typ} 
                    checked={type.includes(typ)} 
                    className='w-3'
                  />
                  {typ}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Filtered Products */}
        <div className='max-sm:px-10 sm:pr-10 flex-1'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) : (
              <p className='capitalize'>No products found for selected filters.</p>
            )}
          </div>

          <div className='flexCenter flex flex-wrap mt-14 mb-10 gap-4'>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`btn-secondary !py-1 !px-3 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`btn-light !py-1 !px-3 ${currentPage === index + 1 ? 'bg-tertiary text-white' : ''}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`btn-secondary !py-1 !px-3 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Collection
