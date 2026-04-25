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
        </div>
        {/* Right Side */}
      </div>
    </div>
  ) : null


}

export default Cart