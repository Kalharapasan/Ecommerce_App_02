import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets, dummyDashboardData } from '../../assets/data'
import toast from 'react-hot-toast'

export const Dashbord = () => {

  const { user, currency } = useAppContext()
  const [dashboardData, setDashboardData] = useState({
    orders: [],
    totalOrders: 0,
    totalRevenue: 0,
  })

  const getDashboardData = () => {
    setDashboardData(dummyDashboardData)
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

        <div className='flexStart gap-7 p-5 bg-[#fff4d2] lg:min-w-56 rounded-xl'>
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
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-t border-gray-300 pt-3'>
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-x-2'>
                  <h5 className='medium-14'>Size:</h5>
                  <p className='text-gray-400 text-xs break-all'>{order._id}</p>
                </div>
                <div className='flex gap-4'>
                  <div className='flex items-center gap-x-2'>
                    <h5 className='medium-14'>Payment Status:</h5>
                    <p className='text-gray-400 text-sm'>{order.isPaid ? "Done" : "Pending"}</p>
                    <div className='flex items-center gap-x-2'>
                      <h5 className='medium-14'>Method:</h5>
                      <p className='text-gray-400 text-xs break-all'>{order.paymentMethod}</p>
                    </div>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex items-center gap-x-2'>
                    <h5 className='medium-14'>Date:</h5>
                    <p className='text-gray-400 text-sm'>{new Date(order.createdAt).toDateString()}</p>
                  </div>
                  <div className='flex items-center gap-x-2'>
                    <h5 className='medium-14'>Amount:</h5>
                    <p className='text-gray-400 text-xs'>{currency}{order.amount}</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='flex items-center gap-2'>
                  <h5 className='medium-14'>Status:</h5>
                  <div className='flex items-center gap-1'>
                    <span className="min-w-2 h-2 rounded-full bg-green-500" />
                    <p>{order.status}</p>
                  </div>
                </div>
                <button className='btn-secondary !py-1 !text-xs rounded-sm'>Track Order</button>
              </div>
            </div>


          </div>
        ))}
      </div>


    </div>
  )
}
