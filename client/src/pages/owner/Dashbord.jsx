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
    <div>
      <div>
        <div>
          <img src={assets.house} alt="" className='hidden sm:flex w-8' />
          <div>
            <h4 className='h4'>{dashboardData?.totalOrders?.toString()}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
