import React ,{useEffect,useMemo,useState}from 'react'
import item from '../components/Item'
import { useAppContext } from '../components/context/AppContext'
import SearchInput from '../components/SearchInput'


const Collection = () => {

  const {products, searchQuery} = useAppContext()
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])
  const [selectedSort, setSelectedSort] = useState("relevant")
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [availableTypes, setAvailableTypes] = useState([])
  const itemsPerPage = 8

  return (
    <div>
      <div>
        {/* Filters Option */}
        <div>
          <SearchInput />
          <div>
            <h5 className='h5 mb-4'>Sort By</h5>
            <select>
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <h5 className='h5 mb-4'>Categories</h5>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
