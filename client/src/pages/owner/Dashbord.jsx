import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/data'
import toast from 'react-hot-toast'

export const Dashbord = () => {

  const { user, currency, axios, getToken } = useAppContext()
  const [dashboardData, setDashboardData] = useState({
    orders: [],
    totalOrders: 0,
    totalRevenue: 0,
  })

  const getDashboardData = async () => {
    try {
      const { data } = await axios.get('/api/orders/', { headers: { Authorization: `Bearer ${await getToken()}` } })

      if (data.success) {
        setDashboardData(data.dashboardData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const { data } = await axios.post('/api/orders/status', { orderId, status: e.target.value }, { headers: { Authorization: `Bearer ${await getToken()}` } })

      if (data.success) {
        await getDashboardData()
        toast.success(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      getDashboardData()
    }
  }, [user])

  return (
    <div className="p-5 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className='flexStart gap-7 p-5 bg-[#fff4d2] lg:min-w-56 rounded-xl'>
          <img src={assets.house} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{dashboardData?.totalOrders?.toString().padStart(2, "0")}</h4>
            <h5 className='h5 text-secondary'>Total Orders</h5>
          </div>
        </div>
        <div className='flexStart gap-7 p-5 bg-[#d2fff0] lg:min-w-56 rounded-xl'>
          <img src={assets.dollar} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{currency}{dashboardData?.totalRevenue || 0}</h4>
            <h5 className='h5 text-secondary'>Total Earnings</h5>
          </div>
        </div>
      </div>

      {/* ALL Orders/Sales */}
      <div className='bg-primary mt-4'>
        {dashboardData.orders.map((order) => (
          <div key={order._id} className='bg-white p-3 mb-4 rounded-2xl'>

            {/* Product List */}
            {order.items.map((item, idx) => (
              <div key={idx} className='text-gray-700 flex flex-col lg:flex-row gap-4 mb-3'>
                <div className='flex flex-[2] gap-x-3'>
                  <div className='flexCenter bg-primary rounded-xl'>
                    <img src={item.product.images[0]} alt="" className='max-h-20 max-w-20 object-contain' />
                  </div>
                  <div className="block w-full">
                    <h5 className="h5 uppercase line-clamp-1">{item.product.title}</h5>
                    <div className='flex flex-wrap gap-3 max-sm:gap-y-1 mt-1'>
                      <div className='flex items-center gap-x-2'>
                        <h5 className='medium-14'>Price:</h5>
                        <p>{currency}{item.product.price[item.size]}</p>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <h5 className='medium-14'>Quantity:</h5>
                        <p>{item.quantity}</p>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <h5 className='medium-14'>Size:</h5>
                        <p>{item.size}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Order Summary */}
            <div className='border-t border-gray-200 pt-4 mt-4'>
              <div className='flex justify-between items-start gap-4 mb-4'>
                <div className='flex-1'>
                  <p className='text-sm text-gray-800 mb-2'>
                    <span className='font-semibold'>OrderId:</span> <span className='text-gray-600'>{order._id}</span>
                  </p>
                  <p className='text-sm text-gray-800 mb-2'>
                    <span className='font-semibold'>Customer:</span> <span className='text-gray-600'>{order.address.firstName} {order.address.lastName}</span>
                    <span className='ml-6 font-semibold'>Phone:</span> <span className='text-gray-600'>{order.address.phone}</span>
                  </p>
                  <p className='text-sm text-gray-800 mb-2'>
                    <span className='font-semibold'>Address:</span> <span className='text-gray-600'>
                      {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                    </span>
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-sm font-semibold text-gray-800 mb-2'>Status:</p>
                  <select onChange={(e) => statusHandler(e, order._id)} value={order.status} className='text-sm p-1 border border-gray-300 rounded bg-white cursor-pointer min-w-28 text-gray-700 font-medium'>
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-wrap gap-6 text-sm text-gray-700'>
                <p>
                  <span className='font-semibold'>Payment Status:</span> <span className='text-gray-600 ml-1'>{order.isPaid ? "Done" : "Pending"}</span>
                </p>
                <p>
                  <span className='font-semibold'>Method:</span> <span className='text-gray-600 ml-1'>{order.paymentMethod}</span>
                </p>
                <p>
                  <span className='font-semibold'>Date:</span> <span className='text-gray-600 ml-1'>{new Date(order.createdAt).toDateString()}</span>
                </p>
                <p>
                  <span className='font-semibold'>Amount:</span> <span className='font-semibold text-gray-800 ml-1'>{currency}{order.amount}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
