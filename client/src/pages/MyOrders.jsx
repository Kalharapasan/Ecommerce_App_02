import React, {useEffect, useState} from 'react'
import Title from '../components/Title'
import { useAppContext } from '../context/AppContext'
import { dummyOrdersData } from '../assets/data'

const MyOrders = () => {

  const {currency, user} = useAppContext()
  const [orders, setOrders] = useState([])

  const loadOrdersData = () => {
    setOrders(dummyOrdersData)
  }

  useEffect(()=>{
    if(user){
      loadOrdersData()
    }
  }, [user])

  return (
    <div>
      <Title title1={"Delivery"} title2={"Information"} titleStyles={"pb-10"} />
      {orders.map((order)=>(
        <div key={order._id}>
          
        </div>
      ))}
    </div>
  )
}

export default MyOrders