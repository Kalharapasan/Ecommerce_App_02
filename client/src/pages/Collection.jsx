import React ,{useEffect,useMemo,useState}from 'react'
import item from '../components/Item'
import { useAppContext } from '../components/context/AppContext'
import SearchInput from '../components/SearchInput'


const Collection = () => {

  const {products,searchQuery} = useAppContext();

  return (
    <div>
      <h1>Collection Page</h1>
    </div>
  )
}

export default Collection
