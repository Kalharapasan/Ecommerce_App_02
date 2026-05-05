import React from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/AppContext'

const ListProduct = () => {

  const { products, currency, fetchProducts } = useAppContext()


  return (
    <div className=''>

      <div>

        <div>
          <h5>Image</h5>
          <h5>Title</h5>
          <h5>Category</h5>
          <h5>Category</h5>
        </div>
        
      </div>

    </div>
  )
}

export default ListProduct