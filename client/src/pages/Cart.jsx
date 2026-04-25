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

  return (
    <div>Cart</div>
  )
}

export default Cart