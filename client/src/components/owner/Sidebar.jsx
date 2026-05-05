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

  return (
    <div>
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className="flex items-center gap-3 p-3 hover:bg-gray-100"
        >
          <img src={item.icon} alt={item.label} className="w-5 h-5" />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  )
}