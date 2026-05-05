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
          <h5>Price</h5>
          <h5>InStock</h5>
        </div>
        {/* Product list */}
        {products.map((product) => (
          <div key={product._id} className=''>
            <img src={product.images[0]} alt="" className='w-12 bg-primary rounded' />
            <h5 className="text-sm font-semibold">{product.title}</h5>
            <p className="text-sm font-semibold">{product.category}</p>
            <div className="text-sm font-semibold">{product.price}</div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default ListProduct