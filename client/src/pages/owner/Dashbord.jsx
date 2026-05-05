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

        <div className="flexStart gap-4 bg-primary rounded-2xl p-5 md:p-8 shadow-sm">
          <img src={assets.house} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{dashboardData?.totalOrders?.toString().padStart(2, "0")}</h4>
            <h5 className='h5 text-secondary'>Total Orders</h5>
          </div>
        </div>

        <div className="flexStart gap-4 bg-primary rounded-2xl p-5 md:p-8 shadow-sm">
          <img src={assets.dollar} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{dashboardData?.totalRevenue?.toString().padStart(2, "0")}</h4>
            <h5 className='h5 text-secondary'>Total Earning</h5>
          </div>
        </div>

      </div>
    </div>
  )
}
