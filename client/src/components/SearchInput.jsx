import React from 'react'
import { assets } from '../assets/data'
import { useAppContext } from './context/AppContext'

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useAppContext()

  return (
    <div className='py-4'>
      <div className="text-center">
        <div className='inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white ring-1 ring-slate-900/20 w-full'>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search here...'/>
          <div>
            <img src={assets.search} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInput