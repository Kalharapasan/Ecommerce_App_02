import React, { useMemo } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'

const Cart = () => {

  const { navigate, products, currency, cartItems, setCartItems, addToCart } = useAppContext()
  const cartData = useMemo(() => {
    const tempData = []
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size
          })
        }
      }
    }
    return tempData
  }, [cartItems])

  const increment = (id, size) => {
    addToCart(id, size)
  }

  const decrement = (id, size) => {
    setCartItems((prev) => {
      const next = structuredClone(prev)
      if (!next[id] || !next[id][size]) return prev

      if (next[id][size] === 1) {
        delete next[id][size]
        if (Object.keys(next[id]).length === 0) {
          delete next[id]
        }
      } else {
        next[id][size] -= 1
      }

      return next
    })
  }

  const removeItem = (id, size) => {
    setCartItems((prev) => {
      const next = structuredClone(prev)
      if (!next[id] || !next[id][size]) return prev
      delete next[id][size]
      if (Object.keys(next[id]).length === 0) {
        delete next[id]
      }
      return next
    })
  }


  return products && cartItems ? (
    <div className='max-padd-container py-16 pt-28 bg-primary'>
      <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
        {/* Left Side */}
        <div className='flex flex-[2] flex-col gap-3 text-[95%]'>
          <Title title1={"Cart"} title2={"Overview"} titleStyles={"pb-5"} />
          <div className='grid grid-cols-[6fr_2fr_1fr] font-medium bg-white p-2 rounded-xl'>
            <h5 className='h5 text-left'>Product Details</h5>
            <h5 className='h5 text-center'>Subtotal</h5>
            <h5 className='h5 text-center'>Action</h5>
          </div>

          {cartData.length === 0 && (
            <div className='rounded-xl bg-white p-5'>
              <p>Your cart is empty.</p>
              <button onClick={() => navigate('/collection')} className='btn-dark mt-4'>Continue Shopping</button>
            </div>
          )}

          {cartData.map((item, i) => {
            const product = products.find((p) => p._id === item._id)
            if (!product) return null

            const quantity = cartItems[item._id]?.[item.size] || 0
            const subtotal = (product.price[item.size] || 0) * quantity

            return (
              <div key={`${item._id}-${item.size}-${i}`} className='grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-xl bg-white p-3'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-lg bg-primary p-2'>
                    <img src={product.images[0]} alt="" className='w-20' />
                  </div>
                  <div>
                    <h5>{product.title}</h5>
                    <p>Size: {item.size}</p>
                    <div className='flexBetween'>
                      <div className='mt-2 flex items-center gap-2'>
                        <button onClick={() => decrement(item._id, item.size)} className='btn-dark !p-2'>
                          <img src={assets.minus} alt="" width={11} className='invert' />
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => increment(item._id, item.size)} className='btn-dark !p-2'>
                          <img src={assets.plus} alt="" width={11} className='invert' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>{currency}{subtotal}.00</div>

                <button onClick={() => removeItem(item._id, item.size)}>
                  <img src={assets.cartRemove} alt="" width={22} />
                </button>
              </div>
            )
          })}

        </div>
        {/* Right Side */}
        <div className='flex flex-1 flex-col'>
          <CartTotal />
        </div>
      </div>
    </div>
  ) : null


}

export default Cart