import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'

const Cart = () => {


  const { navigate, products, currency, cartItems } = useAppContext()
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            tempData.push({
              _id: itemId,
              size: size
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [products, cartItems])

  const increment = (id, size) => {

  }
  const decrement = (id, size) => {

  }


  return products && cartItems ? (
    <div>
      <div>
        {/* Left Side */}
        <div>
          <Title title1={"Cart"} title2={"Overview"} titleStyles={"pb-5"} />
          <div>
            <h5>Product Details</h5>
            <h5>Subtotal</h5>
            <h5>Action</h5>
          </div>
          {cartData.map((item, i) => {
            const product = product // Note: Looks like this needs to be defined based on your logic
            const quantity = cartItems // Note: Looks like this needs to be defined based on your logic
            return (
              <div key={i}>
                <div>
                  <div>
                    <img src={product.images[0]} alt="" className='w-20' />
                  </div>
                  <div>
                    <h5>{product.title}</h5>
                    <div>Size: <p>{item.size}</p></div>
                    <div className='flexBetween'>
                      <div>
                        <button><img src={assets.minus} alt="" width={11} className='invert' /></button>
                        <button><img src={assets.plus} alt="" width={11} className='invert' /></button>
                      </div>
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
                <div>{currency}{product.price[item.size] * quantity}.00</div>
                <button><img src={assets.cartRemove} alt="" width={22} /></button>
              </div>
            )
          })}

        </div>
        {/* Right Side */}
      </div>
    </div>
  ) : null


}

export default Cart