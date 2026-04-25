import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { useAppContext } from '../context/AppContext'
import { assets } from '../assets/data'

const Cart = () => {


  const { navigate, products, currency, cartItems } = useAppContext()
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    console.log(cartItems)
  }, [products, cartItems])

  return (
    <div>Cart</div>
  )
}

export default Cart