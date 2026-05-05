import React, { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/data'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { UserButton } from '@clerk/react'

const Sidebar = () => {
  const { navigate, isOwner, user } = useAppContext()

  const navItems = [
    {
      path: "/owner",
      label: "Dashboard",
      icon: assets.dashboard,
    },
    {
      path: "/owner/add-product",
      label: "Add Product",
      icon: assets.squarePlus,
    },
    {
      path: "/owner/list-product",
      label: "List Product",
      icon: assets.list,
    },
  ];

  useEffect(() => {
    if (!isOwner) {
      navigate("/")
    }
  }, [isOwner])

  return (
    <div>
      <div>
        {/* Sidebar */}
        <div>
          <div>
            {/* Logo */}
            <div className="flex flex-1 p-3 lg:pl-12">
              <Link to={"/"} className="flex items-end">
                <img src={assets.logoImg} alt="logoImg" className="h-11" />
                <span className="bold-24 relative top-1 right-2">
                  ogues
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar